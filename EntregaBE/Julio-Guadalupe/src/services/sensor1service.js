const {
    MongoCreate,
    MongoAllValues,
    MongoGetValues,
    MongoUpdateValueInfo,
    MongoDeleteInfo,
} = require('../repositories/repomongodb.js');

const { create } = require('../utils/functions.js');
  
const  sensor1All= async () => {
    return await MongoAllValues();
};
  

const sensor1Create = async (value, paciente) => {

  try{
    const {fecha_ingreso, fecha_salida, units, sensor, edad  } = create("respiratoria");
    return await MongoCreate({paciente, edad, sensor, value, units, fecha_ingreso, fecha_salida});
  } catch (error) {
    console.log(error);
  }
};
  
const sensor1GetValues = async (id) => {
    try {
        return await MongoGetValues(id);
    } catch (error) {
      console.log(error);
    }
};
  
const sensor1UpdateValueInfo = async (id, field, value) => {
    try {
      return await MongoUpdateValueInfo(id, { [field]: value }, { new: true } );
    } catch (error) {
      console.log(error);
    }
};
  
const sensor1DeleteInfo = async (id) => {
    try {
      return await MongoDeleteInfo(id);
    } catch (error) {
      console.log(error);
    }
};
  
module.exports = {
    sensor1Create,
    sensor1All,
    sensor1GetValues,
    sensor1UpdateValueInfo,
    sensor1DeleteInfo,
};