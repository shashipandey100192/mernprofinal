'Access-Control-Allow-Origin'
const express = require('express');
const myapp = express.Router();

const mymodel = require('../models/querymodel');

myapp.get("/",(req,res)=>{
    res.send("this is welcome file");
});

myapp.get("/home",(req,res)=>{
    res.send("this is home page");
});

myapp.get("/about",async(req,res)=>{
    const abc = await mymodel.find();
    res.send({data:abc,status:255,message:"successfully all data get"});
    console.log(abc);
});

myapp.post("/addemp",async(req,res)=>{
        const {email,fullname,phone,gender,role,pass} = req.body;
        const adduser = new mymodel({
            email,fullname,phone,gender,role,pass
        });
        await adduser.save();
        res.status(200).json(adduser);
        console.log(adduser);
});


myapp.delete("/singedataremove/:id", async(req,res)=>{
            const id= req.params.id;
            console.log(id);
            const singledata = await mymodel.findByIdAndDelete({_id:id});
            res.status(200).json(singledata);
})




module.exports = myapp