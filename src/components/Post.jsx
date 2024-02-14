import React , {useState , useEffect} from 'react'
import UserImage from '../assets/user.svg'
import { IoIosVideocam } from "react-icons/io";
import { MdInsertPhoto } from "react-icons/md";
import { BsCalendarEventFill } from "react-icons/bs";
import { MdOutlineArticle } from "react-icons/md";
import { AiOutlineClose } from 'react-icons/ai'
import {database} from '../Appwrite/appwrite'
import {v4 as uuidv4} from 'uuid'
const Post = () => {
 const [open , setOpen] = useState(false)
 const [Post , setPost] = useState("")
 const [Links , setUrl] = useState("")
 const [Image , setImage] = useState("")

 const handleSubmit=(e)=>{
  e.preventDefault();
  const promise = database.createDocument("65c5e61c65259c535580","65c608b83cf39364173f" ,uuidv4(),{Post , Links ,Image})

 promise.then(
  function(response){
    console.log(response)
    window.location.reload()
  },
  function(error){
    console.log(error)
  }
 )
 }
 


  return (
    <div className='px-2 py-7'>
        {/* Card */}
    <div className='border-2 w-full  rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white'>
        {/* button */}
        <div className='text-black/40 font-bold text-center'>
          <button>Share</button> 
        </div>
    {/* post card */}
  <div>
    {/* post */}
      <div className='flex items-center  w-full px-5 py-3 gap-5 '>
      <div><img src={UserImage} className='w-[3rem] rounded-[100%] cursor-pointer' alt="" /></div>
      <div className='w-4/5'><input onClick={()=>setOpen(!open)} className='outline-none px-2 py-3 rounded-[2rem] w-full border-2' type="text" placeholder="Start a post" /></div>
   </div>

      {/* options */}
      <div>
        <ul className='flex items-center justify-around p-2 font-bold text-sm md:teext-[1.3rem] text-blue-400'>
            <li  className='flex items-center cursor-pointer'>
               <MdInsertPhoto size={25} color='blue' />
               <p>Photo</p> 
            </li>
            <li className='flex items-center gap-2 cursor-pointer'>
                <IoIosVideocam size={25} color='green' />
                <p>Video</p>
            </li>
            <li className='flex items-center gap-2 cursor-pointer'>
                <BsCalendarEventFill size={23} color='orange' />
                <p>Event</p>
            </li>
            <li className='flex items-center gap-2 cursor-pointer'>
                <MdOutlineArticle size={25} color='red'/>
                <p>Article</p>
            </li>
        </ul>
      </div>
      </div>
    </div>

    <div className={open?'fixed opacity-100 bg-black/80 z-10 h-screen w-full top-0 left-0':'absolute opacity-0'}>
    <div className='bg-white w-[97%] md:w-[50%] lg:w-[40%] mx-auto mt-[5%] p-3 rounded-[1rem]'>
        <div className='flex items-center justify-between'>
          <h1 className='font-bold text-gray-700'>Create a Post</h1>
          <p className='cursor-pointer' onClick={()=>setOpen(!open)}><AiOutlineClose/></p>
        </div>
        <div className='py-3'>
          <textarea onChange={(e)=>{
            setPost(e.target.value)
          }} className='w-full outline-none' placeholder='What do you want to talk about?' name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className='w-full mb-5'>
          <input onChange={(e)=>{
            setImage(e.target.value)
          }} type="text" placeholder="Add Image URL" className='w-full p-2 border-2 hover:border-blue-500 outline-none rounded-[2rem]'/>
        </div>
        <div className='w-full mb-5'>
          <input onChange={(e)=>{
            setUrl(e.target.value)
          }} type="text" placeholder="Related Link" className='w-full p-2 border-2 hover:border-blue-500 outline-none rounded-[2rem]'/>
        </div>
        <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
        <MdInsertPhoto size={25} color='gray' className='cursor-pointer'/>
        <IoIosVideocam size={30} color='gray' className='cursor-pointer'/>
        </div>
        <div onClick={handleSubmit} className='text-white bg-blue-500 mr-5 px-4 py-2 rounded-[1.3rem] font-bold'>
          <button>Post</button>
        </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Post
