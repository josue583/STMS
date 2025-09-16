import express from "express";
import mongoose from "mongoose";



const courseSchema=new mongoose.Schema({
    Ccode:{
        type:String,
        required:true
    },
    CName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false

    },
    teacher:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Teacher",
        required:true,


    }
})


export default mongoose.model("Course", courseSchema);