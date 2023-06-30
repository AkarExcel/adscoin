'use client'
import React,{useEffect} from 'react'
import OpenPlayerJS from 'openplayerjs';
import 'openplayerjs/dist/openplayer.css'

const page = () => {
  useEffect(() => {
    const player = new OpenPlayerJS('player');
    player.init();
}, []);
  return (
<>

 <div className='container flex flex-col w-full gap-4 md:pt-24 '>
  <h3 className='font-bold text-xl text-gray-500'>Welcome Back!</h3>
  <h1 className='font-bold text-5xl text-black'>User1</h1>
 </div>

<div className='container flex flex-col items-center space-y-5 mt-8'>
  <div className='w-full'>
      <h2 className='md:text-3xl text-gray-400 font-bold text-center'>Watch and Earn</h2>
  </div>
  <div className='w-[85%] bg-slate-600'>
    <video id='player' className='op-player__media ' controls playsInline>
          <source src='https://my.test.com/video.mp4' type='video/mp4' />
    </video>
  </div>
</div>

 
 <div className='px-2 my-3 container'>
  <div className='flex justify-between'>
    <div>
      <h2 className='text-xl md:text-3xl text-gray-400 font-bold'>Earn Possibilities</h2>
    </div>
    <button className='rounded-full text-blue-600 px-3 py-2 text-sm md:text-base'>Show More</button>
  </div>
  <div className='flex w-full h-52 gap-2 p-2'>
    <div className='w-1/2 md:w-1/3 lg:w-1/4 h-30 rounded-xl border border-blue-400 bg-black'>

    </div>
    <div className='w-1/2 h-30 rounded-xl border border-blue-400 bg-black'>

    </div>
  </div>
 </div>

<div className='flex flex-col md:flex-row container'>

<div className='flex flex-col md:gap-6 md:w-1/2 '>
  <div className='flex flex-col justify-between space-y-8 rounded-xl h-52 bg-gradient-to-r from-red-800 to-red-500 p-4 
  shadow-[0_35px_60px_-15px_rgba(153,27,270,0.3)]'>
    <img src="/logo.png" alt="testimage" />
    <div className='flex items-center justify-between '>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <button className='rounded-full bg-white py-2 px-4' type="button">Claim</button>
    </div>
  </div>

  <div className='flex flex-col justify-between space-y-8 rounded-xl h-52 p-4 
  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] bg-gray-200 hover:bg-gradient-to-r hover:from-red-800 hover:to-red-500 p-4 
  hover:shadow-[0_35px_60px_-15px_rgba(153,27,270,0.3)] duration-200'>
    <img src="/logo.png" alt="testimage" />
    <div className='flex items-center justify-between '>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <button className='rounded-full bg-red-400 py-2 px-4' type="button">Claim</button>
    </div>
  </div>
</div>

<div className='flex flex-col md:w-1/2 mt-8 w-full'>
  <div className='flex items-center space-x-4'>
    <span className='w-10 h-10 rounded-full bg-blue-200 bg-opacity-20'></span>
    <h2>Complete AdsCoin tasks</h2>
  </div>
  <div className='flex flex-col gap-y-5 gap-x-3 overflow-x-auto h-full 
  justify-between w-full  py-4 px'>

    <div className='flex items-center justify-between w-[600px] '>
      <img src="/logo.png" alt="" srcset="twitter" />
      <div className='flex flex-col items-start'>
        <span>Follow us</span>
        <p>On Twitter @AdsCoinTube</p>
      </div>
      <div className='flex'>
        Earn 250
        <span>
        O
        </span>
      </div>
      <button className='rounded-full p-2 px-3 bg-gradient-to-r from-red-800 to-red-500 text-white
       hover:shadow-[0_35px_60px_-15px_rgba(153,27,270,0.3)]'>
        complete
      </button>
    </div>

    <div className='flex items-center justify-between w-[600px] '>
      <img src="/logo.png" alt="" srcset="twitter" />
      <div className='flex flex-col items-start'>
        <span>Follow us</span>
        <p>On Twitter @AdsCoinTube</p>
      </div>
      <div className='flex'>
        Earn 250
        <span>
        O
        </span>
      </div>
      <button className='rounded-full p-2 px-3 bg-gradient-to-r from-red-800 to-red-500 text-white
       hover:shadow-[0_35px_60px_-15px_rgba(153,27,270,0.3)]'>
        complete
      </button>
    </div>

    <div className='flex items-center justify-between w-[600px] '>
      <img src="/logo.png" alt="" srcset="twitter" />
      <div className='flex flex-col items-start'>
        <span>Follow us</span>
        <p>On Twitter @AdsCoinTube</p>
      </div>
      <div className='flex'>
        Earn 250
        <span>
        O
        </span>
      </div>
      <button className='rounded-full p-2 px-3 bg-gradient-to-r from-red-800 to-red-500 text-white
       hover:shadow-[0_35px_60px_-15px_rgba(153,27,270,0.3)]'>
        complete
      </button>
    </div>

  </div>
  
</div>

</div>

</>
    )
}

export default page