const {servicePost}=require("../services/nuevaTarea.js")
const {db}= require("../utils/database.js")

const create=async(req,res)=>{
    const {body}= req
    const data= await servicePost((body))
    res.send({data})
}

const todos=async(req,res)=>{
    res.send(db)
}


module.exports= {create, todos}

