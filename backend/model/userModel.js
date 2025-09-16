import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    userType:{
        type:String,
        enum:["admin","teacher","student"],
        required:true,
        default:"student"
    }
   
},{timestamps:true}
);

const User = mongoose.model("User",userSchema);
export default User;