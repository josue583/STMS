import React from 'react'
import Menu from '../components/menu'
// import Sidebar from '../components/sidebar'
function about() {
  return (
    <div>
        <Menu/>
        <div className='flex'>
            {/* <Sidebar/> */}
            <div className='w-full flex flex-col items-center p-16 gap-10'>
                   
                   <div className='w-2/4 border border-gray-600 text-xl text-left flex flex-col gap-6 p-12 items-center'>
                   <h1 className='text-2xl text-gray-600'>About Us</h1>
                      <p className='first-letter:text-4xl'>Our Student Management System is designed to simplify and improve the way schools manage student information, academic records, and administrative tasks. The system provides an easy-to-use platform for teachers, administrators, and students to access and manage data efficiently.</p>

<p>With features such as student registration, course management, attendance tracking, grading, and report generation, our system reduces paperwork, saves time, and enhances data accuracy.</p>

<p>Our goal is to provide an innovative, reliable, and secure solution that supports schools in managing their daily operations effectively while promoting transparency and better communication among staff, students, and parents.</p>
                   
                   </div>
                  
            </div>
          
        </div>
     
    </div>
  )
}

export default about
