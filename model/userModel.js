const express=require('express');
const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    userId:Number,
    userName:String,
    name:String,
    password:String,
    email:String,
    gender:String,
    address:String
});

const userModel=mongoose.model("user",userSchema);

module.exports=userModel;
