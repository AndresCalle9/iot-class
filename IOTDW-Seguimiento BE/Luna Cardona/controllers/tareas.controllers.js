const {agregar, mostrarTodo, mostrarId, cambiar} = require("../services/tareas.service");


const accesoCompleto = async(req, res) =>{
    const tareasCompletas = await mostrarTodo ();
    res.send(tareasCompletas)
}; 

const accesoId = async(req, res)=>{
    const {id} = req.query;
    const tareasId = await mostrarId(parseInt(id));
    res.send(tareasId);
};

const nuevo = async (req, res) =>{
    const {body} = req;
    const datos = await agregar(body);
    res.send(datos);
};

const actualizar = async(req, res)=>{
    const {id} = req.query;
    const tareasId = await cambiar(parseInt(id));
    res.send(tareasId);
};


const eliminar = (req, res)=>{

}

module.exports = {
    accesoCompleto,
    accesoId,
    nuevo, 
    actualizar, 
    eliminar,
}

