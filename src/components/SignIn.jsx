import React , {useState} from 'react'
import LinkedinLogo from '../assets/Linkedin-logo.png'
import {Link , useNavigate} from 'react-router-dom'
import {account} from '../Appwrite/appwrite'

const SignIn = () => {
  const navigate = useNavigate()
  const [user , setUser] = useState({
   email:"",
   password:""
  })

  const loginUser = async(e)=>{
    e.preventDefault()

    try{
      await account.createEmailSession(user.email , user.password)
      navigate('/LinkedIn/home')
    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <div className='w-full'>
      {/* Header */}
      <div className='py-5 px-2'>
        <img className='w-[8rem]' src={LinkedinLogo} alt="" />
      </div>
      {/* Card */}
      <div className='lg:w-[35%] md:w-[60%] w-[92%] mx-auto mt-10 p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white rounded-md'>
        {/* card-header */}
        <div>
        <h1 className='text-[2.2rem] font-bold'>Sign in</h1>
        <p className='text-[0.9rem]'>Stay updated on your professional world</p>
        </div>

        {/* card-content */}
        <div className='py-4'>
          <div className='flex flex-col gap-3'>
          <input 
          onChange={(e)=>{
            setUser({
              ...user,
              email:e.target.value
            })
          }} className='p-3 text-[1.1rem] border-2 outline-none hover:border-blue-600 rounded-md' type="text" placeholder='Email or Phone' />
          <input
          onChange={(e)=>{
            setUser({
              ...user,
              password:e.target.value
            })
          }} className='p-3 text-[1.1rem] border-2 outline-none hover:border-blue-600 rounded-md'type="password" placeholder='Password' />
          </div>
          <div className='mt-2  cursor-pointer text-blue-500 w-[38%] p-2 rounded-[2rem]   font-bold hover:underline hover:bg-blue-300/80'>
          <p className='text-center text-[0.8rem]'>Forgot Password?</p>
          </div>
          <div onClick={loginUser} className='bg-blue-600 hover:bg-blue-800 text-white w-[90%] rounded-[2.1rem] text-center mt-2 py-3 text-[1.1rem] mx-auto cursor-pointer'>
          <button  className='font-bold ' >Sign in</button>
          </div>
        </div>
      </div>
      <div className='text-center mt-8'>
          <p>New to Linkedin? <Link to ='/LinkedIn/signup' className='mt-2  cursor-pointer text-blue-500 w-[38%] p-2 rounded-[2rem]   font-bold hover:underline hover:bg-blue-300/80'>Join Now</Link></p>
      </div>
    </div>
  )
}

export default SignIn
