const { required } = require('joi');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
},{timeStamps:true});

const model = mongoose.model("users", userSchema);
module.exports = model;