import React from 'react'
import Menu from '../components/menu'
import Sidebar from '../components/sidebar'
function contact_us() {
  return (
    <div>
        <Menu/>
        <div className='flex'>
            <Sidebar/>
            <div className='w-full flex flex-col items-center p-16 gap-10'>
                   <h1 className='text-2xl text-gray-600'>Leave Your Comment Here</h1>
                   <form action="" className='w-full min-h-[200px] flex flex-col gap-10 p-4'>
                    <div className=' flex flex-col gap-2'>
                        <label htmlFor="" className=''>Name</label>
                      <input className='min-h-8 border rounded-md' type="text" />
                    </div>
                     <div className='flex flex-col gap-4'>
                        <label htmlFor="" className=''>Email</label>
                      <input className='min-h-8 rounded-md border ' type="text" />
                    </div>
                     <div className='flex flex-col gap-4'>
                        <label htmlFor="" className=''>Comment</label>
                      <textarea className='border border-black rounded-md h-[100px]' name="" id=""></textarea>
                    </div>
                    
                   </form>

            </div>
          
        </div>
     
    </div>
  )
}

export default contact_us
