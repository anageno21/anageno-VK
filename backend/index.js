// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const bcrypt = require('bcrypt'); // Προσθήκη της βιβλιοθήκης bcrypt

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Σύνδεση με τη MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Μοντέλο Ψυχολόγου
const PsychologistSchema = new mongoose.Schema({
  name: String,
  availableDays: [String],
  availableTimes: [String],
});
const Psychologist = mongoose.model('Psychologist', PsychologistSchema);

// Μοντέλο Κράτησης
const BookingSchema = new mongoose.Schema({
  psychologist: String,
  date: String,
  time: String,
  clientName: String,
  paymentStatus: String,
});
const Booking = mongoose.model('Booking', BookingSchema);

// Μοντέλο Χρήστη
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true }, // Προσθήκη πεδίου password
  registrationLevel: { type: String, enum: ['basic', 'advanced'], default: 'basic' },
  stripeCustomerId: { type: String },
  createdAt: { type: Date, default: Date.now },
});
const User = mongoose.model('User', UserSchema);

// API για τη δημιουργία payment intent
app.post('/api/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: ['card'],
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API για τη λήψη διαθέσιμων ψυχολόγων
app.get('/api/psychologists', async (req, res) => {
  try {
    const psychologists = await Psychologist.find();
    res.json(psychologists);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API για τη δημιουργία κράτησης
app.post('/api/bookings', async (req, res) => {
  const { psychologist, date, time, clientName, paymentStatus } = req.body;

  try {
    const booking = new Booking({ psychologist, date, time, clientName, paymentStatus });
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API για τη λήψη διαθέσιμων ημερών και ωρών ενός ψυχολόγου
app.get('/api/psychologists/:name/availability', async (req, res) => {
  try {
    const psychologist = await Psychologist.findOne({ name: req.params.name });
    if (!psychologist) {
      return res.status(404).json({ error: 'Psychologist not found' });
    }
    res.json({ availableDays: psychologist.availableDays, availableTimes: psychologist.availableTimes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API για το πρώτο επίπεδο εγγραφής (Basic)
app.post('/api/register/basic', async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Κρυπτογράφηση του κωδικού πρόσβασης
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      name,
      email,
      phone,
      password: hashedPassword, // Αποθήκευση του κρυπτογραφημένου κωδικού
      registrationLevel: 'basic',
    });

    await user.save();
    res.status(201).json({ message: 'Basic registration successful', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API για το δεύτερο επίπεδο εγγραφής (Advanced)
app.post('/api/register/advanced', async (req, res) => {
  const { email, paymentMethodId } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.registrationLevel === 'advanced') {
      return res.status(400).json({ error: 'User already has advanced registration' });
    }

    const customer = await stripe.customers.create({
      email: user.email,
      name: user.name,
      payment_method: paymentMethodId,
      invoice_settings: { default_payment_method: paymentMethodId },
    });

    user.stripeCustomerId = customer.id;
    user.registrationLevel = 'advanced';
    await user.save();

    res.status(200).json({ message: 'Advanced registration successful', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API για σύνδεση (Login)
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));