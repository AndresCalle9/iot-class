const { getFirestore } = require('firebase-admin/firestore');

const admin = require('firebase-admin');

const serviceAccount = require('../../../fb-FreshGuard.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
console.log('FB is conected');

const db = getFirestore();
// db.settings({ ignoreUndefinedProperties: true }); //esto x

module.exports = { db };
