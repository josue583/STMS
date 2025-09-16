import React from 'react'
import { Link } from 'react-router-dom'

function sidebar() {
  return (
    <div className='w-76 min-h-screen bg-gray-900 text-white p-8 flex flex-col gap-16'>
      <h1 className='text-white text-2xl'>Dashboard</h1>
      <ul className=''>
        <li><Link to="/courses"><i class="fa-solid fa-graduation-cap"></i>Course </Link></li>
        <li><Link to="/teachers">Teachers</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
      </ul>
    </div>
  )
}

export default sidebar
