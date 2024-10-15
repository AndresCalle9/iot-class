var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://broker.hivemq.com');

const {createValueInfo} = require('../services/sensor1.services')
const {createValueInfo2} = require('../services/sensor2.service')

client.on('connect', function () {
    client.subscribe('FreshGuard');
}); 

client.on('message', async function (topic, message) {
    // message is Buffer
    const messageInfo = message.toString().split(';');
    // let number = 0;
    await createValueInfo(parseInt(messageInfo[0]), messageInfo[1]); //temp
    await createValueInfo2(parseInt(messageInfo[0]), messageInfo[1]); //humedad
    console.log(message.toString());
    // client.publish('AndresCalle3', `${number}`); //devuelta la fecha de expiracion del producto, poderse leer en lcd

    // client.end();
});
