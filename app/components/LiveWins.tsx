import React from 'react'

const LiveWins: React.FC = () => {
  const list:number[]= [1,2,45,5,6,5]
  type Win = {
    id: number;
    earn: number;
    author: string;
    url: string;
  };
  
  const wins: Win[] = [
    { id: 1, earn: 12.3, author: 'Author 1', url: '/images/demo/cast-1.jpg' },
    { id: 2, earn: 234.44, author: 'Author 2', url: '/images/demo/cast-2.jpg' },
    { id: 3, earn: 32.23, author: 'Author 3', url: '/images/demo/cast-3.jpg' },
  ];
  
  return (
    <section className='flex flex-col w-full px-4'>
      <div className='flex gap-x-3 items-center'>
        <span className='w-2 h-2 rounded-full bg-red-700 animate-ping'  />
        <h2 className='font-black'>LIVE EARNINGS</h2>
      </div>
      <div className='flex w-full min-h-fit gap-x-4 bg-slate-100 p-3 '>
      {wins.map((win) => (
          <div key={win.id} className='w-[8.5rem] h-36 bg-slate-200 rounded-lg p-2 flex flex-col 
          items-center'>
            <img className='h-20' src={win.url} alt="" />
            <p>Watching Ads</p>
            <span className='font-bold text-green-600'>${win.earn}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LiveWins