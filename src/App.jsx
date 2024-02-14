import { useState } from 'react'
import './App.css'
import Login from './components/login'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/LinkedIn' element={<Login />} />
      <Route path='/LinkedIn/home' element={<Home />} />
      <Route path='/LinkedIn/signin' element={<SignIn />} />
      <Route path='/LinkedIn/signup' element={<SignUp />} />
    </Routes>  
    </>
  )
}

export default App
