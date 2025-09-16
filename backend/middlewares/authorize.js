



export const autholizeUser=(roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.userType)){
            return res.status(400).json({message:"access denied"})
        }
        next();
    }
}