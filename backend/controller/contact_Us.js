// import express from 'express'
import Contact_us from "../model/contact_us.js";


export const Create_contact=async(req,res)=>{
    const newContact=new Contact_us(req.body)
    // const {email}=newContact;

    const savedContact=await newContact.save();

    console.log(newContact)

}
export const comments=async(req,res)=>{
    const COMMENTS=await Contact_us.find();
    //  console.log(COMMENTS)
    if(COMMENTS!=0){
      return  res.status(200).json(COMMENTS);
     
    }
}