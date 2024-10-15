const mqtt = require("mqtt");
const { createDataFB } = require("../services/sensorTwo.service");
const { createData } = require("../services/sensorOne.service");
const client = mqtt.connect('mqtt://broker.hivemq.com');

client.on('connect', function () {
    client.subscribe("InventarioLCJ");
    client.subscribe("ServiciosLCJ");
});

client.on('message', async function (topic, message) {
    const messageInfo = message.toString().split(";");

    if (topic === "InventarioLCJ") {
        const data = {};
        data.ubicacion = messageInfo[0];
        data.nombre = messageInfo[1];
        data.marca = messageInfo[2];
        data.serie = messageInfo[3];
        data.estado = messageInfo[4];
        await createData(data);
        console.log(`Desde InventarioLCJ: ${messageInfo}`);
    } else if (topic === "ServiciosLCJ") {
        const data = {};
        data.plantilla = messageInfo[0];
        data.estado = messageInfo[1];
        data.accion = messageInfo[2]
        await createDataFB(data);
        console.log(`Desde ServiciosLCJ: ${messageInfo}`);

    }

})