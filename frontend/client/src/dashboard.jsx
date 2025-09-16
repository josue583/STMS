import { useState } from 'react'
import Users from './getUser/getUser'
// import './App.css'
import {Routes,  Route } from 'react-router-dom'
import Getuser from './getUser/getUser'
// import Createuser from './addUser/addUser'
// import Update from './updateStudent/updateStudent'
// import Courses from './courses/courses'
// import NewCourse from './courses/newCourse'
function Dashboard() {
  const [count, setCount] = useState(0)
  

  return (
<div className='flex bg-gray-100 min-h-screen'>
    {/* <Routes> */}
      {/* <Route path='/' element={<Users/>}/> */}
      {/* <Link to="/"></Link> */}
      {/* <Route path='/adduser' element={<Createuser/>}/>
      <Route path='/update/:id' element={<Update/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/addCourse' element={<NewCourse/>}/> */}
    {/* </Routes> */}

  <Getuser/>

</div>
  )
}

export default Dashboard
