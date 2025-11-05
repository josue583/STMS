import express from "express";
import { signup, login,getUsers,getUserbyId } from "../controller/Ucontroller.js";
import { veriftToken } from "../middlewares/authenticate.js";
import { autholizeUser } from "../middlewares/authorize.js";

const route=express.Router();


route.post("/signup",signup);
route.post("/login",login)
route.get("/users",veriftToken,autholizeUser(['admin']),getUsers)
route.get("/users/:id",veriftToken,getUserbyId)

export default route;

