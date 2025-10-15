
import mongoose, { model, Schema } from "mongoose";
// import express from 'express'


const contactSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true

        },
        comment:{
            type:String,
            required:true
        },
        createdAt:{
            type:Date,
            default:Date.now
        }
    }
)

export default mongoose.model("contact",contactSchema);