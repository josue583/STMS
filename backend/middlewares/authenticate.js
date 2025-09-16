import jwt from "jsonwebtoken"




export const veriftToken=async(req,res,next)=>{
    try {
        const authHeader=req.headers["authorization"];
        if(!authHeader){
            return res.status(400).json({message:"No token provided"});
        }

        const token=authHeader.split(" ")[1];
        jwt.verify(token,"secretkey",(err,decoded)=>{
            if(err){
                return res.status(400).json({message:"invalid token"})
            }
            req.user=decoded
            next();
        })
        
    } catch (error) {
        res.status.json({errorMessage:error.message});
        
    }
}