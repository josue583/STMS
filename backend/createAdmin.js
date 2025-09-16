import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import User from "./model/userModel.js";
import { configDotenv } from "dotenv";

configDotenv();

const MONGOURL=process.env.MONGOURL

if(!MONGOURL){
        console.error("mongo_url is no defined in .env");
        exist(1);
}
mongoose
       .connect(MONGOURL)
       .then(()=>{
                console.log("database connected successfully");
        })

  const createFirstadmin=async()=>{
        
                // const {userName,role,password}=req.body;
                const userExist=await User.findOne({userType:"admin"})
                if(userExist){
                      console.log("admin exist");
                }
                const hashedPassword=await bcrypt.hash("admin",10);
                const createAdmin=await User.create({
                        userName:"admin",
                        email:"admin@gmail.com",
                        password:hashedPassword,
                        userType:"admin",
                })
                console.log("first admin created successfully");
                
       
                
        }
  
  createFirstadmin();