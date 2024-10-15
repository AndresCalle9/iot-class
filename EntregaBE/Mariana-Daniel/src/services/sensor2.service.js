//con firebase y con humedad
const {
    createRecordFB,
    getAllValuesFB,
    getValueInfoFB,
    updateValueInfoFB,
    deleteValueInfoFB,
} = require('../repositories/server-fb.repository');

const { create } = require('../utils/functions');
  
const getSensor2Info = async () => {
    return await getAllValuesFB();
};
  
//create con pub de mqtt
const createValueInfo2 = async (value, alimento) => {
  // try {
  //   const alimentos = {
  //     tuberculo: ["papa", "yuca"],
  //     fruta: ["manzana", "pera"],
  //     verdura: ["lechuga", "tomate", "zanahoria", "cilantro"],
  //     proteico: ["pollo", "carne"]
  //   };
  //   //corregir de verdad las horas acorde
  //   for (const tipo_alimento of Object.keys(alimentos)) {
  //     if (alimentos[tipo_alimento].includes(alimento)) {
  //       if (tipo_alimento === "tuberculo"){
  //         horas_expirar = 12
  //       } else if (tipo_alimento === "fruta"){
  //         horas_expirar = 24
  //       } else if (tipo_alimento === "verdura"){
  //         horas_expirar = 10
  //       }  else{
  //         horas_expirar = 36
  //       }
  //       const sensor = "DHT11";
  //       value = value.toString()+"%";
        
  //       return await createRecordFB({ value, alimento, tipo_alimento, horas_expirar, sensor, date: new Date() });
  //     }
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
  try{
    const { tipo_alimento, horas_expirar, sensor, units } = create(alimento, "humedad");
    return await createRecordFB({value, units, date: new Date(), alimento, tipo_alimento, horas_expirar, sensor});
  } catch (error) {
    console.log(error);
  }
};
  
const getValue = async (id) => {
    try {
        return await getValueInfoFB(id);
    } catch (error) {
      console.log(error);
    }
};
  
const updateInfo = async (id, field, value) => {
    try {
      return await updateValueInfoFB(id, { [field]: value }, { new: true } );
    } catch (error) {
      console.log(error);
    }
};
  
const deleteInfo = async (id) => {
    try {
      return await deleteValueInfoFB(id);
    } catch (error) {
      console.log(error);
    }
};
  
module.exports = {
    getSensor2Info,
    createValueInfo2,
    getValue,
    updateInfo,
    deleteInfo,
};
  