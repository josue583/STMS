import express from "express"
import bodyParser from "body-parser"
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import studentRoutes from "./routes/studentRoute.js";
import teacherRoutes from "./routes/teacher.js"
import courseRoutes from "./routes/courseRoute.js"
import sectionRoutes from "./routes/sectionRoute.js"
import classRoutes from "./routes/classRoutes.js"
import userRoutes from "./routes/userRoute.js"
import Contact_usRouter from "./routes/contact_us.js";
import cors from "cors"
// import contact_us from "./model/contact_us.js";

configDotenv();

const PORT=process.env.PORT ||7000
const MONGO_URL=process.env.MONGOURL

const app=express();
app.use(bodyParser.json());
app.use(cors({
     origin: ["https://stms-tawny.vercel.app"],  // replace with your actual Vercel URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))


mongoose
        .connect(MONGO_URL)
        .then(()=>{
            console.log("database connected successfuly")
            app.listen(PORT,()=>{
                console.log(`The server is running on port ${PORT}`)
            })
        })

        app.use("/api/student/",studentRoutes);
        app.use("/api/teacher/",teacherRoutes)
        app.use("/api/course/",courseRoutes)
        app.use("/api/section/", sectionRoutes)
        app.use("/api/class/",classRoutes)
        app.use("/api/user/",userRoutes)
        app.use("/api/contact_us",Contact_usRouter)
