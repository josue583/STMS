import React, { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar'
import Menu from '../components/menu'
import { Link } from 'react-router-dom'
import axios from 'axios'
function teachers() {

  // const teacher={
  //   teacherName:"",
  //   email:"",
  //   degree:"",

    
  // }
  const [teachers,setTeachers]=useState([])
  useEffect(()=>{
    const fetchdata=(async()=>{
    const response=await  axios.get("http://localhost:8000/api/teacher/teachers")
       console.log(response.data);
       setTeachers(response.data)
    })
    
    fetchdata();
  },[])
  return (
    <div className='flex flex-col'>
    <Menu/>
    <div className='flex'>
          <Sidebar/>
          <div className='w-full p-16 flex flex-col gap-32 '>
            <button className='w-32 h-12 text-white font-bold bg-blue-800 rounded-2xl'><Link to="/newTeacher">Add teacher</Link></button>
              <table className='w-full border border-black'>
       
        <thead>
           <tr className='border border-black'>
            <th className='border border-black'>NO</th>
            <th className='border border-black'>Teacher Name</th>
            <th className='border border-black'>teacher Email</th>
            <th className='border border-black'>Qualification</th>
           </tr>
           {teachers.map((teacher,index)=>{
            return (
              <tr className='border border-black' key={teacher.key}>
            <td className='border border-black'>{index+1}</td>
            <td className='border border-black'>{teacher.teacherName}</td>
            <td className='border border-black'>{teacher.email}</td>
            <td className='border border-black'>{teacher.degree}</td>
           </tr>

            )
           })}
           
        </thead>
      </table>
          </div>
      
    </div>

    </div>
  )
}

export default teachers
