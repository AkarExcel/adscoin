import React,{useEffect, useRef} from 'react'
import TinySlider from 'tiny-slider-react';
import 'tiny-slider/dist/tiny-slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const settings = {
    items: 1,
    controls: false,
  };
  const imgs = [1,2,3]

  const slider = useRef()
  return (
    <section className='relative h-full overflow-hidden '>
      <img className='absolute  object-cover blur-sm z-[-1] bg-opacity-20 ' src="/images/hero-bg.jpg" alt="" />
      <div className='flex flex-col lg:flex-row w-full py-10'>
      <div className='flex flex-col items-center justify-center w-full lg:w-1/2
        text-center gap-y-5 p-4'>
        <h3 className='text-4xl font-bold uppercase'>
          Adscointube
        </h3>
        <p className='mt-6 font-semibold '>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In incidunt vero labore maxime harum excepturi recusandae ad quia soluta ea!
        </p>
        <button className='bg-slate-400 hover:bg-slate-300 px-5 py-4 rounded-full uppercase font-bold'>
          Register
        </button>
        <div>
          <p>Lorem ipsum dolor sit amet.</p>
          <ul className='flex space-x-2'>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">
              tw
              </a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">
              tele
              </a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer">
              kine
              </a></li>
          </ul>
        </div>
      </div>

      <div className='w-full lg:w-1/2 flex flex-col items-center justify-center'>
      <TinySlider settings={settings} ref={slider} >
          {imgs.map((el, index) => (
            <div key={index} className='w-full flex flex-col justify-center items-center'>
              <img
                className=''
                src='/images/demo/cast-2.jpg'
                alt=""
              />
            </div>
          ))}
      </TinySlider>
      <div className='nav__slider flex w-full justify-between items-center justify-center'>
      <FontAwesomeIcon icon={faAngleLeft} onClick={() => console.log('hi') }/>
      <p>title</p>
      <FontAwesomeIcon icon={faAngleRight} />
      </div>
      </div>

      </div>

    </section>
  )
}

export default Hero