const { modify } = require("../services/jsjd.service");

const getAll = (req, res) => {
    res.send('Hola');
}

const getById = (req, res) => {
    res.send("Hola sebas ID");
}

const postHomework = async (req, res) => {
    const {body} = req;
    res.send("Enviado");
    modify(body);

}


module.exports = {
    getAll,
    getById,
    postHomework
}