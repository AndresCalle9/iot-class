const { Router } = require('express');

const router = Router();

const {
  getSensor2Values,
  getSensor2Value,
  createValue,
  updateValue,
  deleteRecord,
} = require('../../controllers/sensor2.controller');

router.get('/sensor2', getSensor2Values);
router.get('/sensor2/id', getSensor2Value);
router.post('/sensor2', createValue);
router.put('/sensor2', updateValue);
router.delete('/sensor2', deleteRecord);

module.exports = router;
