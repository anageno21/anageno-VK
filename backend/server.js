// backend/server.js
console.log('Ξεκινάει ο server...');
const express = require('express');
const cors = require('cors');
const { db } = require('./firebase-admin-config');
const app = express();

app.use(cors());
app.use(express.json());

// Endpoint για σύνδεση (mock, αφού δεν έχουμε authentication ακόμα)
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Λείπουν υποχρεωτικά πεδία' });
  }

  const users = [
    { userId: '1', username: 'user1', password: 'password1' },
    { userId: '2', username: 'user2', password: 'password2' },
  ];

  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Λάθος όνομα χρήστη ή κωδικός' });
  }

  res.status(200).json({ userId: user.userId, username: user.username });
});

// Endpoint για διαθεσιμότητα
app.get('/api/availability/therapist/:id', async (req, res) => {
  const { id } = req.params;
  const { date } = req.query;

  if (!id || !date) {
    return res.status(400).json({ error: 'Λείπουν υποχρεωτικά πεδία' });
  }

  const therapistAvailability = {
    1: {
      '2025-05-10': ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
      '2025-05-11': ['10:00', '11:00', '12:00', '14:00', '15:00'],
    },
    2: {
      '2025-05-10': ['09:00', '10:00', '12:00', '13:00', '15:00'],
      '2025-05-11': ['09:00', '11:00', '13:00', '14:00', '16:00'],
    },
  };

  const therapistId = parseInt(id);
  const availableTimes = therapistAvailability[therapistId]?.[date] || [];

  try {
    const bookingsSnapshot = await db.collection('bookings')
      .where('therapistId', '==', therapistId)
      .where('date', '==', date)
      .get();

    const bookedTimes = bookingsSnapshot.docs.map(doc => doc.data().time);
    const finalAvailableTimes = availableTimes.filter(time => !bookedTimes.includes(time));

    res.status(200).json({ availableTimes: finalAvailableTimes });
  } catch (error) {
    res.status(500).json({ error: 'Σφάλμα κατά την ανάκτηση διαθεσιμότητας: ' + error.message });
  }
});

// Endpoint για κρατήσεις
app.post('/api/bookings', async (req, res) => {
  const { therapistId, userId, date, time, sessionType } = req.body;

  if (!therapistId || !userId || !date || !time || !sessionType) {
    return res.status(400).json({ error: 'Λείπουν υποχρεωτικά πεδία' });
  }

  const booking = {
    bookingId: Date.now().toString(),
    therapistId,
    userId,
    date,
    time,
    sessionType,
  };

  try {
    await db.collection('bookings').doc(booking.bookingId).set(booking);
    console.log('Νέα κράτηση:', booking);
    res.status(200).json({ message: 'Η κράτηση δημιουργήθηκε', bookingId: booking.bookingId });
  } catch (error) {
    res.status(500).json({ error: 'Σφάλμα αποθήκευσης κράτησης: ' + error.message });
  }
});

app.listen(5000, () => console.log('Ο server τρέχει στη θύρα 5000'));