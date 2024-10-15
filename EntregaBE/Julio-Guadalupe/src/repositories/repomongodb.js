const { ValuesDB } = require('../models/values.models.js');

//mmm
const MongoCreate = async (record) => {
  try {
    const newRecord = new ValuesDB(record);
    return await newRecord.save();
  } catch (error) {
    console.log(error);
  }
};

const MongoAllValues = async () => {
  try {
    return ValuesDB.find();
  } catch (error) {
    console.log(error);
  }
};

const MongoGetValues = async (id) => {
  try {
    return ValuesDB.findById(id);
  } catch (error) {
    console.log(error);
  }
};

const MongoUpdateValueInfo = async (id, field) => {
  try {
    return ValuesDB.findOneAndUpdate({ _id: id }, field);//{value} es lo que se cambia
  } catch (error) {
    console.log(error);
  }
};

const MongoDeleteInfo = async (id) => {
  try {
    return ValuesDB.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
    MongoCreate,
    MongoAllValues,
    MongoGetValues,
    MongoUpdateValueInfo,
    MongoDeleteInfo,
};