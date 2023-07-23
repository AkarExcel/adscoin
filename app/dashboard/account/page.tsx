'use client'
import React, { useState } from 'react'
import AccountsSetting from '../components/AccountsSetting'
import Payment from '../components/Payment'

const page = () => {
    const [isDetails, setDetails] = useState(true)
    const [isPayment, setPayment] = useState(false)

    const handleDetails = () => {
        if(isDetails == false){
            setDetails(true)
            setPayment(false)

        }
    }

    const handlePayment = () => {
        if(isPayment == false){
            setPayment(true)
            setDetails(false)
        }
    }
  return (
<>
  <div className="dashboard-container pt-24">
    <ul className="dashboard-sub-menu">
      <li className={`${isDetails?"current":''}`} onClick={handleDetails}>
        <a >Account Settings</a>
      </li>
      <li className={`${isPayment?"current":''}`} onClick={handlePayment}>
        <a>Payment Info</a>
      </li>
    </ul>
    {/* close .dashboard-sub-menu */}
    {isDetails?<AccountsSetting/>:<div/>}
    {isPayment?<Payment/>:<div/>}
    
    
    {/* close .container-fluid */}
  </div>
  {/* close .dashboard-container */}
</>

  )
}

export default page