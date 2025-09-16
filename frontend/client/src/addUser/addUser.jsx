import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import Menu from '../components/menu'
import Sidebar from '../components/sidebar'
function addUser() {
    const users={
        studId:"",
        name:"",
        phone:"",
        age:""
    }
    const [user,setUser]=useState(users)
    const navigate=useNavigate();
    
    const inputHandler=(e)=>{
         const {name,value}=e.target
         setUser({...user,[name]:value});
         console.log(name,value)

    }
    const submitForm=async(e)=>{
        e.preventDefault();
     
        await axios
                   .post("http://localhost:8000/api/student/add",user,{ headers: {
                'Content-Type': 'application/json'
            }

                   })
                   .then((response)=>{
                    toast.success(response.data.message,{position:"top-right"})
                    localStorage.setItem("Token",response.data.token)
                    navigate("/");

                   })
                   .catch((error)=>{
                    console.log("data not saved",error)

                   })
    }
  return (
   
        <div className='w-full flex flex-col bg-green-500'>
             <Menu/>
              <div className='flex gap-96'>
            <Sidebar/>
             <div className='w-72 h-96 bg-slate-300 mt-12 flex flex-col items-center gap-4 p-4'>
             <form className='flex flex-col gap-2 ' onSubmit={submitForm}>
         <button className='w-20 h-8 bg-gray-800 text-white text-xl rounded-sm'><Link to="/"><i class="fa-solid fa-backward"></i>Back</Link></button>
      <h1 className='text-center text-blue-800 text-2xl font-bold uppercase'>Add New Student</h1>
        <div className='flex flex-col'>
            <label htmlFor="studentId">student Id:</label>
            <input type="text" className='border border-black rounded-sm' name='studId' placeholder='enter student Id' onChange={inputHandler} />
        </div>
         <div className='flex flex-col'>
            <label htmlFor="studentName">Full Name</label>
            <input type="text" className='border border-black rounded-sm' name='name' placeholder='enter your full Name'onChange={inputHandler} />
        </div>
         <div className='flex flex-col'>
            <label htmlFor="phone">Phone No</label>
            <input type="text" className='border border-black rounded-sm' name='phone' placeholder='your phone number'onChange={inputHandler} />
        </div>
         <div className='flex flex-col'>
            <label htmlFor="age">Age</label>
            <input type="text" className='border border-black rounded-sm' name='age' placeholder='enter your age'onChange={inputHandler} />
        </div>
        <div className='flex flex-col'>
            <button className='h-8 bg-blue-800 text-white text-xl rounded-sm'>Save</button>
        </div>
      </form>
    </div>
            
        </div>
        </div>
         
        
     
  )
}

export default addUser
