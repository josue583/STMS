import express from "express";
import Section from "../model/SectionModel.js";

export const createSection=async(req,res)=>{
    try {
         const newSection=new Section(req.body);
    const {sectionName}=newSection;
    const sectionExist=await Section.findOne({sectionName})
    if(sectionExist){
        return res.status(400).json({message:"combination or section is arleady exist"})
    }
    const savedData=await newSection.save();
    res.status(200).json(savedData);
        
    } catch (error) {
        res.status(500).json({errorMessage:error.message})
        
    }
   

}
export const getSections=async(req,res)=>{
    try {
         const sections=await Section.find();
    if(!sections){
        return res.status(400).json({message:"no combination found"});

    }
    res.status(200).json(sections);
        
    } catch (error) {
        res.status(500).json({errorMessage:error.message});
        
    }
   
}

export const getSectionById=async(req,res)=>{
    try {
        const sectionId=req.params.id;

    const sectionExist=await Section.findById(sectionId);
    if(sectionExist){
        res.status(200).json(sectionExist);
    }

        
    } catch (error) {
        res.status(500).json({errorMessage:error.message});
        
    }
    
}
export const updateSection=async(req,res)=>{
    try {
        const sectionId=req.params.id;
    const sectionExist=await Section.findById(sectionId);
    if(sectionExist){
       const updatedData= await Section.findByIdAndUpdate(sectionId,req.body,{
            new:true
        })
        res.status(200).json(updatedData);

    }
    } catch (error) {
        res.status(500).json({errorMessage:error.message});
        
    }
    
}
export const deleteSection=async(req,res)=>{
    try {
        const sectionId=req.params.id;
        const sectionExist=await Section.findById(sectionId);
        if(!sectionExist){
            res.status(400).json({message:"no section with such id"});
        }
        await Section.findByIdAndDelete(sectionId);
        res.status(200).json({message:"section delete successfully"});
        
    } catch (error) {
        res.status(500).json({errorMessage:error.message});
        
    }
}
