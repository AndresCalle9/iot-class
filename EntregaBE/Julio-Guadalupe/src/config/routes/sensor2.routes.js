const { Router } = require('express');

const router = Router();

const {
    getSensor2Values,
    getSensor2Value,
    sensor2createValue,
    sensor2updateValue,
    sensor2deleteRecord
} = require('../../controllers/sensor2.controller');

router.get('/sensor2', getSensor2Values);
router.get('/sensor2/id', getSensor2Value);
router.post('/sensor2', sensor2createValue);
router.put('/sensor2', sensor2updateValue);
router.delete('/sensor2', sensor2deleteRecord);

module.exports = router;