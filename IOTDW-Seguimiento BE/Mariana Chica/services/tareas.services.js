const {post1Rep, getRep, put} = require("../repositories/tareas.repository");

let id = 0
const db =  getRep();

const post1ser = async (datos) => {
    datos.id = id;
    datos.fecha = new Date();
    const data = await post1Rep(datos);
    id += 1;
    return data
}


const getAllser = async ()=> {
    return db
}

const getIdser = async (id)=> {
    return db.find((item) => item.id === id)
}

const put1ser = async (id, description) => {
    const c = db.map((dato) =>{
        if(dato.id === parseInt(id)){
            datos.description = description;
        }
    }); // db.id === id // recorro db que es toda la base de datos, de ahi miro la que tenga el id y cambio el valor del key que necesite 
    
    const db_up = await put(c);
    return db_up
}

module.exports={
    post1ser,
    getAllser,
    getIdser,
    put1ser
}