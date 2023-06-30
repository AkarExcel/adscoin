import React from 'react'

const Offer = () => {
  return (
<div className='px-2 pt-2 md:px-8 md:pt-8 '>
    <div className='p-3 shadow-lg rounded-xl bg-white'>
      <div className='w-full pt-4'>
      <table className="w-full table-auto p-3  rounded-md">
        <thead className='p-4 pb-8 border-zinc-950 border-b'>
          <tr className='P-3 '>
            <th>ID</th>
            <th>Type</th>
            <th>Name</th>
            <th>Earned</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody className='p-4 bg-slate-100'>
          <tr>
            <td>1</td>
            <td>watched ads</td>
            <td>Frank</td>
            <td>400</td>
            <td>02 : 24 am</td>
          </tr>

        </tbody>
      </table>
      </div>
    </div>
</div>
  )
}

export default Offer