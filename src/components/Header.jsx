import React from 'react'
import Icon from '../assets/linkidin.png'
import UserImage from '../assets/user.svg'
import { FaSearch } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { GoPeople , GoBriefcase } from "react-icons/go";
import { RiMessage2Fill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import {account} from '../Appwrite/appwrite'
import {useNavigate} from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate()
    
    const LogOut=()=>{
        let account = document.querySelector('.account')
        let logout =document.querySelector('.logout');
        if(logout.classList.contains('account-active')){
            logout.classList.remove('account-active');
        }
        else{
            logout.classList.add('account-active');
        }
    }

    const handleLogout =async()=>{
        try{
         await account.deleteSession("current")
         navigate("/")
        }
        catch(error){
         console.log(error)
        }
       }

  return (
    <div className='fixed w-full z-100 mt-0 top-0 left-0'>
    <div className='bg-white w-full px-3 py-1 flex items-center justify-between'>
      <div className=''>
        <img className='w-[35px] cursor-pointer' src={Icon} alt="" />
      </div>
      
      <div  className='flex items-center border-2 gap-2 px-1 py-[0.3rem] w-1/2 lg:w-1/4 rounded-sm search'>
         <FaSearch className='cursor-pointer font-bold text-black/60 ' />
        <input className='outline-none w-full text-black/60 text-sm mx-2' type="text" placeholder='Search'/>
      </div>

      <div className='hidden lg:block'>
        <ul className='flex items-center gap-6'>
            <li  className='active flex cursor-pointer  flex-col items-center gap-0'>
                <FaHouse className='text-black/60' size={20}/>
                <p className='text-sm text-black/60'>Home</p>
            </li>
            <li  className='flex cursor-pointer  flex-col items-center gap-0'>
                <GoPeople className='text-black/60' size={20}/>
                <p className='text-sm text-black/60'>My Network</p>
            </li>
            <li  className='flex cursor-pointer  flex-col items-center gap-0'>
                <GoBriefcase className='text-black/60' size={20}/>
                <p className='text-sm text-black/60'>Jobs</p>
            </li>
            <li  className='flex cursor-pointer  flex-col items-center gap-0'>
                < RiMessage2Fill className='text-black/60' size={20}/>
                <p className='text-sm text-black/60'>Messaging</p>
            </li>
            <li  className='flex cursor-pointer  flex-col items-center gap-0'>
                <IoNotifications className='text-black/60' size={20}/>
                <p className='text-sm text-black/60'>Notifications</p>
            </li>
            <li onMouseOver={LogOut} className='flex cursor-pointer  flex-col items-center gap-0'>  
                <img className='text-black/60 w-[21px] rounded-[100%]' size={20} src={UserImage} alt="" />
                <div className='text-sm text-black/60 flex items-center'>
                   <p onClick={handleLogout}>Me</p> 
                   <IoMdArrowDropdown/>
                </div>
                <div className='logout text-sm absolute mt-[2.7rem] px-2 py-3  z-100 bg-white text-black/60 hidden'>Log Out</div>
            </li>
            <li  className='flex cursor-pointer  flex-col items-center gap-0'>

            </li>
            <li  className='flex cursor-pointer  flex-col items-center gap-0'>
                <BsGrid3X3GapFill className='text-black/60' size={20}/>
                <div className='text-sm text-black/60 flex items-center'>
                    <p>For Buisness</p>
                    <IoMdArrowDropdown />
                </div>
            </li>
        </ul>
        </div>

        <div>
            <p className='text-sm text-yellow-700 font-extralight cursor-pointer underline'>Try for ₹0 : Premium</p>
        </div>
    </div>

    {/* mobile-nav */}
    <div className='lg:hidden fixed bottom-0 bg-white w-full'>
        <ul className='flex items-center justify-between'>
            <li  className='active flex cursor-pointer  flex-col items-center gap-0'>
                <FaHouse className='text-black/60' size={20}/>
                <p className='text-[0.8rem] font-bold md:text-sm text-black/60'>Home</p>
            </li>
            <li  className='flex cursor-pointer  flex-col items-center gap-0'>
                <GoPeople className='text-black/60' size={20}/>
                <p className='text-[0.8rem] font-bold md:text-sm text-black/60'>My Network</p>
            </li>
            <li  className='flex cursor-pointer  flex-col items-center gap-0'>
                <GoBriefcase className='text-black/60' size={20}/>
                <p className='text-[0.8rem] font-bold md:text-sm text-black/60'>Jobs</p>
            </li>
            <li  className='flex cursor-pointer  flex-col items-center gap-0'>
                < RiMessage2Fill className='text-black/60' size={20}/>
                <p className='text-[0.8rem] font-bold md:text-sm text-black/60'>Messaging</p>
            </li>
            <li  className='flex cursor-pointer  flex-col items-center gap-0'>
                <IoNotifications className='text-black/60' size={20}/>
                <p className='text-[0.8rem] font-bold md:text-sm text-black/60'>Notifications</p>
            </li>
            <li onClick={handleLogout} className='flex cursor-pointer  flex-col items-center gap-0'>  
                <img className='text-black/60 w-[21px] rounded-[100%]' size={20} src={UserImage} alt="" />
                <div className='text-[0.8rem] font-bold md:text-sm text-black/60 flex items-center'>
                   <p>Me</p> 
                   <IoMdArrowDropdown />
                </div>
           </li>
            {/* <li  className='flex cursor-pointer  flex-col items-center gap-0'>
                <BsGrid3X3GapFill className='text-black/60' size={20}/>
                <p className='text-sm text-black/60 flex items-center'>
                    <p>For Buisness</p>
                    <IoMdArrowDropdown />
                </p>
            </li> */}
        </ul>
        </div>
    </div>
  )
}

export default Header
