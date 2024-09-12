var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://broker.hivemq.com');

client.on('connect', function () {
    client.subscribe('AndresCalle2');
    }); 

client.on('message', function (topic, message) {
    // message is Buffer
    const messageInfo = message.toString().split(';');
    let number = 0;
    if (messageInfo[0] == '1'){
        number = parseInt(messageInfo[1]) +100;
    }
    else{
        number = parseInt(messageInfo[1]) +50;
    }
    console.log(message.toString());
    client.publish('AndresCalle3', `${number}`);

    // client.end();
});

