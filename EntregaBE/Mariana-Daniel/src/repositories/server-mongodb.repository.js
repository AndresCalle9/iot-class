const { ValuesDB } = require('../models/values.model');

//mmm
const createRecord = async (record) => {
  try {
    const newRecord = new ValuesDB(record);
    return await newRecord.save();
  } catch (error) {
    console.log(error);
  }
};

const getAllValues = async () => {
  try {
    return ValuesDB.find();
  } catch (error) {
    console.log(error);
  }
};

const getValueInfo = async (id) => {
  try {
    return ValuesDB.findById(id);
  } catch (error) {
    console.log(error);
  }
};

const updateValueInfo = async (id, field) => {
  try {
    return ValuesDB.findOneAndUpdate({ _id: id }, field);//{value} es lo que se cambia
  } catch (error) {
    console.log(error);
  }
};

const deleteValueInfo = async (id) => {
  try {
    return ValuesDB.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createRecord,
  getAllValues,
  getValueInfo,
  updateValueInfo,
  deleteValueInfo,
};
