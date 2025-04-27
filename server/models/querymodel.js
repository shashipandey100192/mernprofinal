const mongoose = require('mongoose');


const mydatatype = new mongoose.Schema({
email:{
    type:String
},
fullname:{
    type:String
},
phone:{
    type:String
},
gender:{
    type:String
},
role:{
    type:String
},
pass:{
    type:String
},
date_at:{
    type: Date, 
    required: true,
    default: Date.now
}

}) 

const datamodel = mongoose.model("userdata",mydatatype);

module.exports = datamodel


