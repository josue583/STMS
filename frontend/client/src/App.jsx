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
import Contact_us from './menuSide/contact_us'
import About from './menuSide/about'
function App() {
  const [count, setCount] = useState(0)
  

  return (
<div className=''>
  {/* w-full min-h-screen flex bg-blue-800 justify-center */}
  <Router>
    <Routes>
     <Route path='/' element={<Login/>}/>
   <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/user' element={<Users/>}/>
      <Route path='/adduser' element={<Createuser/>}/>
      <Route path='/update/:id' element={<Update/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/addCourse' element={<NewCourse/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/teachers' element={<Teachers/>}/>
      <Route path='/newTeacher' element={<Newteacher/>}/>
      <Route path='/contact_us' element={<Contact_us/>}   />
      <Route path='/about' element={<About/>}/>
   
   </Routes>
  </Router>
  

</div>
  )
}

export default App
