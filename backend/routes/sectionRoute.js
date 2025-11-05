import express from "express";
import { createSection,getSections,getSectionById, updateSection, deleteSection } from "../controller/Sectcontroller.js";


const route=express.Router()


route.post("/createSection",createSection);
route.get("/sections",getSections);
route.get("/sections/:id",getSectionById)
route.put("/sections/:id",updateSection)
route.delete("/sections/:id",deleteSection)
export default route