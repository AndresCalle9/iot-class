const { createDataSensorOne } = require("../repositories/sensorOne.repository");
const { randomNum } = require("../utils/functions");



const createData = async (data) => {
    try {
        data.date = new Date();
        data.codigo = randomNum();
        return await createDataSensorOne(data);
    } catch (error) {
        console.log(error);
    }

};


module.exports = {
    createData
}