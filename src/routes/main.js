const express = require("express")
const { route } = require('express/lib/application')
const routes=express.Router()

routes.get('/',(request,response)=>{
    response.render("index")
})  
routes.get('/gallary',(request,response)=>{
    response.send("wow")
})  


module.exports=routes