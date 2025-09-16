import express from "express";
import mongoose from "mongoose";





const teacherSchema=new mongoose.Schema({
    teacherId:{
        type:String,
        required:true,
        unique:true
    },
    teacherName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    degree:{
        type:String,
        enum:["BCS","MSC","PHD"],
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    userId:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"User"
    }

})

export default mongoose.model("Teacher",teacherSchema);