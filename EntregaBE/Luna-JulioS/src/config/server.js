const express = require("express");
const cors = require("cors");
const mongoDB = require("./database/mongodb");
const sensorOne = require('./routes/sensorOne.routes');
const sensorTwo = require('./routes/sensorTwo.routes');
require("./pub");
require("./sub");


if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
};


//Inicializacion
const app = express();
mongoDB.connect();


//Configuracion
app.set('port', process.env.PORT);
app.listen(app.get('port'), () =>{
    console.log("El servidor esta conectado", app.get('port'));
});


//Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));

//Rutas
app.use(process.env.API_VERSION_ROUTE, sensorOne);
app.use(process.env.API_VERSION_ROUTE, sensorTwo);