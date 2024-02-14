import React , {useState , useEffect} from 'react'
import LinkedinLogo from '../assets/Linkedin-logo.png'
import {Link , useNavigate} from 'react-router-dom'
import {account} from '../Appwrite/appwrite'
import {v4 as uuidv4} from 'uuid'

const SignUp = () => {
  const navigate = useNavigate();
  const [user , setUser] = useState({
    name:"",
    email:"",
    password:"",
  })

  const signupUser = async(e) => {
    e.preventDefault()
    const promise = account.create(
      uuidv4(),
      user.email,
      user.password,
      user.name,
    )
  
    promise.then(
      function(response){
        console.log(response)
        navigate("/LinkedIn/home")
      },
      function(error){
        console.log(error)
      }
    )
} 


  return (
    <>
    <div className='w-full'>
      {/* Header */}
      <div className='py-5 px-2'>
        <img className='w-[8rem]' src={LinkedinLogo} alt="" />
      </div>
      <div>
        <h1 className='text-center text-[2rem]'>Make the most of your professional life</h1>
      </div>
      {/* Card */}
      <div className='mb-5 lg:w-[35%] md:w-[60%] w-[92%] mx-auto mt-10 p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white rounded-md'>
   {/* card-content */}
        <div className='py-4'>
          <div className='flex flex-col gap-3'>
          <div className='flex flex-col'>
          <label htmlFor="Name" className='text-[0.9rem] text-gray-800/80'>Name</label>
          <input onChange={(e)=>{
            setUser({
              ...user,
              name:e.target.value
            })
          }} className='p-3 text-[1.1rem] border-2 outline-none hover:border-blue-600 rounded-md' type="text" placeholder='' />
          </div>
          <div className='flex flex-col'>
          <label htmlFor="Name" className='text-[0.9rem] text-gray-800/80'>Email</label>
          <input
          onChange={(e)=>{
            setUser({
            ...user,
            email:e.target.value
            })
          }} className='p-3 text-[1.1rem] border-2 outline-none hover:border-blue-600 rounded-md' type="text" placeholder='' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-[0.9rem] text-gray-800/80'>Password(6+ character)</label>
            <input
            onChange={(e)=>{
              setUser({
                ...user,
                password:e.target.value
              })
            }}
            className='p-3 text-[1.1rem] border-2 outline-none hover:border-blue-600 rounded-md'type="password" placeholder='' />
          </div>
          </div>
          <div onClick={signupUser} className='bg-blue-600 hover:bg-blue-800 text-white w-[100%] rounded-[2.1rem] text-center mt-5 py-3 text-[1.1rem] mx-auto cursor-pointer'>
          <button  className='font-bold' >Agree & Join</button>
          </div>
        </div>
        <div className='text-center mt-8'>
          <p>Already on Linkedin? <Link to ='/LinkedIn/signin' className='mt-2  cursor-pointer text-blue-500 w-[38%] p-2 rounded-[2rem]   font-bold hover:underline hover:bg-blue-300/80'>Sign in</Link></p>
      </div>
      </div>
    </div>
    </>
  )
}

export default SignUp
