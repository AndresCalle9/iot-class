const express = require('express');
const cors = require("cors");

const router = require("./routes/tareas.routes");

const app = express();

//Configuración
app.set("port", 3000);
app.listen(app.get("port"), ()=> {
    console.log(`Server is running on port ${app.get("port")}`)
})

//Middlewares
app.use(express.json());
app.use(cors());

//rutas
app.use("",router);