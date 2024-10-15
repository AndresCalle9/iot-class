const { db } = require('../config/database/firebase');

//mmm
const createRecordFB = async (record) => {
  try {
    await db.collection('test').add(record);
    return true; //return db;
  } catch (error) {
    console.log(error);
  }
};

const getAllValuesFB = async () => {
  try {
    const snapshot = await db.collection('test').get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.log(error);
  }
};

const getValueInfoFB = async (id) => {
  try {
    console.log(id);
    const item = await db.collection('test').doc(id).get();
    return item.data();
  } catch (error) {
    console.log(error);
  }
};

const updateValueInfoFB = async (id, field) => {
  try {
    await db.collection('test').doc(id).update(field); //esto es lo que se cambia -> estaba .update({value})
    return `¡Campo cambiado con éxito! Campo actualizado: ${JSON.stringify(field).replace(/\"/g, '')}`;
  } catch (error) {
    console.log(error);
  }
};

const deleteValueInfoFB = async (id) => {
  try {
    const item = db.collection('test').doc(id);
    return item.delete();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createRecordFB,
  getAllValuesFB,
  getValueInfoFB,
  updateValueInfoFB,
  deleteValueInfoFB,
};
