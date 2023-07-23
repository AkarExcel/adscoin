import React from 'react'

const page = () => {
  return (
  <div className='pt-28'>
    <div className='container flex flex-col w-full gap-4 md:pt-24 '>
      <h3 className='font-bold text-xl text-gray-500'>LeaderBoard</h3>
      <h1 className='font-bold text-5xl text-black'>Top Ranking</h1>
    </div> 

    <div className='w-full flex flex-col md:flex-row  gap-x-4 gap-y-7'>
      <div className='w-full md:w-1/2 p-3 flex flex-col gap-y-8'>
          <div className='w-full md:w-[90%] rounded-3xl h-28 flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 
          shadow-lg shadow-cyan-500/50 p-3 px-4  justify-between hover:scale-105 duration-200'>
            <div>
              <span className='icon-Crown'></span>
            </div>
            <span className='border-l border-blue-300 h-20 '/>

            <div className='flex items-center gap-x-3'>
              <div className='border border-white rounded-full w-10 h-10 bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-md'/>
                <div className='text-blue-100'>
                  <p className='text-yellow-500 text-lg'>First 1</p>
                  <p className='text-lg font-semibold text-white'>Lorem, ipsum.</p>
                  <p>12,213</p>
                </div>
                
            </div>
            <div className='flex space-x-4 items-center'>
                  <p className='font-bold text-lg md:text-2xl text-white'>9000</p>
                  <span className='icon-Coin'></span>
            </div>
          </div>

          <div className=' w-full md:w-[90%] self-end rounded-3xl h-28 flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 
          shadow-lg shadow-cyan-500/50 p-3 px-4  justify-between'>
            <div>
              <span className='icon-Crown'></span>
            </div>
            <span className='border-l border-blue-300 h-20 '/>

            <div className='flex items-center gap-x-3'>
                <div className='border border-white rounded-full w-10 h-10 bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-md'/>
                <div className='text-blue-100'>
                  <p className='text-yellow-500 text-lg'>First 1</p>
                  <p className='text-lg font-semibold text-white'>Lorem, ipsum.</p>
                  <p>12,213</p>
                </div>
                
            </div>
            <div className='flex space-x-4 items-center'>
                  <p className='font-bold text-lg md:text-2xl  text-white'>9000</p>
                  <span className='icon-Coin'></span>
            </div>
          </div>

          <div className='w-full md:w-[90%] rounded-3xl h-28 flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 
          shadow-lg shadow-cyan-500/50 p-3 px-4  justify-between'>
            <div>
              <span className='icon-Crown'></span>
            </div>
            <span className='border-l border-blue-300 h-20 '/>

            <div className='flex items-center gap-x-3'>
                <div className='border border-white rounded-full w-10 h-10 bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-md'/>
                <div className='text-blue-100'>
                  <p className='text-yellow-500 text-lg'>First 1</p>
                  <p className='text-lg font-semibold text-white'>Lorem, ipsum.</p>
                  <p>12,213</p>
                </div>
                
            </div>
            <div className='flex space-x-4 items-center'>
                  <p className='font-bold text-lg md:text-2xl text-white'>9000</p>
                  <span className='icon-Coin'></span>
            </div>
          </div>
      </div>

      <div className='w-full md:w-1/2 bg-green-300'>
        <table className='table-auto w-full'>
          <thead className=' border-b-2 border-b-slate-900  '>
            <th>
              Place
            </th>
            <th>
              User
            </th>
            <th>
              Earned
            </th>
          </thead>
          <tbody className='p-3'>
            <td>
              03
            </td>
            <td>
              James
            </td>
            <td>
              12,000
            </td>
          </tbody>
        </table>
      </div>
    </div>

  </div>
  )
}

export default page