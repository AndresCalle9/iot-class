const { createDataSensorTwo } = require("../repositories/sensorTwo.repository");


const createDataFB = async (data) => {
    try {
        data.date = new Date();
        return await createDataSensorTwo(data);
    } catch (error) {
        console.log(error);
    }

};


module.exports = {
    createDataFB
}