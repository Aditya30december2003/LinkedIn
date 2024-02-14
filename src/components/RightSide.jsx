import React from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { LiaHashtagSolid } from "react-icons/lia";
const RightSide = () => {
  return (
    <div className=' p-5  flex flex-col items-center gap-5'>
        {/* Card */}
        <div className='bg-white px-5 py-1 border-2 border-gray-500/40 rounded-xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-full'>
        {/* heading */}
       <div className='flex items-center justify-between font-bold text-black/60'>
       <h1>Add to your feed</h1>
       <IoIosAddCircle />
       </div>

       {/* list */}
      <div className='mt-5'>
      <ul className='flex flex-col gap-5 '>
        <li className='flex items-center gap-3'>
            <div className='border-4 border-blue-300 rounded-[100%] cursor-pointer'>
            <LiaHashtagSolid className='bg-gray-200 border-white border-2 rounded-[100%] p-2' size={60} />
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-sm'>#Linkedin</p>
                <button className='text-black/60 text-sm border-2 px-4 py-2 rounded-3xl border-black/50'>Follow</button>
            </div>
        </li>

        <li className='flex items-center gap-3'>
            <div className='border-4 border-blue-300 rounded-[100%] cursor-pointer'>
            <LiaHashtagSolid className='bg-gray-200 border-white border-2 rounded-[100%] p-2' size={60} />
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-sm'>#Video</p>
                <button className='text-black/60 text-sm border-2 px-4 py-2 rounded-3xl border-black/50'>Follow</button>
            </div>
        </li>
      </ul>
      </div>

      {/* video-recommend */}
      <div className='mt-5 text-sm font-bold cursor-pointer'>
        <h1 className='text-blue-500'>View all recommendations ➡️</h1>
      </div>

      </div>

      {/* Card2 */}

      <div className='bg-white px-5 py-1 border-2 border-gray-500/40 rounded-xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] w-full h-[50px]'>
       
      </div>

    </div>
  )
}

export default RightSide
