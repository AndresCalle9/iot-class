const {Router} = require("express");
const {accesoCompleto, accesoId, nuevo, actualizar, eliminar} = require("../../controllers/tareas.controllers")


const router = Router();

router.get("/getall", (req, res) => {
    accesoCompleto(req, res);

});

router.get("/getbyID", (req, res) => {
    accesoId(req, res);
    
});

router.post("/nuevo", (req, res) =>{
    nuevo(req, res);
});

router.put("/actualizar", (req, res) =>{
    actualizar(req, res);
});

router.delete("/eliminar", (req, res) =>{
    eliminar(req, res);
});

module.exports = router
