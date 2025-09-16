import mongoose from "mongoose";




const sectionSchema=new mongoose.Schema({
    sectionCode:{
        type:String,
        required:true
    },
    sectionName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    },
   
      subjects:[{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Course"
            }]
        
    

})


export default mongoose.model("Section", sectionSchema);