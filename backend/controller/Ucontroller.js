import express from "express";
import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// const route=express.Router();

export const signup=async(req,res)=>{
    try {
        const {userName,email,password,confirmPassword,userType}=req.body;
        const userExist=await User.findOne({userName});
        if(userExist){
            return res.status(400).json({message:"user already exist"});
        }
        if(password!==confirmPassword){
            return res.status(400).json({message:"password not match"});
        }
        const hashedpassword=await bcrypt.hash(password,10);
       await User.create({
            userName,
            email,
            password:hashedpassword,
            userType
        })
        res.status(200).json({message:"user created successfully"});
        
    } catch (error) {
        res.status(500).json({errorMessage:error.message});
        
    }
}

export const login=async(req,res)=>{
    try {
        const {userName,password}=req.body;
        const userExist=await User.findOne({userName});
        if(!userExist){
            return res.status(400).json({message:"user does not exist"});
        }
        const isMatch=await bcrypt.compare(password,userExist.password);
        if(!isMatch){
            return res.status(400).json({message:"invalid credentials"});
        }
        const token=jwt.sign({id:userExist._id,userType:userExist.userType},"secretkey",{expiresIn:"1h"});
      res.status(200).json({message:"Login successful",token:token});
        
    } catch (error) {
        res.status(500).json({errorMessage:error.message});
        
    }
}

export const getUsers=async(req,res)=>{
    // const id=req.params;
    const users=await User.find().select("-password");
    if(!users){
        return res.status(400).json({message:"no user found"});
    }
    res.status(200).json(users);

}
export const getUserbyId=async(req,res)=>{
    const {id}=req.params;
    const user=await User.findById(id).select("-password")
    if(req.user.id==id || req.user.userType=='admin'){
         res.status(200).json(user);
       
    }
    else{
         res.status(400).json({message:"not allowed"})
    }

    if(!user){
        res.status(400).json({message:"no user found"});
    }
   
    
}