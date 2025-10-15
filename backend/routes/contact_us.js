import express from "express";
// import  from "../controller/contact_Us.js";
import {Create_contact, comments } from "../controller/contact_Us.js";
const router=express.Router();

router.post('/contact_us',Create_contact)
router.get('/comments',comments)



export default router;
