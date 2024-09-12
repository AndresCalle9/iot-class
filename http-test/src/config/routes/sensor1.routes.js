const { Router } = require('express');
const { helloWorld, getSensor1, postSensor1 } = require('../../controllers/sensor1.controller');

const router = Router();

router.get('/', (req, res) => {
    helloWorld(req, res);
});

router.get('/sensor1', (req, res) => {
    getSensor1(req, res);
}) 

router.post('/sensor1', (req, res) => {
    postSensor1(req, res);
})

module.exports = router;