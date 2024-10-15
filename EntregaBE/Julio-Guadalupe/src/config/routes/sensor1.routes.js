const {Router}= require ("express")
const router = Router();

const {
    getSensor1Values,
    getSensor1Value,
    sensor1createValue,
    sensor1updateValue,
    sensor1deleteRecord
} = require('../../controllers/sensor1.controller');

router.get('/sensor1', getSensor1Values);
router.get('/sensor1/id', getSensor1Value);
router.post('/sensor1', sensor1createValue);
router.put('/sensor1', sensor1updateValue);
router.delete('/sensor1', sensor1deleteRecord);

module.exports = router;