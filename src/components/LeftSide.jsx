import React , {useState , useEffect} from 'react'
import Camera from '../assets/Addphoto.svg'
import CardBG from '../assets/Card-bg.svg'
import { TiUserAdd } from "react-icons/ti";
import {CiSaveDown2} from "react-icons/ci";
import {Link ,useNavigate} from "react-router-dom"
import {account} from "../Appwrite/appwrite"

const LeftSide = () => {
  const navigate = useNavigate();
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

  return (
    <>
    {userDetails ? (
    <>
    <div className='py-7 px-12 flex flex-col items-center gap-5'>

{/* card 1*/}
<div className='bg-white border-2 rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]'>
 {/* banner */}
 <div >
  <img className='rounded-t-xl object-cover' src={CardBG} alt="" />
 </div>

 {/* camera-image */}
 <div className=' bg-white p-2 relative w-[25%] rounded-[100%] border-black cursor-pointer mx-auto mt-[-30px] '>
  <img className='mx-auto border-black' src={Camera} alt="" />
 </div>

 {/* Personal */}
 <div className='text-center align-center py-2'>
   <h1 className='text-black font-bold'>Welcome, {userDetails.name}</h1>
   <h2 className='text-sm text-blue-700 font-bold cursor-pointer mt-2'>Add a photo</h2>
 </div>

 <div className='w-full h-[0.05rem] bg-black/30'></div>

 {/* Account info */}

 <div className='px-3 py-4 font-bold flex items-center justify-between'>
  <div className='text-sm'>
      <p className='text-black/40'>Connections</p>
      <p>Grow your Network</p>
  </div>
  <div><TiUserAdd size={23} /></div>
 </div>

 <div className='w-full h-[0.05rem] bg-black/30'></div>

 {/* Cart */}
 <div className='flex items-center px-2 py-4 text-sm font-bold text-black gap-3 cursor-pointer'>
 <CiSaveDown2 size={20} />
  <p>My Items</p>
 </div>

</div>


{/* Card 2 */}
<div className='bg-white border-2 rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-full'>
{/* list */}
<div className='px-2 py-3 text-sm text-black/70 font-bold'>
  <ul className='flex flex-col gap-2'>
      <li className='cursor-pointer'>Groups</li>
      <li className='cursor-pointer flex items-center justify-between'><p>Events</p> <p className='cursor-pointer text-black/70 font-bold text-[0.9rem]'>+</p></li>
      <li className='cursor-pointer' >Follows Hashtags</li>
  </ul>
</div>
<div className='w-full h-[0.05rem] bg-black/30'></div>
{/* discover-more */}
<div className='text-black/40 font-bold py-3 px-2 text-[0.8rem] cursor-pointer'>
  <p>Discover More</p>
</div>
</div>

</div>
    </>
    ) : (
      <>
      <div className='text-center mt-8'>
          <p>New to Linkedin? <Link to ='/signup' className='mt-2  cursor-pointer text-blue-500 w-[38%] p-2 rounded-[2rem]   font-bold hover:underline hover:bg-blue-300/80'>Join Now</Link></p>
      </div>
      </>
    )}
    </>
  )
}

export default LeftSide
