const {create, todos}= require("../../controllers/tarea")
const {Router}= require("express")
const router= Router()

router.get("/all",(req,res)=>{
    todos(req,res)
})

router.get("/byId",(req,res)=>{
    res.send("ID tarea")
})

router.post("/post",(req,res)=>{
    create(req,res)

})

router.put("/put", (req,res)=>{
    res.send("Nueva tarea")
})

router.delete("/delete", (req,res)=>{
    res.send("eliminando..")
})
module.exports= router
