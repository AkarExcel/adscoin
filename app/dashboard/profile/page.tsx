'use client'
import {useState,useEffect} from 'react'
import Balance from '../components/Balance'
import History from '../components/History'
import Offer from '../components/Offer'
import Referrals from '../components/Referrals'

const page = () => {
  const [isBalance,setIsBalance] = useState(true)
  const [isOffer,setIsOffer] = useState(false)
  const [isHistory,setIsHistory] = useState(false)
  const [isReferrals,setIsReferrals] = useState(false)

  const handleBalance = () => {
    if(isBalance == false){
        setIsBalance(true)
        setIsHistory(false)
        setIsOffer(false)
        setIsReferrals(false)
    }

  }

  const handleHistory = () => {
    if(isHistory == false){
        setIsHistory(true)
        setIsBalance(false)
        setIsOffer(false)
        setIsReferrals(false)
    }

  }

  const handleOffer = () => {
    if(isOffer == false){
        setIsOffer(true)
        setIsHistory(false)
        setIsBalance(false)
        setIsReferrals(false)
    }

  }

  const handleReferrals = () => {
    if(isReferrals == false){
        setIsReferrals(true)
        setIsHistory(false)
        setIsBalance(false)
        setIsOffer(false)
        
    }

  }

  return (
<>
<div className='pt-24'>
    <div className='container flex flex-col w-full gap-4 md:pt-24 '>
        <h3 className='font-bold text-xl text-gray-500'>Profile</h3>
        {/* <h1 className='font-bold text-5xl text-black'>User1</h1> */}
    </div>

    <div className=' flex flex-col gap-y-3 md:gap- md:flex-row w-full justify-center 
    md:ustify-between align-center p-4 md:w-full'>
        <div className='flex flex-row md:gap-2 gap-x-3 justify-center md:justify-start p-2 md:p-0 md:w-1/4'>
            <img src="/images/demo/user-1.jpg" alt="" className='rounded-full w-16 h-16 md:w-12 md:h-12' />
            <div className='flex flex-col justify-center items-start'>
                <p className='font-bold text-xl text-gray-600'>Jane Doe</p>
                <p>janedoe@gmail.com</p>
            </div>
        </div>
        <div className='flex  justify-between md:justify-between w-full md:w-2/4 md:px-5 '>
        <div className='flex flex-col justify-center items-center'>
            <h3 className='font-bold md:text-xl text-gray-600'>25 June 2021</h3>
            <p>Registered</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h3 className='font-bold text-xl text-gray-600'>User</h3>
            <p>Rank <span>Legend</span></p>
        </div>

        </div>
        <div className='flex flex-col justify-center items-center md:w-1/4'>
            <h3 className='font-bold text-xl text-gray-600'>Cash out</h3>
            <p className='text-red-600'>0 <span>USD</span></p>
        </div>

    </div>

    <div>
        <ul className='flex flex-col w-full justify-start items-start gap md:gap-x-4 md:flex-row text-xl md:text-center md:text-sm '>
            <li className={`flex p-1 px-3 w-full justify-between md:justify-center items-center 
            ${isBalance?'md:bg-gray-200 rounded-full':''}`} onClick={handleBalance}>
                <p className='flex items-center md:py-3 hover:text-red-600 w-2/3 md:flex-col h-16 md:gap-y-2  '>
                <span className="icon-Coin pr-3 " />
                Balance
                </p>
                <span className="icon-Next md:hidden"/>
            </li>
            <li className={`flex p-1 px-3 h-16 w-full justify-between md:justify-center items-center 
              ${isOffer?'md:bg-gray-200 rounded-full':''}`} onClick={handleOffer}>
                <p className='flex items-center hover:text-red-600 w-2/3 md:flex-col h-16 md:gap-y-2 md:py-3 '>
                <span className="icon-Coin pr-3 " />
                Fulfilled
                </p>
                <span className="icon-Next md:hidden "/>
            </li>
            <li className={`flex p-1 px-3 h-16 w-full justify-between md:justify-center  items-center 
               ${isHistory?'md:bg-gray-200 rounded-full':''}`} onClick={handleHistory}>
                <p className='flex items-center md:py-2 hover:text-red-600 w-2/3 md:flex-col h-16 md:gap-y-2 '>
                <span className="icon-Coin pr-3 " />
                History
                </p>
                <span className="icon-Next md:hidden"/>
            </li>
            <li className={`flex p-1 px-3 h-16 w-full justify-between md:justify-center items-center 
             ${isReferrals?'md:bg-gray-200 rounded-full':''}`} onClick={handleReferrals}>
                <p className='flex items-center  hover:text-red-600 w-2/3 md:py-3 md:flex-col h-16 md:gap-y-2  '>
                <span className="icon-Coin pr-3 " />
                Referrals
                </p>
                <span className="icon-Next md:hidden"/>
            </li>
        </ul>
    </div>
    
    <div>
        {isBalance?<Balance/>:<div/>}
        {isHistory?<History/>:<div/>}
        {isOffer?<Offer/>:<div/>}
        {isReferrals?<Referrals/>:<div/>}
    </div>



</div>
</>
  )
}

export default page