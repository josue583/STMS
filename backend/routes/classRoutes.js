import express from "express";
import { createClass,getClasses,getClassById,deleteById,updateClass } from "../controller/Classcontroller.js";



const route=express.Router();

route.post("/addClass",createClass);
route.get("/classes",getClasses);
route.get("/classes/:id",getClassById)
route.delete("/classes/:id",deleteById)
route.put("/classes/:id",updateClass)


export default route;