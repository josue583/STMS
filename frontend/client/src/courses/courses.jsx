import React, { useEffect, useState } from 'react'
import Menu from '../components/menu'
import Sidebar from '../components/sidebar'
import axios from 'axios'
import { Link } from 'react-router-dom'
function courses() {

   

    const [courses,setCourse]=useState([])
    try {
         useEffect(()=>{
        const fetchdata=async()=>{
          const retreivedCourse=  await axios.get("http://localhost:8000/api/course/courses")
          setCourse(retreivedCourse.data);


        };
        fetchdata()
    },[])
        
    } catch (error) {
        console.log("there is error", error)
        
    }

   
  return (
    <div className='w-full'>
      <Menu/>
      <div className='flex'>
        <Sidebar/>

        <div className='flex flex-col gap-12 items-center justify-center ml-16'>

       <div className='p-16 flex flex-col gap-10 '>
        <button className='w-32 h-12 bg-blue-800 text-white rounded-xl'><Link to="/addCourse">New Course</Link></button>
        <div className='flex gap-10 items-center '>
            {courses.map((course,index)=>{
              if(index>3) return null
                return(
                      <div className={`w-52 h-36 flex flex-col p-4 gap-2  ${index%2==0? 'bg-green-500':'bg-yellow-500'}`}>
                <div className='w-8 h-8 bg-white rounded-full text-center pt-1 text-red-700 text-lg font-bold'>0{index+1}</div>
                <h1><span>course Code: </span>{course.Ccode}</h1>
                <p><span>Course Name:</span> {course.CName}</p>
            </div>

                );
              
           
       

            })}
             </div>
            
       </div>
        
            <div className='w-full p-16'>
                 <table className='w-full border border-black gap-10'>
                 <thead>
                            <tr className='border border-black bg-blue-800 text-white'>
                                <th>No</th>
                                <th>Course Code</th>
                                <th>Course Name</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                {courses.map((course,index)=>{
                  // if(index>=3) return null
                return(
                    
                       
                        <tr className='border border-black'>
                            <td className='border border-black'>{index+1}</td>
                            <td className='border border-black'>{course.Ccode}</td>
                            <td className='border border-black'>{course.CName}</td>
                            <td className='border border-black'>{course.description}</td>
                            <td>update/ delete</td>
                        </tr>
                    
                    
               
           

                );
              
           
       

            })}
             </table>
            </div>
             </div>
      </div>
    </div>
  )
}

export default courses
