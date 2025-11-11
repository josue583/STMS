import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Menu  from '../components/menu';
import Sidebar from '../components/sidebar';
function getUser() {

  const [users,setUsers]=useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
      
      try {
        const token= localStorage.getItem('token');
        console.log("Token",token)
      const fetchedData= await axios.get("https://stms-backend-x1kp.onrender.com/api/student/students",{ headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }})
            console.log("response data",fetchedData.data)
     setUsers(fetchedData.data);
    
    

        
      } catch (error) {
        console.log("fail to fetch data", error);
        
      }
      };
    fetchData();
    
  },[])

  return (
   
      <div className='w-full flex flex-col'>
        
          <Menu/>

          <div className='flex'>
            <Sidebar/>
                     <div className='w-full min-h-screen  bg-gray-100 p-12 flex flex-col gap-4 shadow-sm'>
        <button className='w-26 h-12 bg-blue-800 rounded-lg text-white text-md '><Link to="/adduser">Add User<i class="fa-solid fa-user-plus"></i></Link></button>
      <h1 className='text-blue-800 text-2xl font-bold text-center'>All Students</h1>
      <table className='w-full border border-black p-2'>
        <thead>
          <tr className='border border-black bg-blue-800 text-white'>
             <th>No</th>
            <th>student id</th>
            <th>Full name</th>
            <th>phone</th>
            <th>age</th>
            <th>Action</th>
          </tr>
            </thead>
          {users.map((user,index)=>{
            return (
              <tr className='border border-black'>
            <td className='border border-black'>{index+1}</td>
            <td className='border border-black'>{user.studId}</td>
            <td className='border border-black'>{user.name}</td>
            <td className='border border-black'>{user.phone}</td>
            <td className='border border-black'>{user.age}</td>
            <td className='border border-black text-center'>
              <Link to={`/update/`+user._id} className='w-8 h-8 bg-green-700'><i class="fa-solid fa-pen-to-square"></i></Link>
              <button className='w-8 h-8 bg-red-700 text-white'><i class="fa-solid fa-trash"></i></button>
            </td>
          </tr>

            )
          })}
          
      
      </table>
    </div>

          </div>
        

      </div>
      
  )
}

export default getUser
