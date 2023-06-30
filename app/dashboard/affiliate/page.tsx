import React from 'react'

const page = () => {
  return (
    <div className='pt-28 md:pt-24'>
    <div className='container flex flex-col w-full gap-4 '>
      <h3 className='font-bold text-xl text-gray-500'>Affiliates</h3>
      <h1 className='font-bold text-5xl text-black'>Earn Free Coins</h1>
   </div>

   <div className='flex flex-col md:flex-row p-3 md:gap-x-2 gap-y-12 '>
    <div className='flex flex-col space-y-4 rounded-xl p-4 shadow-md md:w-1/3 md:h-fit'>
      <h2 className='font-medium mb-3'>Your Credit</h2>
      <div className='flex justify-between items-center'><p>invited</p> <span>12</span></div>
      <hr />
      <div className='flex justify-between items-center'><p>Earnings</p> <span>111</span></div>
      <button className='bg-red-400 rounded-full p-2'>
        Claim Rewards
      </button>
    </div>

    <div className='flex flex-col gap-y-3 md:w-2/3 p-2 '>
    <h2 className='font-bold text-xl'>Referral Link</h2>
    <p className=''>Your earn 5% of the Coins your referrals earn through an offer ! Give them this link to sign up and you’re good to go</p>
    <div className='flex flex-col gap-y-3'>
      <p className='font-bold'>referral link</p>
      <button className='py-2 px-4 bg-blue-300 rounded-full text-center w-full text-sm md:text-base'>https://coingain-next.vercel.app/affiliate</button>
    </div>
    <div className='flex h-24 w-20 gap-4 '>

    <div>
      <span className="icon-Instagram" />
    </div>
    <div className=''>
      <span className="icon-Twitter" /></div>
    <div>
      <span className="icon-Youtube" />
    </div>
    <div>
      <span className="icon-Email" />
    </div>


    </div>
    </div>
   </div>
    </div>

  )
}

export default page