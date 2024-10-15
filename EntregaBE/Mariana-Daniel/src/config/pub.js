var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://broker.hivemq.com');

//poner lo que yo quiero que me mande
client.on('connect', function () {
    setInterval(()=> {
        const value = Math.floor(Math.random()*100); //hace de imitacion de temp y humedad
        const alimento = ["papa", "yuca","zanahoria","manzana","pera","cilantro","tomate","lechuga", "carne", "pollo"]; //me lo ingresa en pantalla 
        var v = Math.floor(Math.random()*alimento.length);
        // console.log(alimento[v]); //verificar
        client.publish('FreshGuard', `${value};${alimento[v]}`);
    }, 3000)
}); 
