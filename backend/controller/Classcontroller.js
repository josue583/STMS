import express from "express";
import Class from "../model/classModel.js";



export const createClass=async(req,res)=>{
    try {
        const newClass=new Class(req.body);
        const {className,classCombination}=newClass
        const classExist=await Class.findOne({className,classCombination});
        if(classExist){
            return res.status(400).json({message:"The class is arleady exist"});
        }
        else{
            const savedData=await newClass.save();
            res.status(200).json(savedData);
        }
        
    } catch (error) {
        res.status(500).json({errorMessage:error.message});
        
    }
}
export const getClasses=async(req,res)=>{
    try {
         const classes=await Class.find().populate("classCombination","sectionName -_id");
    if(classes){
        res.status(200).json(classes);
    }
    res.status(200).json({message:"no class exist!"});
        
    } catch (error) {
        res.status(500).json({errorMessage:error.message});
        
    }
   
}

export const getClassById=async(req,res)=>{
    try {
         const classId=req.params.id;
    const classExist=await Class.findById(classId).populate("classCombination","sectionName -_id");
    if(classExist){
        res.status(200).json(classExist);
    }
    return res.status(400).json({message:"the class does not exit"});
    } catch (error) {
        res.status(500).json({errorMessage:error.message})
        
    }
   
}
export const updateClass=async(req,res)=>{
    try {
        const classId=req.params.id
        const classExit=await Class.findById(classId);
       while(classExit){
       const updatedClass= await Class.findByIdAndUpdate(classId,req.body,{
            new:true
        }).populate("classCombination","sectionName -_id");
        res.status(200).json(updatedClass);

       }
       res.status(400).json({message:"no class with that id"});
        
    } catch (error) {
        res.status(500).json({errorMessage:error.message});
        
    }
}
export const deleteById=async(req,res)=>{
    try {
        const classId=req.params.id;
        const classExist=await Class.findById(classId);
        while(classExist){
            await Class.findByIdAndDelete(classId);
            res.status(200).json({message:"class removed successfully"});
        }
        res.status(400).json({message:"class does not exit"});
        
    } catch (error) {
        res.status(500).json({errorMessage:error.message});
        
    }
}

