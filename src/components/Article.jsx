import React , {useState , useEffect} from 'react'
import User from '../assets/user.svg'
import { BsThreeDots } from "react-icons/bs";
import Image from '../assets/Image.jpg'
import { FcLike } from "react-icons/fc";
import { FiThumbsUp } from "react-icons/fi";
import { PiHandsClappingBold } from "react-icons/pi";
import { SlLike } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import { IoPaperPlane } from "react-icons/io5";
import {account , database} from '../Appwrite/appwrite'
import CurrentDate from './CurrentDate';

const Article = () => {
    const [posts , setPosts] = useState()
    const[loader , setLoader] = useState(false)
    const [userDetails , setUserDetails] =useState()
    useEffect(()=>{
        const getDetails = account.get()
        getDetails.then(
         function(response){
          setUserDetails(response)
         },
         function(error){
          console.log(error)
         }
        )
        },[])

    useEffect(()=>{
        setLoader(true)
        const getPost = database.listDocuments("65c5e61c65259c535580","65c608b83cf39364173f")

        getPost.then(
            function(response){
                setPosts(response.documents)
                setLoader(false)
            },
            function(error){
                console.log(error)
            }
        )
    } , [])

    const deletePost = (id) => {
        const promise =  database.deleteDocument("65c5e61c65259c535580","65c608b83cf39364173f",id)
        promise.then(
         function(response){
             console.log(response);
             window.location.reload()
         },
         function(error){
             console.log(error);
         }
       )
     }

     //truncateString
     const truncateString=(str,num)=>{
        if(str?.length>num){
          return str.slice(0,num) + ' Read more...';
        }
        else{
          return str;
        }
}


  return (
    <div className='px-2'>
    {loader ? (<>
    <p>Loading.....</p> 
    </>) : (<>
    <div>
    {posts && posts.map(item=>(
        <div key={item.$id} className='mb-10 border-2 w-full  rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white'>
        {/* header */}
        <div className='p-3 flex justify-between'>
            {/* user-icon */}
        <div className='flex items-center gap-3'>
         <div>
            <div><img src={User} className='w-[3.8rem] rounded-[100%] cursor-pointer' alt="" /></div>
         </div>
         {/* user-info */}
         <div>
        {userDetails ? (<><ul className='text-sm text-black/40'>
                <li className='text-black font-bold cursor-pointer text-[1rem] md:text-[1.1rem] lg:text-[1.3rem]'>{userDetails.name}</li>
                <li className='cursor-pointer text-[0.7rem] md:text-[1rem]'>{userDetails.email}</li>
                <li className='cursor-pointer text-[0.7rem]'><CurrentDate /></li>
            </ul></>) : (
                <><p>Login first</p></>
            )}
            
         </div>
         </div>
         {/* 3dots */}
        <div className='mt-[-10px]' onClick={() => {
                      deletePost(item.$id)
                    }}>
            <BsThreeDots className='cursor-pointer' size={30} />
        </div>
        </div>
    
        {/* content */}
        <div className='px-3 flex flex-col'>
            <div className='text-[0.7rem] md:text-[0.9rem]'>
            {item.Post}
            </div>
            <div className='bg-red-500 text-blue-500 font-bold underline'>
            {item.Link}
            </div>
        </div>
    
        {/* media */}
        <div className='mt-4'>
            <img className='cursor-pointer' src={item.Image} alt="" />
        </div>
    
        {/* likes-comments */}
        <div className='flex p-2'>
            <div className='bg-blue-300 p-1 rounded-[100%]'><FiThumbsUp rotate={90} color='blue'/></div>
            <div className='bg-pink-300 p-1 rounded-[100%]'><FcLike /></div>
            <div className='bg-green-300 p-1 rounded-[100%]'><PiHandsClappingBold color='green' /></div>
            <div className="info text-sm text-black/40 ml-2">30 commented</div>
        </div>
        <div className='p-2'>
        <div className='w-7/9mx-auto h-[0.05rem] bg-black/30'></div>
        </div>
         {/* buttons */}
         <div className='p-5'>
            <ul className='flex items-center justify-between'>
                <li className='flex items-center gap-2 cursor-pointer'>
                    <SlLike size={22} className='cursor-pointer text-black/60' />
                    <p className='font-bold text-sm text-black/60 hidden md:block'>Like</p>
                </li>
                <li className='flex items-center gap-2 cursor-pointer'>
                   <FaRegCommentDots size={22} className='cursor-pointer text-black/60' />
                   <p className='font-bold text-sm text-black/60 hidden md:block'>Comment</p> 
                </li>
                <li className='flex items-center gap-2 cursor-pointer'>
                   <BiRepost size={25} className='cursor-pointer text-black/60' />
                    <p className='font-bold text-sm text-black/60 hidden md:block'>Repost</p>
                </li>
                <li className='flex items-center gap-2 cursor-pointer'>
               <IoPaperPlane size={22} className='cursor-pointer text-black/60' />
                <p className='font-bold text-sm text-black/60 hidden md:block'> Send</p>  
                </li>
            </ul>
         </div>
    
        </div>
    ))}
     </div> 
    </>)}
    </div>
  )
}

export default Article
