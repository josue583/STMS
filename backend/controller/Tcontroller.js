import express from "express";
import Teacher from "../model/teacherModel.js";


export const teacherCreate=async(req,res)=>{

    const newTeacher=new Teacher(req.body)
    const {email}=newTeacher
    const teacherExist=await Teacher.findOne({email});
    if(teacherExist){
      return  res.status(400).json({message:"teacher Exist"});
    }
    const savedTeacher=await newTeacher.save();
    res.status(200).json(savedTeacher)

}
export const getTeachers=async(req,res)=>{
    try {
          const allteacher=await Teacher.find()
  if(allteacher){
    res.status(200).json(allteacher)
  }
        
    } catch (error) {
        res.status(500).json({errorMessage:error.message});
        
    }
  
}
export const getTeacherById=async(req,res)=>{
    try {
         const teacherId=req.params.id;
    const teacher=await Teacher.findById(teacherId);
    if(teacher){
        res.status(200).json(teacher)
    }
    return res.status(500).json({message:"id not found"});
        
    } catch (error) {
        res.status(500).json({errorMessage:error.message})
        
    }
   
                       
}
export const updateTeacherById=async(req,res)=>{
    try {
        const teacherId=req.params.id;
    const teacherExist=await Teacher.findById(teacherId)
    if(teacherExist){
        const updatedteacher=await Teacher.findByIdAndUpdate(teacherId,req.body,{
            new:true
           
        })
         res.status(200).json(updatedteacher)
       

    }
     res.status(400).json({message:"teacher doesn't exist"})
    
        
    } catch (error) {
        res.status(500).json({errorMessage:error.message})
        
    }
    
}

export const deleteById=async(req,res)=>{
    const teacherId=req.params.id;
    const teacherExit=await Teacher.findById(teacherId);
    if(!teacherExit){
        return res.status(400).json({message:"no user for such id"});
    }
    await Teacher.findByIdAndDelete(teacherId);
    res.status(200).json({message:"Data deleted successfully"});
}

