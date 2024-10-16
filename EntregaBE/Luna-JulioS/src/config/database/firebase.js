const { getFirestore } = require("firebase-admin/firestore");

const admin = require('firebase-admin');

const serviceAccount = require('../../../fb-config.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = getFirestore();

module.exports = { db };