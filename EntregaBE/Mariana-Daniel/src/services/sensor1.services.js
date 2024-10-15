// Con mongo y con temp
const {
    createRecord,
    getAllValues,
    getValueInfo,
    updateValueInfo,
    deleteValueInfo,
} = require('../repositories/server-mongodb.repository');

const { create } = require('../utils/functions');

//cambiar todo esto
const getSensor1Info = async () => {
    try {
        return await getAllValues();
    }
    catch(err){
        console.log(err);
    }
};

//create con mqtt
const createValueInfo = async (value, alimento) => {
    try{
      const { tipo_alimento, horas_expirar, sensor, units } = create(alimento, "temperatura");
      return await createRecord({value, units, alimento, tipo_alimento, horas_expirar, sensor, date: new Date()});
    } catch (error) {
      console.log(error);
    }
};
  
const getValue = async (id) => {
    try {
      return await getValueInfo(id);
    } catch (error) {
      console.log(error);
    }
};

const updateInfo = async (id, field, value) => {
    //cambiar todo esto
    return await updateValueInfo(id, { [field]: value }, // Se usa la notación de propiedad computada para asignar dinámicamente el campo
      { new: true } );
    // const document = await getValue(id);
    // if (document) {
    //   const docObject = document.toObject ? document.toObject() : document; //volver objeto si existe el documento
    //   // Verificar si el campo existe en el objeto del documento
    //   if (!(field in docObject)) {
    //   return (`El campo '${JSON.stringify(field)}' no existe en el documento`);
    //   }
    // } else{
//     return await updateValueInfo(id, { [field]: value });
//     }
};
  
const deleteInfo = async (id) => {
    try {
      return await deleteValueInfo(id);
    } catch (error) {
      console.log(error);
    }
};
  
module.exports = {
    getSensor1Info,
    createValueInfo,
    getValue,
    updateInfo,
    deleteInfo,
};
  