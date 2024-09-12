const { createData } = require('../repositories/sensor1.repository');

const servicePostSensor1 = async (data) => {
    data.edad = data.edad * 2;
    data.createAt = new Date();
    const datos = await createData(data);
    return datos;
}

module.exports = {
    servicePostSensor1
}