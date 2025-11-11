import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import Menu from '../components/menu'
import Sidebar from '../components/sidebar'

function addUser() {
    const courses={
      Ccode:"",
      CName:"",
      description:"",
      teacher:""
      
       
    }
    const [course,setCourse]=useState(courses)
    const [teachers,setTeachers]=useState([])
      useEffect(()=>{
        axios.get("https://stms-backend-x1kp.onrender.com/api/teacher/teachers")
             .then((res)=>{
              setTeachers(res.data)
              // console.log(res.data)
             })
             .catch((err)=>console.error("no teacher found",err))
      },[])
      console.log(teachers)
    const navigate=useNavigate();
    
    const inputHandler=(e)=>{
         const {name,value}=e.target
         setCourse({...course,[name]:value});
         console.log(name,value)

    }
    const submitForm=async(e)=>{
        e.preventDefault();
        await axios
                   .post("http://localhost:8000/api/course/addCourse",course)
                   .then((response)=>{
                    toast.success(response.data.message,{position:"top-right"})
                    navigate("/courses");

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
             <div className='w-72 h-92 bg-slate-300 mt-12 flex flex-col items-center justify-center gap-4 p-6'>
             <form className='flex flex-col gap-2 ' onSubmit={submitForm}>
         <button className='w-20 h-8 bg-gray-800 text-white text-xl rounded-sm'><Link to="/"><i class="fa-solid fa-backward"></i>Back</Link></button>
      <h1 className='text-center text-blue-800 text-2xl font-bold uppercase'>Add New course</h1>
        <div className='flex flex-col'>
            <label htmlFor="studentId">course code:</label>
            <input type="text" className='border border-black rounded-sm' name='Ccode' placeholder='course code' onChange={inputHandler} />
        </div>
         <div className='flex flex-col'>
            <label htmlFor="studentName">course Name</label>
            <input type="text" className='border border-black rounded-sm' name='CName' placeholder='course Name'onChange={inputHandler} />
        </div>
         <div className='flex flex-col'>
            <label htmlFor="phone">Description</label>
            <input type="text" className='border border-black rounded-sm' name='description' placeholder='description'onChange={inputHandler} />
        </div>
         <div className="flex flex-col">
              <label>Teacher</label>
              <select
                name="teacher"
                className="border border-black rounded-sm"
                onChange={inputHandler}
                value={course.teacher}
              >
                <option value="">-- Select Teacher --</option>
                {teachers.length > 0 && teachers.map((t) => (
      <option key={t._id} value={t._id}>
        {t.teacherName}
      </option>
                ))}
              </select>
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
