const {Router} = require("express");
const { getAllSensorOne,
    getIdSensorOne,
    updateSensorOne,
    deleteSensorOne,
    createSensorOne
 } = require("../../controllers/sensorOne.controller");



const router = Router()

router.get('/sensorone', (req, res) => {
    getAllSensorOne(req, res);
} );

router.get('/sensoroneid', (req, res) => {
    getIdSensorOne(req, res);
} );

router.put('/sensorone', (req, res) => {
    updateSensorOne(req, res);
} );

router.delete('/sensorone', (req, res) => {
    deleteSensorOne(req, res);
} );

router.post('/sensorone', (req, res) => {
    createSensorOne(req, res);
} );

module.exports = router;
