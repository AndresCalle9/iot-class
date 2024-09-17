const { create } = require('../repositories/repo.js');

const servicePost = async (data) => {
    data.id = Math.random();
    data.titulo= data.titulo;
    data.importancia= data.importancia;
    data.createAt = new Date();
    const datos = await create(data);
    return datos;
}

module.exports = {
    servicePost
}