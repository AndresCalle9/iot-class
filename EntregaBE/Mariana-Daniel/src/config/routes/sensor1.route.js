const { Router } = require('express');

const router = Router();

const {
  getSensor1Values,
  getSensor1Value,
  createValue,
  updateValue,
  deleteRecord,
} = require('../../controllers/sensor1.controller');

router.get('/sensor1', getSensor1Values); //get all
router.get('/sensor1/id', getSensor1Value);
router.post('/sensor1', createValue);
router.put('/sensor1', updateValue);
router.delete('/sensor1', deleteRecord);

module.exports = router;
