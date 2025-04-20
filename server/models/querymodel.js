const mongoose = require('mongoose');


const mydatatype = new mongoose.Schema({
name:{},
age:{}

}) 

const datamodel = mongoose.model("userdata",mydatatype);

module.exports = datamodel


