var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://broker.hivemq.com');

client.on('connect', function () {
    setInterval(()=> {
        const value = Math.floor(Math.random()*100);
        client.publish('AndresCalle2', `1;${value}`);
        client.publish('AndresCalle2', `0;${value}`);
    }, 3000)
    
    }); 
