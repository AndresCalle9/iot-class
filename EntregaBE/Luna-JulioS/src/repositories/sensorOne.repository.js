const { ValuesDB } = require("../models/values.model");

const createDataSensorOne = async (data) => {
    try {
        const newData = new ValuesDB(data);
        return await newData.save();
    } catch(error){
        console.log(error);
    }
};

const getAllDataSesnorOne = async () => {
    try {
        return ValuesDB.find();
    } catch (error) {
        console.log(error);
    }
};

const getIdDataSensorOne = async (id) => {
    try {
        return ValuesDB.findById(id);
    } catch (error) {
        console.log(error);
    }
};

const updateDataSensorOne = async (id, body) => {
    try {
        return ValuesDB.findByIdAndUpdate({_id: id}, body, {new: true});
    } catch (error) {
        console.log(error);
    }
};

const deleteDataSensorOne = async (id) => {
    try {
        return ValuesDB.findByIdAndDelete(id);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createDataSensorOne,
    getAllDataSesnorOne,
    getIdDataSensorOne,
    updateDataSensorOne,
    deleteDataSensorOne
}