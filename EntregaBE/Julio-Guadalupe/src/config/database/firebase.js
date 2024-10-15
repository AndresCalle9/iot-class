const { getFirestore } = require('firebase-admin/firestore');

const admin = require('firebase-admin');

const serviceAccount = require('../../../fbConfig.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


const db = getFirestore();
// db.settings({ ignoreUndefinedProperties: true }); //esto x

module.exports = { db };