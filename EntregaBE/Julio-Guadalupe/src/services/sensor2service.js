const {
    FireCreate,
    FireAllValues,
    FireGetValues,
    FireUpdateValueInfo,
    FireDeleteInfo,
} = require('../repositories/repofirebase.js');

const { create } = require('../utils/functions.js');
  
const sensor2All = async () => {
    return await FireAllValues();
};
  

const sensor2Create = async (value, paciente) => {

  try{
    const {fecha_ingreso, fecha_salida, units, sensor, edad } = create("cardiaca");
    return await FireCreate({paciente,edad, sensor, value, units, fecha_ingreso, fecha_salida});
  } catch (error) {
    console.log(error);
  }
};
  
const sensor2GetValues = async (id) => {
    try {
        return await FireGetValues(id);
    } catch (error) {
      console.log(error);
    }
};
  
const sensor2UpdateValueInfo = async (id, field, value) => {
    try {
      return await FireUpdateValueInfo(id, { [field]: value }, { new: true } );
    } catch (error) {
      console.log(error);
    }
};
  
const sensor2DeleteInfo = async (id) => {
    try {
      return await FireDeleteInfo(id);
    } catch (error) {
      console.log(error);
    }
};
  
module.exports = {
    sensor2Create,
    sensor2All,
    sensor2GetValues,
    sensor2UpdateValueInfo,
    sensor2DeleteInfo,
    
};