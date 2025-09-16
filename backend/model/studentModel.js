import mongoose, { Schema } from "mongoose";
// import User from "./userModel";

const studentSchema=new mongoose.Schema({
    studId:{
        type:String,
        requied:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:false
    },
    age:{
        type:String,
        required:false
    },
    class:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Class",
        required:true
    },
    combination:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Section",
        required:true,
    },
    subject:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"courses"
    },
    marks:[
        {subject:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Courses"
        },
        score:{
            type:Number,
            default:0
        }

        }
    ]


})

export default mongoose.model("Students",studentSchema);