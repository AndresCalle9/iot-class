const {Router} = require("express");

const {getAll, post1, getId} = require("../../controllers/tareas.controller")

const router = Router();

//GET ALL
router.get("/", async (req, res)=>{
   await getAll(req,res); //funcion de controller
})

//GET BY ID
router.get("/id", async (req, res)=>{
    await getId(req,res); //funcion de controller
})

//POST
router.post("/", async (req, res)=>{
    await post1(req,res); //funcion de controller
})

//PUT -> update
router.put("/", async (req, res)=>{
    await put1(req,res); //funcion de controller
})

//DELETE
router.delete("/", (req, res)=>{
    const {body} = req;
    res.send("Hello World"); //funcion de controller
})

module.exports= router