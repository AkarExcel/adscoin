import React from 'react'

const Payment = () => {
  return (
    <div>
        <h1 className='text-xl font-bold'>Payment Setting</h1>

        <form action="">
            <div className='p-2 flex flex-col gap-x-2'>
                <label htmlFor="paypal">PayPal Address</label>
                <input className='p-3 border border-slate-300 rounded-full' type="text" name="paypal" id="" placeholder='Enter Address'/>
            </div>
            <div className='p-2 flex flex-col gap-x-2'>
                <label htmlFor="btc">Bitcoin Address</label>
                <input className='p-3 border border-slate-300 rounded-full' type="text" name="btc" id="" placeholder='Enter Address'/>
            </div>
            <div className='p-2 flex flex-col gap-x-2'>
                <label htmlFor="eth">Etherum Address</label>
                <input className='p-3 border border-slate-300 rounded-full' type="text" name="eth" id="" placeholder='Enter Address'/>
            </div>
            <div className='p-2 flex flex-col gap-x-2'>
                <label htmlFor="ngn">NGN Account Number</label>
                <input className='p-3 border border-slate-300 rounded-full' type="text" name="ngn" id="" placeholder='Enter Address'/>
            </div>
            <div className='p-2 flex flex-col gap-x-2'>
                <label htmlFor="bch">Bitcoin Cash Address</label>
                <input className='p-3 border border-slate-300 rounded-full' type="text" name="bch" id="" placeholder='Enter Address'/>
            </div>
            <button className='btn btn-green-pro bg-green-500' type="submit">Save Changes</button>
        </form>
    </div>
  )
}

export default Payment