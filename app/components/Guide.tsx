import React from 'react'
import Link from 'next/link'

const Guide = () => {
  return (
    <section className='flex flex-col md:flex-row p-4 mt-10'>

      <div className='flex flex-col p-3 py-5 rounded-md hover:shadow-lg hover:translate-y-[-20px] 
      transition-all duration-300 items-center text-center gap-y-5'>
          <div>
            <img src="/assets/icon-01.png" alt="" />
          </div>
          <div className='space-y-4'>
            <h4 className='font-bold text-xl'>
              <Link href='#'>
              Create A Free Account
              </Link>
            </h4>
            <p>Sign up for a MoneyEasily Account and get a $25 instantly. Select your payment preferences and provide basic contact info.</p>
          </div>
      </div>

      <div className='flex flex-col p-3 py-5 rounded-md hover:shadow-lg hover:translate-y-[-20px] 
      transition-all duration-300 items-center text-center gap-y-5'>
          <div>
            <img src="/assets/icon-01.png" alt="" />
          </div>
          <div className='space-y-4'>
            <h4 className='font-bold text-xl'>
              <Link href='#'>
              Create A Free Account
              </Link>
            </h4>
            <p>Sign up for a MoneyEasily Account and get a $25 instantly. Select your payment preferences and provide basic contact info.</p>
          </div>
      </div>

      <div className='flex flex-col p-3 py-5 rounded-md hover:shadow-lg hover:translate-y-[-20px] 
      transition-all duration-300 items-center text-center gap-y-5'>
          <div>
            <img src="/assets/icon-01.png" alt="" />
          </div>
          <div className='space-y-4'>
            <h4 className='font-bold text-xl'>
              <Link href='#'>
              Create A Free Account
              </Link>
            </h4>
            <p>Sign up for a MoneyEasily Account and get a $25 instantly. Select your payment preferences and provide basic contact info.</p>
          </div>
      </div>

    </section>
  )
}

export default Guide