const mongoose = require('mongoose');

const ValueSchema = new mongoose.Schema({
  value: Number,
  units: String,
  fecha_ingreso: Date,
  fecha_salida: Date,
  nombre: String,
  edad: Number,
  sensor: String

});

const ValuesDB = mongoose.model('test', ValueSchema, 'test');

module.exports = { ValuesDB };
