import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-cyan-200 to-blue-200 px-10 pt-20 flex flex-col justify-between'>
        <div className='flex flex-col-reverse md:flex-row w-full gap-8'>

          <div className='flex flex-col gap-y-4 w-full md:w-2/6 '>
            <img className='w-24' src="/images/logo.png" alt="" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate quia reiciendis repellendus earum eligendi cumque expedita laborum aliquam similique assumenda vero ab qui commodi autem temporibus nihil animi fugiat odit, nesciunt atque distinctio. Cum
               quaerat, sequi, sunt doloribus est ea mollitia ullam architecto consectetur officiis sit dicta dolore libero suscipit.
            </p>
          </div>

          <div className=' w-4/6 flex flex-row flex-wrap md:flex-row   md:justify-evenly justify-between gap-y-5'>
            <div className='flex flex-col gap-y-4'>
              <h2 className='title uppercase text-xl'>Lorem</h2>
              <ul className='flex flex-col gap-2'>
                <li><a href="">Link</a></li>
                <li><a href="">Link</a></li>
                <li><a href="">Link</a></li>
                <li><a href="">Link</a></li>
              </ul>
            </div>

            <div className='flex flex-col gap-y-4'>
              <h2 className='title uppercase text-xl'>Lorem</h2>
              <ul className='flex flex-col gap-2'>
                <li><a href="">Link</a></li>
                <li><a href="">Link</a></li>
                <li><a href="">Link</a></li>
                <li><a href="">Link</a></li>
              </ul>
            </div>

            <div className='flex flex-col gap-y-4'>
              <h2 className='title uppercase text-xl'>Lorem</h2>
              <ul className='flex flex-col gpa-2'>
                <li><a href="">Link</a></li>
                <li><a href="">Link</a></li>
                <li><a href="">Link</a></li>
                <li><a href="">Link</a></li>
              </ul>
            </div>
          </div>


        </div>

        <div className='mt-3 flex items-center justify-center p-2 text-center border-t border-white'>
          <p>©2023 Learnify.Ng. All Rights Reserved. <a href="">Terms Of Service</a> | <a href="">Privacy Terms</a></p>
        </div>
    </footer>
  )
}

export default Footer