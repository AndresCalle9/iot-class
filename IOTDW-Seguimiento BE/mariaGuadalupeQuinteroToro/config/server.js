const express= require("express")
const cors= require("cors")
const tareas= require("./routes/tareas.routes.js")


const app= express()

app.set("port",3000)
app.listen(app.get("port"),()=>{
    console.log(`conectado al puerto ${app.get("port")}`)
})

app.use(express.json())
app.use(cors())

app.use("", tareas)