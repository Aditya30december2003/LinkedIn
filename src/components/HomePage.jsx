import React from 'react'
import LeftSide from './LeftSide'
import Middle from './Middle'
import RightSide from './RightSide'

const HomePage = () => {
  return (
    <div>
      <div className='cursor-pointer'>
        <h1 className='mt-20 text-center  text-sm underline font-bold'><span className='text-blue-500 decoration-blue-500'>Hiring in a Hurry?</span> -Find Talented pros in record time with Upwork and keep buisness moving.</h1>
      </div>

      <div className='flex flex-col lg:flex-row w-full mt-7'>
        <div className='w-full lg:w-1/3'>
          <LeftSide className=''/>
        </div>
        <div className='w-full lg:w-2/3 lg:px-16'>
          <Middle className=''/>
        </div>
        <div className='w-full lg:w-1/3'>
          <RightSide className=''/>
        </div>
      </div>

    </div>
  )
}

export default HomePage
