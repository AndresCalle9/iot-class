const mqtt = require("mqtt");
const { random } = require("../utils/functions");
const client = mqtt.connect('mqtt://broker.hivemq.com');

client.on('connect', function () {
    setInterval(() => {
        const servicio = random('servicios');
        const equipo = random('equipos');
        const marca = random('marcas');
        const serial = random('seriales');
        const estado = random('estados');
        const plantilla = random('plantillas');
        const estadoHuella = random('estadosHuella');
        const accion = random('acciones');
        client.publish("InventarioLCJ", `${servicio};${equipo};${marca};${serial};${estado}`);
        client.publish("ServiciosLCJ", `${plantilla};${estadoHuella};${accion}`);

    }, 5000)

});

