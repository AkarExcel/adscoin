'use client'
import React,{useEffect, useRef} from 'react'
// import TinySlider from 'tiny-slider-react';
import { tns } from 'tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const settings = {
    items: 1,
    controls: false,
  };
  interface Imgs{
    id: number;
    title: string;
    url: string
  }

  const imgs: Imgs[] = [
    {title:'dude',id:1,url:'/images/demo/cast-1.jpg'},
    {title:'dude',id:1,url:'/images/demo/cast-2.jpg'},
    {title:'dude',id:1,url:'/images/demo/cast-3.jpg'}

  ] 

  var slider:any;

  useEffect(()=>{
     slider = tns({
      container: '.my-slider',
      items: 1,
      axis:'horizontal',
      mode: 'carousel',

    });

    return slider.destroy()
  },[])
  
  const handlePrev = () => {
    slider.goTo('prev');
  }

  const handleNext = () => {
    slider.goTo('next');
  }

  

  // const slider = useRef()
  return (
    <section className='relative h-full overflow-hidden'>
      <img className='absolute  object-cover blur-xm z-[-1] bg-opacity-20 ' src="/assets/content-bg.png" alt="" />
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
          <ul className='flex space-x-4'>
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

      <div className='w-full lg:w-1/2 flex flex-col items-center justify-center '>

        <div className='my-slider w-full p-4 flex justify-center items-center '>
          {imgs.map((el, index) => (
            <div key={index} className=''>
              <img
                className=''
                src={el.url}
                alt=""
              />
            </div>
          ))}
        </div>
        
      <div className='nav__slider flex w-full justify-between items-center '>
        <div className='bg-blue-300 p-4' onClick={handlePrev}><FontAwesomeIcon icon={faAngleLeft} /></div>
      
      <p>title</p>
      <div className='bg-blue-300 p-4' onClick={handleNext}><FontAwesomeIcon icon={faAngleRight} /></div>

      </div>
      </div>

      </div>

    </section>
  )
}

export default Hero