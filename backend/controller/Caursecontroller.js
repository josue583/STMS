import express from "express"

import Course from "../model/courseModel.js"

export const createCourse=async(req,res)=>{
    const newCourse=new Course(req.body);
    const {Ccode}=newCourse;
    const courseExist=await Course.findOne({Ccode});
    if(courseExist){
        return res.status(400).json({message:"course arleady Exist"});
    }
    const savedCourse=await newCourse.save();
    res.status(200).json(savedCourse);
}
export const getCourses=async(req,res)=>{
    try {
        const courses=await Course.find().populate("teacher","teacherName");
    if(courses){
        return res.status(200).json(courses)
    }
    else{
        res.status(400).json({message:"no course available"})
    }

        
    } catch (error) {
        res.status(500).json({errorMessage:error.message});
        
    }
    

}

export const getCoursebyId=async(req,res)=>{
    try {
         const courseId=req.params.id;
    const course=await Course.findById(courseId).populate("teacher","teacherName -_id");
    if(course){
        res.status(200).json(course)
    }
        
    } catch (error) {
        res.status(599).json({errorMessage:error.message});
        
    }
   
}
export const updateCourse=async(req,res)=>{
    const courseId=req.params.id;
    const courseExist=await Course.findById(courseId);
    if(!courseExist){
    res.status(400).json({message:"the course does not exit"})
    }
    else{
       const updatedData= await Course.findByIdAndUpdate(courseId,req.body,{
            new:true
        }).populate("teacher","teacherName -_id")
        res.status(200).json(updatedData)
    }
}