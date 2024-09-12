
const { servicePostSensor1 } = require('../services/sensor1.service');

const helloWorld = (req, res) => {
    res.send('Hello World');
}

const getSensor1 = (req, res) => {
    res.send('Están consumiendo el endpoint sensor1');
}

const postSensor1 = async (req, res) => {
    const { body } = req;
    const data = await servicePostSensor1(body);
    res.send(data);
}

module.exports = {
    helloWorld,
    getSensor1,
    postSensor1
}