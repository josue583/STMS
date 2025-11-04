import React from 'react'
import { Link } from 'react-router-dom'
function menu() {
  return (
    <div className='bg-blue-900 w-full h-20 flex justify-between items-center p-10'>
      <img className='w-12 h-12 rounded-full' src="https://imgs.search.brave.com/4nzb2ngCPGS3wqd9mL1go4yfOXcwihVdberzSKgbAj0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS12/ZWN0b3IvdW5pdmVy/c2l0eS1sb2dvLXZl/Y3RvcnMtMjYwbnct/MTI5ODA3MDYyOC5q/cGc" alt="" />
      <ul className='flex gap-12 text-white '>
        <dt><Link to="/">Home</Link></dt>
        <dt><Link to="/about">About</Link></dt>
        <dt> <Link to="/contact_us">contact us</Link></dt>
        <dt><a href="">Profile</a></dt>
      </ul>
    </div>
  )
}

export default menu
