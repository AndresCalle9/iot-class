const express = require("express");
const cors = require("cors");
const todos = require("./routes/jsjd.routes");




const app = express();

app.set('port', 3000);

app.listen(app.get('port'),  function(){
    console.log("El servidor esta conectado", app.get('port'));
});

app.use(express.json());
app.use(cors());

app.use("/api", todos);




