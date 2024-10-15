const { getAllDataSesnorOne, getIdDataSensorOne, updateDataSensorOne, deleteDataSensorOne } = require("../repositories/sensorOne.repository");
const { createData } = require("../services/sensorOne.service");



const getAllSensorOne = async (req, res) => {
    try {
        const dataSensorOne = await getAllDataSesnorOne();
        res.json(dataSensorOne);
    } catch (error) {
        console.log(error);
        res.send("Not Found");
    }
};

const getIdSensorOne = async (req, res) => {
    try {
        const {id} = req.query;
        const dataIdSensorOne = await getIdDataSensorOne(id);
        res.json(dataIdSensorOne);
    } catch (error) {
        console.log(error);
        res.send("Id no encontrado");
    }

};

const updateSensorOne = async (req, res) => {
    try {
        const { id } = req.query;
        const { body } = req;
        const dataUpdateSensorOne = await updateDataSensorOne(id, body);
        res.json(dataUpdateSensorOne);
    } catch (error) {
        console.log(error);
        res.send("Not Found");
        
    }

};

const deleteSensorOne = async (req, res) => {
    try {
        const { id } = req.query;
        const dataDeleteSensorOne = await deleteDataSensorOne(id);
        res.json(dataDeleteSensorOne);
    } catch (error) {
        console.log(error);
        res.send("Not Found");
    }

};

const createSensorOne = async (req, res) => {
    try {
        const { body } = req;
        console.log(body);
        const dataCreateSensorOne = await createData(body);
        res.json(dataCreateSensorOne);
    } catch (error) {
        console.log(error);
        res.send("Not Found");
    }

};

module.exports = {
    getAllSensorOne,
    getIdSensorOne,
    updateSensorOne,
    deleteSensorOne,
    createSensorOne
}