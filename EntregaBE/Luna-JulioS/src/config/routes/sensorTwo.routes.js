const {Router} = require("express");
const { getAllSensorTwo, getIdSensorTwo, updateSensorTwo, deleteSensorTwo, createSensorTwo } = require("../../controllers/sensorTwo.controller");




const router = Router()

router.get('/sensortwo', (req, res) => {
    getAllSensorTwo(req, res);
} );

router.get('/sensortwoid', (req, res) => {
    getIdSensorTwo(req, res);
} );

router.put('/sensortwo', (req, res) => {
    updateSensorTwo(req, res);
} );

router.delete('/sensortwo', (req, res) => {
    deleteSensorTwo(req, res);
} );

router.post('/sensortwo', (req, res) => {
    createSensorTwo(req, res);
} );

module.exports = router;
