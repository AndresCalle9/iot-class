const express = require('express');
const cors = require("cors");
const mongoDB = require('./database/mongodb');
const router1 = require("./routes/sensor1.routes");
const router2 = require("./routes/sensor2.routes");

require("./pub.js"); 
require("./sub.js");

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const app = express();
mongoDB.connect();
app.use(cors());

//Configuración
app.set("port", process.env.PORT || 5002);
app.listen(app.get("port"), ()=> {
    console.log(`server is running on port ${app.get("port")}`)
})

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//rutas

app.use(process.env.API_VERSION_ROUTE, router1); 
app.use(process.env.API_VERSION_ROUTE, router2);