const mongoose = require('mongoose');

const ValueSchema = new mongoose.Schema({
  value: Number,
  units: String,
  date: Date,
  alimento: String,
  tipo_alimento: String,
  horas_expirar: Number,
  sensor: String
  //las horas_expirar y tipo_alimento no deberian de poder update
});

//estudiar git

const ValuesDB = mongoose.model('test', ValueSchema, 'test');

module.exports = { ValuesDB };
