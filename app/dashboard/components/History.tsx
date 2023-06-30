import React from 'react'

const History = () => {
  return (
    <div className='px-2 pt-2 md:px-8 md:pt-8 '>
      <div className='p-3 shadow-lg rounded-xl bg-white'>
        <h1 className=' text-2xl font-bold'>Your withdrawl</h1>

        <div className='w-full pt-4'>
        <table className="w-full table-auto p-3  rounded-md">
          <thead className='p-4 bg-slate-200'>
            <tr className='P-3'>
              <th>S/N</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody className='p-4 bg-slate-100'>
            <tr>
              <td>1</td>
              <td>$4000</td>
              <td>02 : 24 am</td>
            </tr>

          </tbody>
        </table>
        </div>
      </div>
  </div>
  )
}

export default History