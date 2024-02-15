const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser")
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}))


app.use("/public",express.static('public'))


mongoose.connect("mongodb://127.0.0.1:27017/todolistDB")
app.use(express.static("public"));



app.use(require("./routes/root"))
app.use(require("./routes/todoroot"))


app.listen(3000,()=>{
    console.log("Started !!!");
})