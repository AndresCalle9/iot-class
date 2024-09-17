const {array} = require("../utils/functions");

const post = (body) => {
    array.push(body);
    return array;
}

const getAll = () => {
    return array
}

const getbyId = (id) => {
    const info = array.filter((dato)=>{return dato.ID == id});
    return info;
}

const put = (id) => {
    const informacion = array.filter((datos)=>{return datos.ID == id});
    return informacion;
}

module.exports = {
    post,
    getAll,
    getbyId,
    put
}

