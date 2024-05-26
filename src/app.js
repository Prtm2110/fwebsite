const express = require("express")
const app =express()
const mongoose = require("mongoose")



app.use('/static',express.static('public'))
const routes = require('./routes/main')
app.use('',routes)

//db connection
mongoose
.connect('mongodb://localhost/website-db')
.then(()=>console.log("mongoDB- connected......."))


// template engine
app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")



app.listen(5045,()=>{
    console.log("localhost:5045")
})