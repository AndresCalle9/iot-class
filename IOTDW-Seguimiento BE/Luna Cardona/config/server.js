const express = require("express");
const cors = require("cors");
const tareasRoutes = require("./routes/tareas.routes");


const app = express();

app.set("port", 3000);
app.listen(app.get("port"), ()=> {
    console.log("conectada", app.get("port"));
});

app.use(express.json());
app.use(cors());

app.use("", tareasRoutes);
