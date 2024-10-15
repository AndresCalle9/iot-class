const { getAllDataSensorTwo, getIdDataSensorTwo, updateDataSensorTwo, deleteDataSensorTwo, createDataSensorTwo } = require("../repositories/sensorTwo.repository");
const { createDataFB } = require("../services/sensorTwo.service");


const getAllSensorTwo = async (req, res) => {
    try {
        const dataSensorTwo = await getAllDataSensorTwo();
        res.json(dataSensorTwo);
    } catch (error) {
        console.log(error);
        
    }
};

const getIdSensorTwo = async (req, res) => {
    try {
        const {id} = req.query;
        const dataIdSensorTwo = await getIdDataSensorTwo(id);
        res.json(dataIdSensorTwo);
    } catch (error) {
        console.log(error);
        
    }
};

const updateSensorTwo = async (req, res) => {
    try {
        const { id } = req.query;
        const { body } = req;
        const dataUpdateSensorTwo = await updateDataSensorTwo(id, body);
        res.json(dataUpdateSensorTwo);
    } catch (error) {
        console.log(error);
        
    }
};

const deleteSensorTwo = async (req, res) => {
    try {
        const { id } = req.query;
        const dataDeleteSensorTwo = await deleteDataSensorTwo(id);
        res.json(dataDeleteSensorTwo);
    } catch (error) {
        console.log(error);
       
    }
};

const createSensorTwo = async (req, res) => {
    try {
        const { body } = req;
        const dataCreateSensorTwo = await createDataFB(body);
        res.json(dataCreateSensorTwo);
    } catch (error) {
        console.log(error);
        
    }
};

module.exports = {
    getAllSensorTwo,
    getIdSensorTwo,
    updateSensorTwo,
    deleteSensorTwo,
    createSensorTwo
}