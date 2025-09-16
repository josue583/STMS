import mongoose from "mongoose";


const classschema=new mongoose.Schema({
    className:{
        type:String,
        required:true,
    },
    classCombination:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Section",
        required:true

    },
    year:{
        type:Number,
        required:true
    },
    term:{
        type:String,
        required:true
    }
})

classschema.index({className:1,classCombination:1,year:1,term:1},{unique:true})
export default mongoose.model("Class",classschema);