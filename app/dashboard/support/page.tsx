import React from 'react'

const page = () => {
  return (
    <div className='pt-28 md:pt-24 '>
        <div>
        <div className='container flex flex-col w-full gap-4 '>
            <h3 className='font-bold text-xl text-gray-500'>support</h3>
            <h1 className='font-bold text-5xl text-black'>Help center</h1>
        </div> 

        <div className='rounded-md w-full shadow-md p-4 m-4'>
            <div className='w-full flex justify-between items-center'>
                <p className='font-bold text-lg'>your ticket Notification</p>
                <button className="bg-red-100 rounded-xl p-2 px-4">clear all Notifications</button> 
            </div>
            <div className='w-full'>
                <p className='text-center'>Oops</p>
            </div>
        </div>
        <div className='pt-28'/>
        <div className='rounded-md w-full shadow-md p-4  m-4 '>
            <div className='w-full flex justify-between items-center'>
                <p className='font-bold text-lg'>your ticket</p>
                <button className="bg-blue-100 rounded-xl p-2 px-4">Create ticket</button> 
            </div>
            <div className='w-full'>
                <p className='text-center'>You have no ticket yet! Create one by hitting the Create Button</p>
            </div>
        </div>

        </div>
    </div>
  )
}

export default page