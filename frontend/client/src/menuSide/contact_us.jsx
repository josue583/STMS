import React, { useState } from 'react'
import Menu from '../components/menu'
import Sidebar from '../components/sidebar'
import axios from 'axios'
function contact_us() {

  const comment={
    name:"",
    email:"",
    comment:""

  }
  const [comments,setComments]=useState(comment)
  const inputhundle=(e)=>{
    const {name,value}=e.target
    setComments({...comments,[name]:value})
    console.log(comments)


  }
  const submitComment=(e)=>{
    e.preventDefault();
    
    try {
      axios.post("http://localhost:8000/api/contact_us/contact_us",comments)
            
                alert("comment sent successful");
                setComments({name:"",email:"",comment:""});
               
               
      
    } catch (error) {
      console.error(error)
      alert("comments not sent")
      
    }
    

               

 
    
  }
  return (
    <div>
        <Menu/>
        <div className='flex'>
            <Sidebar/>
            <div className='w-full flex flex-col items-center p-16 gap-10'>
                   <h1 className='text-2xl text-gray-600'>Leave Your Comment Here</h1>
                   <form action="" className='w-full min-h-[200px] flex flex-col gap-10 p-4' onSubmit={submitComment}>
                    <div className=' flex flex-col gap-2'>
                        <label htmlFor="" className=''>Name</label>
                      <input className='min-h-8 border rounded-md' name='name' value={comments.name} type="text" onChange={inputhundle} />
                    </div>
                     <div className='flex flex-col gap-4'>
                        <label htmlFor="" className=''>Email</label>
                      <input className='min-h-8 rounded-md border ' name='email' value={comments.email} type="text" onChange={inputhundle} />
                    </div>
                     <div className='flex flex-col gap-4'>
                        <label htmlFor="" className=''>Comment</label>
                      <textarea className='border border-black rounded-md h-[100px]' name="comment" value={comments.comment} onChange={inputhundle} id=""></textarea>
                      <button className='h-[50px] bg-blue-800 text-white font-bold rounded-xl'>COMMENT</button>
                    </div>
                    
                   </form>

            </div>
          
        </div>
     
    </div>
  )
}

export default contact_us
