const { Router } = require("express");
const { getAll, getById, postHomework } = require("../../controllers/jsjd.controller");

//funciones

const router = Router()


router.get("/todos", (req,res) => {
    getAll(req,res);
});

router.get("/id", (req, res) => {
    getById(req, res);
});

router.post("/create", (req, res) => {
    postHomework(req, res);
})



module.exports = router;