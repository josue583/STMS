import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import Menu from '../components/menu'
import Sidebar from '../components/sidebar'
function SignUp() {
    const users={
      userName:"",
      email:"",
      password:"",
      confirmPassword:"",
       userType:"student"
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
     
        console.log(user)
        await axios
                   .post("http://localhost:8000/api/user/signup",user,{ headers: {
                'Content-Type': 'application/json'
            }
 
                   })
                   .then((response)=>{
                    toast.success(response.data.message,{position:"top-right"})
                   localStorage.setItem("token",response.data.token)
                  console.log(response.data.token)
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
             <div className='w-72 h-[500px] bg-slate-300 mt-12 flex flex-col items-center gap-4 p-4'>
             <form className='flex flex-col gap-2 ' onSubmit={submitForm}>
         <button className='w-20 h-8 bg-gray-800 text-white text-xl rounded-sm'><Link to="/"><i class="fa-solid fa-backward"></i>Back</Link></button>
      <h1 className='text-center text-blue-800 text-2xl font-bold uppercase'>signUp new user</h1>
        <div className='flex flex-col'>
            <label htmlFor="user name">user name:</label>
            <input type="text" className='border border-black rounded-sm' name='userName' placeholder='enter student Id' value={user.userName} onChange={inputHandler} />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="email">Email</label>
            <input type="email" className='border border-black rounded-sm' name='email' placeholder='@gmail.com' value={user.email} onChange={inputHandler} />
        </div>
        
         <div className='flex flex-col'>
            <label htmlFor="password">password</label>
            <input type="password" className='border border-black rounded-sm' name='password' placeholder='password' value={user.password} onChange={inputHandler} />
        </div>
         <div className='flex flex-col'>
            <label htmlFor="confirmPassword">confirm password</label>
            <input type="password" className='border border-black rounded-sm' name='confirmPassword' value={user.confirmPassword} placeholder='confirm password' onChange={inputHandler}  />
        </div>
         <div className='flex flex-col'>
            <label htmlFor="studentId">user Type:</label>
            <select name="userType" id="" className='border border-black rounded-sm' value={user.userType} onChange={inputHandler}>
               <option value="">---select user role---</option>
                <option value="admin">Admin</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
            </select>
        </div>
        <div className='flex flex-col'>
            <button type='submit' className='h-8 bg-blue-800 text-white text-xl rounded-sm'>Save</button>
        </div>
      </form>
    </div>
            
        </div>
        </div>
         
        
     
  )
}

export default SignUp