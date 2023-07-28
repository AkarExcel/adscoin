import React from 'react'
import Footer2 from './Footer2'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import SubcribeForm from './SubcribeForm'
import { TypeAnimation } from 'react-type-animation'

const Emailist = () => {
  const MAIL_CHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL
  return (
    <div className='relative h-screen overflow-hidden'>
      <div className='w-36 m-3'>
      <img src="/assets/adscoin-logo.png" alt="" />
      </div>
        <img className='absolute object-cover blur-xs z-[-1] bg-opacity-20 ' src="/assets/content-bg.png" alt="" />
        <div className='px-10 md:px-0 md:w-2/3 h-full flex flex-col items-center justify-center gap-10 mx-auto text-center'>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Transforming ads',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Transforming ads with fair compensation',
                1000,
                'Transforming ads with fair compensation for attention',
                1000,
                'Transforming ads with fair compensation for attention Built on BSC',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              className='title text-3xl md:text-4xl lg:text-6xl'
            />
            <p className='md:text-lg md:w-1/2 font-semibold'>Utilizing the Digital Economy, Cheap Gas Fees powered by Binance</p>
            <MailchimpSubscribe
            url={MAIL_CHIMP_URL}
            render={(props) => {
              const {subscribe,status,message} = props || {};
              return (
                <SubcribeForm
                status={status}
                message={message}
                onValidated={(formData:any) => subscribe(formData)}
                />
              )
            }}

            />

        </div>
        <Footer2/>
    </div>
  )
}

export default Emailist