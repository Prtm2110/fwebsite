const express = require("express")
const app =express()
const mongoose = require("mongoose")
const Detail=require("./models/details")
var hbs = require('hbs');
const bodyParser=require("body-parser")


// app.use(express.json());

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/static',express.static('public'))
const routes = require('./routes/main')
app.use('',routes)




//db connection
mongoose
.connect('mongodb://localhost/website-db')
.then(()=>{
    console.log("mongoDB- connected.......")
    // Detail.create({
    //     brandName:"AW",
    //     brandIconUrl:"",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"Home",
    //             url:"/services"
    //         }
    //     ]
    // })
})


// template engine
app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")



app.listen(5045,()=>{
    console.log("localhost:5045")
})