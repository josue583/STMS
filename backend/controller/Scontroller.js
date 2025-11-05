import Student from "../model/studentModel.js"




export const create=async(req,res )=>{
    try {
        const newStudent=await Student(req.body);
        const {name}=newStudent
        const studentExist=await Student.findOne({name})

        if(studentExist){
            return res.status(400).json({message:"the user arleady exist"});
        }
        const savedStudent=await newStudent.save();
        // res.status(200).json({message:"Data saved successfully!"})
        res.status(200).json(savedStudent);
        
    } catch (error) {
        res.status(500).json({errorMessage:error.message})
        
    }

    
}

export const ListStudents=async(req, res)=>{
    try {
         const students=await Student.find();
        if(req.user.userType==='teacher'|| req.user.userType==='admin'){
        
        return res.status(200).json(students);   
        
        }
        else{
            res.status(403).json({message:"access denied: only teacher or admin can view the students"})
        }
        // const students=await Student.find();
       
        
    } catch (error) {
        res.status(500).json({errorMessage:error.message})
        
    }
}

export const getstudentByID=async(req,res)=>{
    try {

        const id=req.params.id;
         const studentExist=await Student.findById(id);
          if(!studentExist){
            
            return res.status(400).json({message:"user not exist!"});
        }
        if(req.user.userType==="admin"|| req.user.userType==="teacher"){
                    
            res.status(200).json(studentExist)
       
        res.status(200).json(studentExist);
        }
        if(req.user.userType==="student" && req.user.id===studentExist.userId.toString()){
            res.status(200).json(studentExist)
        }
       

        
    } catch (error) {
        res.status(500).json({errorMessage:error.message});
        
    }
}
export const updatById=async(req,res)=>{
    try {
        const Id=req.params.id
        const studentId=await Student.findById(Id);
        if(!studentId){
           return res.status(400).json({message:"student is not exit"});

        }
        const updatedStudent=await Student.findByIdAndUpdate(studentId,req.body,{
            new:true
        })
        res.status(200).json(updatedStudent);
        
    } catch (error) {
        res.status(500).json({errorMessage:error.message});
        
    }
}

export const deleteStudent=async(req,res)=>{
    try {
        const id=req.params.id
        const studentExist=await Student.findOneAndDelete(id);
        res.status(200).json({message:"student deleted"});
        
    } catch (error) {
        res.status(500).json({errorMessage:error.message})
        
    }
}
