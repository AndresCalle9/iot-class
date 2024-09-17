const {post1ser, getAllser, getIdser, put1ser} = require("../services/tareas.services");

const post1 = async (req,res) => {
    const {body} = req; //deberia ser query pq query le manda al front toda la db
    await post1ser(body);
    res.send("Se creó una nueva tarea");
}

const getAll = async (req,res) => {
    //hacer que me traiga todo el array de utils
    const db = await getAllser();
    res.send({db});
}

const getId = async (req,res) => {
    const {body} = req;
    const id = body.id;
    const db = await getIdser(id);
    res.send({db});
}

const put1 = async (req,res) => {
    const {id, description} = req.body;
    const db = await put1ser(id, description);
    res.send({db});
}

module.exports = {
    post1,
    getAll,
    getId,
    put1
}