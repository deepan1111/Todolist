const router = require("express").Router();
const Todo = require("../models/todo")

router.get("/",async (req,res)=>{
    const alltodo = await Todo.find();
    res.render("index.ejs",{todo:alltodo})
})

module.exports = router;