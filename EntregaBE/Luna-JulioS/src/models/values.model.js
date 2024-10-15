const mongoose = require('mongoose');

const ValueSchema = new mongoose.Schema({
    codigo: Number,
    ubicacion: String,
    nombre: String,
    marca: String,
    serie: String,
    estado: String,
    date: Date,
});

const ValuesDB = mongoose.model('inv', ValueSchema, 'inv');

module.exports = { ValuesDB };