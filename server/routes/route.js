const express = require('express');
const myapp = express.Router();
// require('../models/querymodel')
const mymodel = require('../models/querymodel');

myapp.get("/",(req,res)=>{
    res.send("this is welcome file");
});

myapp.get("/home",(req,res)=>{
    res.send("this is home page");
});

myapp.get("/about",async(req,res)=>{
    const abc = await mymodel.find();
    // res.send(abc);
    res.send({data:abc,status:255,message:"successfully all data get"});
    console.log(abc);
})


module.exports = myapp