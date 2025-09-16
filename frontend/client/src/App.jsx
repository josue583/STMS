import { useState } from 'react'
import Users from './getUser/getUser'
import './App.css'
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom'
import Login from './login/login'
import Dashboard from "./dashboard"
import Createuser from './addUser/addUser'
import Update from './updateStudent/updateStudent'
import Courses from './courses/courses'
import NewCourse from './courses/newCourse'
import SignUp from './signUp/signup'
import Teachers from './teacher/teachers'
import Newteacher from './teacher/newTeacher'
function App() {
  const [count, setCount] = useState(0)
  

  return (
<div className=''>
  {/* w-full min-h-screen flex bg-blue-800 justify-center */}
  <Router>
    <Routes>
     <Route path='/login' element={<Login/>}/>
   <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/' element={<Users/>}/>
      <Route path='/adduser' element={<Createuser/>}/>
      <Route path='/update/:id' element={<Update/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/addCourse' element={<NewCourse/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/teachers' element={<Teachers/>}/>
      <Route path='/newTeacher' element={<Newteacher/>}/>
    
   
   </Routes>
  </Router>
  

</div>
  )
}

export default App
