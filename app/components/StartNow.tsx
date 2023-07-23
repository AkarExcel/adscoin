import React from 'react'

const StartNow = () => {
  return (
    <section className='mt-5 text-center'>
      <div>
        <p>Start Earning Immediately!</p>
        <h3 className='title text-4xl'>Join Adscoin To Start Learning And Earning in Web3</h3>
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className='p-4 w-full md:w-1/2'>
          <img src="/assets/bonus.png" alt="" />
        </div>
        <div className='p-4 w-full md:w-1/2 flex flex-col items-start text-left gap-y-3 justify-center md:mx-6'>
            <h2 className='title uppercase'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores doloremque autem omnis neque illo quae!</p>
            <button className='mt-4 rounded-full px-5 py-3 font-bold bg-gradient-to-tr to-blue-400 from-green-200'>Join Now</button>
        </div>
      </div>
       {/* STATs */}
      <div className='w-full text-center space-y-4 my-5'>
        <h1 className=''>Lorem ipsum dolor sit amet.</h1>
        <h2 className='title text-4xl'>We&apos;ve Paid Our Members</h2>
        <div className='flex flex-col md:flex-row justify-around'>
          <div className='flex flex-col items-center p-4'>
            <h2 className='text-cyan-500 text-2xl font-bold'>590,999 <span>+</span></h2>
            <p>Monthly Active Users</p>
          </div>
          <div className='flex flex-col items-center p-4'>
            <h2 className='text-cyan-500 text-2xl font-bold'>590,999 <span>+</span></h2>
            <p>Monthly Active Users</p>
          </div>
          <div className='flex flex-col items-center p-4'>
            <h2 className='text-cyan-500 text-2xl font-bold'>590,999 <span>+</span></h2>
            <p>Monthly Active Users</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StartNow