var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://broker.hivemq.com');

//poner lo que yo quiero que me mande
client.on('connect', function () {
    setInterval(()=> {
        const value1 = Math.floor(Math.random() * (140 - 60 + 1)) + 60; 
        const value2 = Math.floor(Math.random() * (40 - 10 + 1)) + 10; 
        const paciente = ["Rocky", "Luna", "Max", "Bella", "Toby", "Daisy", "Bruno", "Coco"]; //me lo ingresa en pantalla 
        const name = pacientes[Math.floor(Math.random() * pacientes.length)];
        client.publish('Vanguardia Animal', `${value1};${value2};${paciente[name]}`);
    }, 3000)
}); 
