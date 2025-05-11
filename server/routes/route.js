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

myapp.get("/allemp",async(req,res)=>{
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
});


myapp.post("/userlogin", async(req,res)=>{
    const {email,pass} = req.body;
    const mydata = await mymodel.findOne({email:email});
    // console.log(mydata);
    if(!mydata)
    {
        res.status(219).json({data:mydata,msg:"data not found",status:420});
    }
    else{
       
        if(mydata.email===email && mydata.pass===pass)
        {
            res.status(251).json({data:mydata,msg:"welcome to login",status:251});
        }
        else
        {
            res.status(250).json({msg:"email and password don't match ",status:430});
        }
    }

})


myapp.get("/singleemp/:id", async(req,res)=>{
            const id= req.params.id;
            const singledata = await mymodel.findById({_id:id});
            res.status(200).json(singledata);
});




module.exports = myapp