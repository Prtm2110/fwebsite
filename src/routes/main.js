const express = require("express")
const { route } = require('express/lib/application')
const routes=express.Router()
const Detail=require("../models/details")

routes.get('/', (request,response)=>{
    response.render("index")
    const details = Detail.findOne({"_id":"6653ba770b12a87a0bbe77fd"})
    console.log(details)

    // response.render("index",{
    //     details:details
    // })
})  


routes.get('/gallary',(request,response)=>{
    response.render("gallary")
})  


module.exports=routes