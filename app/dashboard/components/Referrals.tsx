import React from 'react'

const Referrals = () => {
  return (
    <div className='px-2 pt-2 md:px-8 md:pt-8 '>
      <div className='p-3 shadow-lg rounded-xl bg-white'>
        <h4 className='text-gray-400 text-sm'>Your Referral Network</h4>
        <h1 className=' text-2xl font-bold'>Your invites</h1>
        <p className='text-gray-400 text-xs'>Explore the people you have invited and their stats below.</p>

        <div className='w-full pt-4'>
        <table className="w-full table-auto p-3  rounded-md">
          <thead className='p-4 bg-slate-200'>
            <tr className='P-3'>
              <th>S/N</th>
              <th>Name</th>
              <th>Rank</th>
              <th>Total Earned</th>
            </tr>
          </thead>
          <tbody className='p-4 bg-slate-100'>
            <tr>
              <td>1</td>
              <td>Malcolm Lockyer</td>
              <td>God</td>
              <td>$4000</td>
            </tr>

          </tbody>
        </table>
        </div>
      </div>
  </div>
  )
}

export default Referrals