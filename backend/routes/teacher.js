import express from "express";
import { teacherCreate,getTeachers, getTeacherById, updateTeacherById,deleteById } from "../Controller/teacherControl.js";
import { veriftToken } from "../middlewares/authenticate.js";
import { autholizeUser } from "../middlewares/authorize.js";
 const route=express.Router();


route.post("/createTeacher",teacherCreate)
route.get("/teachers", getTeachers)
route.get("/teachers/:id",getTeacherById)
route.put("/teachers/:id",updateTeacherById)
route.delete("/teachers/:id",deleteById)
route.get("/test",veriftToken,autholizeUser(['teacher','admin']),(req,res)=>{
     res.status(200).json({message:"welcome Teacher! this page can be accecced by logged teacher"})
})



export default route
