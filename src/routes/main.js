const express = require("express");
const { route } = require('express/lib/application');
const routes=express.Router();
// const Detail = require("../models/detail");
const contact = require("../models/contact");

routes.get('/', (request,response)=>{
    response.render("index")
    // const details = Detail.findOne({"_id":"6653ba770b12a87a0bbe77fd"})
    // console.log(details)

    // try {
    //     res.render('index', { details: details });
    // } catch (err) {
    //     console.error("Error rendering view:", err);
    //     res.status(500).send("An error occurred while rendering the view.");
    // }

})  




routes.get('/gallary',async(request,response)=>{
    response.render("gallary")
})  

routes.post("/process-contact-form",async (req,res)=>{
    console.log("form is  subimmted")
    console.log(req.body)
    try{
        const data=await contact.create(req.body)
        console.log(data)
        res.redirect("/")
    }
    catch(e){
        console.log(e);
        res.redirect("/")
    }
})





module.exports=routes   