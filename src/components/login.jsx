import React from 'react'
import LinkedinLogo from '../assets/Linkedin-logo.png'
import { GrArticle } from "react-icons/gr";
import { GoPeople , GoBriefcase} from "react-icons/go";
import { RiVideoLine } from "react-icons/ri";
import { MdOutlineComputer } from "react-icons/md";
import {Link} from 'react-router-dom'
import Banner from '../assets/Login-Image.png'
import Google from '../assets/google-icon.png'
const login = (props) => {
  return (
    <div className='w-full'>

        {/* Navbar */}
        <div className='flex items-center justify-between py-1 md:py-3'>
            {/* left side */}
            <div className=''>
                <img className='w-[90px] sm:w-[100px] md:w-[130px] lg:w-[140px]  cursor-pointer mx-1 md:mx-5  p-0' src={LinkedinLogo} alt="" />
            </div>

          {/* right side */}
          <div className="right flex items-center gap-10">
            <ul className='lg:flex items-center gap-10 ml-20 hidden'>
                <li  className='flex cursor-pointer  flex-col items-center gap-0'>
                    <GrArticle className='text-black/60' size={25}/>
                    <p className='text-sm text-black/40'>Articles</p>
                </li>
                <li className='flex cursor-pointer  flex-col items-center gap-0'>
                    <GoPeople className='text-black/60' size={25}/>
                    <p className='text-sm text-black/40'>People</p>
                </li>
                <li className='flex cursor-pointer  flex-col items-center gap-0'>
                    <RiVideoLine className='text-black/60' size={25}/>
                    <p className='text-sm text-black/40'>Learning</p>
                </li>
                <li className='flex cursor-pointer  flex-col items-center gap-0'>
                    <GoBriefcase className='text-black/60' size={25}/>
                    <p className='text-sm text-black/40'>Jobs</p>
                </li>
                <li className='flex cursor-pointer  flex-col items-center gap-0'>
                    < MdOutlineComputer className='text-black/60' size={25}/>
                    <p className='text-sm text-black/40'>Get the app</p>
                </li>
                <li className='w-[0.05rem] h-[50px] bg-black/20'>

                </li>
            </ul>

            <div className='flex items-center gap-2 md:gap-5 mr-2 md:mr-10'>
                <Link to='/signup' className='text-[0.9rem] md:text-[1rem] text-black px-6 py-3 rounded-[2rem] hover:bg-black/10'>Join now </Link>
                <Link to='/signin' className='text-blue-700 text-[1rem] border-2 px-6 py-3 rounded-[2rem] font-bold border-blue-700 hover:bg-blue-300/20'>Sign in</Link>
            </div>
            </div>

        </div>
  
  {/* Sign */}

  <div className='py-10 md:py-16 md:px-20 flex items-center gap-6 flex-col lg:flex-row '>

    <div className='w-[50%] flex flex-col items-center'>
     <h1 className='text-blue-600 text-[1.7rem] text-center md:text-[2.2rem] lg:text-left lg:text-[2.8rem]'>Welcome To your Professional Community</h1>
     <button className=' lg:items-center border-2 border-black p-2 mt-10 w-full rounded-[2rem] hidden lg:flex'>
       <img className='w-[15px] mr-0' src={Google} alt="" />
       <p className='text-center mx-auto'>Sign in with Google</p> 
    </button>
    </div>

    <div className='w-[100%] md:w-[50%]  rounded-[2rem] lg:ml-28'>
    <img className='object-cover rounded-full h-[25rem] w-[25rem] md:h-[32rem] md:w-[32rem] mx-auto' src={Banner} alt="" />
    </div>

    <button className='flex items-center border-2 border-black p-2 mt-10 w-full md:w-2/3 rounded-[2rem] lg:hidden'>
       <img className='w-[15px] mr-0' src={Google} alt="" />
       <p className='text-center mx-auto'>Sign in with Google</p> 
    </button>

  </div>

    </div>
  )
}

export default login
