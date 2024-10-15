var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://broker.hivemq.com');

const {sensor1Create} = require('../services/sensor1service')
const {sensor2Create} = require('../services/sensor2service')

client.on('connect', function () {
    client.subscribe('Vanguardia Animal');
}); 

client.on('message', async function (topic, message) {
    
    const messageInfo = message.toString().split(';');
    
    await sensor1Create(parseInt(messageInfo[0]), messageInfo[2]); //temp
    await sensor2Create(parseInt(messageInfo[1]), messageInfo[2]); //humedad
    console.log(message.toString());
    
});