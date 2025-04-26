const express = require('express');
const cors = require('cors');
const myapp = express();
require('dotenv').config();
const myrouteing =require('./routes/route'); 
require('./connections/connect');

const port = process.env.PORT || 9800


myapp.use(express.json());
myapp.use(cors());
myapp.use(myrouteing);



myapp.listen(port,()=>{
    console.log(`server is runnng: ${port}`);
})
