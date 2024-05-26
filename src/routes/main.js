const express = require("express")
const { route } = require('express/lib/application')
const routes=express.Router()
const Detail=require("../models/details")

routes.get('/',(request,response)=>{
    response.render("index")
    Detail.find
})  
routes.get('/gallary',(request,response)=>{
    response.render("gallary")
})  


module.exports=routes