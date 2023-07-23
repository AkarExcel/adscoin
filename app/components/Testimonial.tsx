import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

const Testimonial = () => {
  return (
    <section className='p-2 mt-10'>
      <div className='text-center md:text-left'>
        <h2 className='title text-3xl'>What Our Users Have Earned so Far</h2>
        <p className='text-center text-md mt-3'>Our users from all over the world share their lovely words about us.</p>
      </div>
      {/* Add map for Testimonial */}
      <div className='flex flex-col md:flex-row ' >
        <div className='flex flex-col justify-center items-center w-full md:w-1/2'>
          <div className='m-4  shadow bg-white flex flex-col justify-center items-center p-4 gap-y-2'>
            <img src="/assets/SJunkie_Payment_2.jpg" alt="payment" />
            <div className='text-left'>
              <h4 className='title'>"Lorem, ipsum dolor."</h4>
              <p className='font-italic mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, at libero?
              </p>
              <div className='flex justify-between p-2 items-center'>
                <div className='flex space-x-3 items-center'>
                <div className='rounded-full w-10 h-10 overflow-hidden '>
                <img className='object-cover' src="/images/demo/user-9.jpg" alt="emphasis image" />
                </div>
                <p>soji</p>
                </div>

                <div className='rounded-full w-10 h-10'>
                <img src="/images/genres/action.png" alt="emphasis image" />
                </div>
                
              </div>
            </div>
          </div>
          {/* end map */}

          <div className='flex  w-full items-center justify-center space-x-3'>
            <FontAwesomeIcon icon={faArrowLeftLong}/>
            <span>1/3</span>
            <FontAwesomeIcon icon={faArrowRightLong}/>
          </div>
        </div>
        <div className=' w-full md:w-1/2'>
          {/* add some cool ma here with user navigation */}
          <img src="/assets/testimonials.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Testimonial