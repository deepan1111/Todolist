const router = require("express").Router();
const Todo = require("../models/todo");

router.post("/add/todo",(req,res)=>{
    const {todo} = req.body;
    const newtodo = new Todo({todo});

    newtodo.save().then(()=>{
        console.log("Success");
        res.redirect("/")
    }) 
    .catch((err)=>{
        console.log(err);
    })
})

.get("/delete/todo/:_id",(req,res)=>{
    const {_id} = req.params;
    Todo.deleteOne({_id})

    .then(()=>{
        console.log("Succesfully deleted !!");
        res.redirect("/")
    })
    .catch((err)=>{
        console.log(err);
    })

    
})

module.exports = router;