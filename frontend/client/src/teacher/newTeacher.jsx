import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import Menu from '../components/menu'
import Sidebar from '../components/sidebar'

function addUser() {
   const teacher={
    teaherId:"",
    teacherName:"",
    email:"",
    degree:"",
    phone:""

   }
    const [teachers,setTeachers]=useState(teacher)
    // const [teachers,setTeachers]=useState([])
     
    
    const inputHandler=(e)=>{
         const {name,value}=e.target
         setTeachers({...teachers,[name]:value});
         console.log(teacher)

    }
    const submitForm=async(e)=>{
        e.preventDefault();
        await axios
                   .post("http://localhost:8000/api/teacher/createTeacher",teachers)
                   .then((response)=>{
                    toast.success(response.data.message,{position:"top-right"})
                    navigate("/teacher");

                   })
                   .catch((error)=>{
                    console.log("data not saved",error)

                   })
    }
    
  return (
   
        <div className='w-full flex flex-col'>
             <Menu/>
              <div className='flex gap-96'>
            <Sidebar/>
             <div className='w-72 h-[500px] bg-slate-300 mt-12 flex flex-col items-center justify-center gap-4 p-6'>
             <form className='flex flex-col gap-2 ' onSubmit={submitForm}>
         <button className='w-20 h-8 bg-gray-800 text-white text-xl rounded-sm'><Link to="/"><i class="fa-solid fa-backward"></i>Back</Link></button>
      <h1 className='text-center text-blue-800 text-2xl font-bold uppercase'>Add New course</h1>
        <div className='flex flex-col'>
            <label htmlFor="studentId">teacher ID:</label>
            <input type="text" className='border border-black rounded-sm' name='teacherId' placeholder='teacher ID' onChange={inputHandler} />
        </div>
         <div className='flex flex-col'>
            <label htmlFor="studentName">Teacher Name</label>
            <input type="text" className='border border-black rounded-sm' name='teacherName' placeholder='teacher Name'onChange={inputHandler} />
        </div>
         <div className='flex flex-col'>
            <label htmlFor="phone">email</label>
            <input type="text" className='border border-black rounded-sm' name='email' placeholder='email'onChange={inputHandler} />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="phone">phone</label>
            <input type="text" className='border border-black rounded-sm' name='phone' placeholder='phone'onChange={inputHandler} />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="phone">Degree</label>
            <input type="text" className='border border-black rounded-sm' name='degree' placeholder='degree'onChange={inputHandler} />
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
