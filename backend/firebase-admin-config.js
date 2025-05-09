// backend/firebase-admin-config.js
const admin = require('firebase-admin');
const serviceAccount = 
require('./vk-project-5f389-firebase-adminsdk-fbsvc-64e1652abd.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
module.exports = { db };
