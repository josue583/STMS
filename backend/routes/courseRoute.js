import express from "express";
import { createCourse,getCoursebyId,getCourses, updateCourse } from "../controller/Caursecontroller.js";



const route=express.Router()

route.post("/addCourse",createCourse);
route.get("/courses",getCourses)
route.get("/courses/:id",getCoursebyId)
route.put("/courses/:id",updateCourse);

export default route
