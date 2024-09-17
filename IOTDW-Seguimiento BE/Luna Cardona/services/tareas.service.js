const {post, getAll, getbyId, put} = require("../repositories/tareas.repository");

let id = 1001

const agregar = async(body) => {
    body.ID = id
    body.fechaCreacion = new Date();
    const values = await post(body);
    id += 1
    return values;
}

const mostrarTodo = async() => {
    const values = await getAll();
    return values; 
};

const mostrarId = async(id) => {
    const valuesId = await getbyId(id);
    return valuesId;
};

const cambiar = async(id) => {
    const cambioId = await put(id);
    return cambioId;
}


module.exports = {
    agregar, 
    mostrarTodo,
    mostrarId,
    cambiar
}

