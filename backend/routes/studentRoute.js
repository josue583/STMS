import express from "express";
import {create, deleteStudent, getstudentByID, ListStudents, updatById } from "../controller/studentControl.js";
import { veriftToken } from "../middlewares/authenticate.js";
import { autholizeUser } from "../middlewares/authorize.js";

const route=express.Router()

route.post("/add",create,veriftToken,autholizeUser(['admin']));
route.get("/students",veriftToken,ListStudents);
route.get("/student/:id",veriftToken,getstudentByID)
route.put("/student/:id",veriftToken,autholizeUser(['admin']),updatById)
route.delete("/student/:id",veriftToken,autholizeUser(['dadmin']),deleteStudent)


export default route;