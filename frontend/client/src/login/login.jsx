import React from 'react'
import axios, { Axios } from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Login() {

        const [user,setUser]=useState({userName:"",password:""});
        const navigate=useNavigate()
    const inputhandle=(e)=>{
        const {name,value}=e.target
        setUser({...user,[name]:value})
          
        //   if(name==="name"){
        //     setUser()
        //     console.log(user)
        //   }
        //   else{
        //     setUser(value)
        //     console.log(user);
        //   }
     

    }
    const formSubmit=async(e)=>{
        try {
            e.preventDefault();
            const data= {
                userName:user.userName,
            password:user.password
            }
            console.log(data);
            
        const res=await axios.post("http://localhost:8000/api/user/login",
            data
        ,{headers: { "Content-Type": "application/json" }})
        console.log(res.data)
        console.log("Token",res.data.token )
         const token=localStorage.setItem("token",res.data.token)
            navigate("/dashboard")
         
        } catch (error) {
            console.error(error)
        }
        

    }
   
  return (
    
    <div className='w-2/5 h-[400px] bg-blue-800 flex justify-center items-center mt-32 p-2 border border-white rounded-2xl m-[500px] '>
        <div className='w-full h-full h-96 bg-gray-100 flex rounded-2xl  '>
                <div className=' w-1/2 flex justify-center items-center'>
         <img src="https://cdn-icons-png.flaticon.com/128/16893/16893981.png" alt="" />
        </div>
        <div className='w-1/2 bg-white m-8'>
        <form className='flex flex-col gap-6 items-center p-4' onSubmit={formSubmit}>
            <div>
                <h1 className='text-center text-blue-800 font-bold text-2xl'>WELCOME TO STMS</h1>
                {/* <h2 className='text-center text-blue-800 font-bold text-2xl'>STMS</h2> */}
            </div>
            <div className='w-48 flex gap-2 items-center border border-black'>
                <i class="fa-solid fa-envelope"></i>
            <input type="text" className='focus:outline-none text-black font-bold' placeholder='User name' name='userName' value={user.userName} onChange={inputhandle} autoComplete='userName' />
        </div>
        <div className='w-48 flex border border-black gap-2 items-center '>
            <i class="fa-solid fa-key"></i>
            <input type="password" className='focus:outline-none font-bold' placeholder='Password' name='password' value={user.password} onChange={inputhandle} autoComplete='password' />
        </div>
        <div className='flex justify- text-sm'>
            <button className='w-52 flex text-blue-800 justify-end'>Reset your password</button>
        </div>
        <div>
            <button type='submit' className='w-52 h-8 bg-blue-800 text-white'>LOGIN</button>
        </div>
        <div className='flex gap-2'>
            <h1>don't have account</h1>
            <button className='text-blue-800'>SignUp</button>
        </div>
    
        </form>
        
        </div>
        </div>
       

    </div>
  )
}

export default Login
