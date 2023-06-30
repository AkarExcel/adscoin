'use client'
import { Chart } from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import React, {useState} from 'react'
import { Line } from 'react-chartjs-2';
Chart.register(CategoryScale)

const Balance = () => {

  const [chartData , setChartData] = useState(
    {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'My Dataset',
          data: [12, 19, 3, 5, 2, -3],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }
      ]
    }
  )
  
  
  return (
    <div className='container w-full px-1 md:px-8 md:pt-10 pt-16 '>
      <div className='w-full'>
        <div className='w-1/2 md:w-1/6 p-6 bg-blue-100 rounded-2xl flex flex-col justify-center items-start h-20'>
          <span className='text-3xl md:text-2xl font-black'>400</span>
          <p className='md:text-sm'>Earned coin</p>
        </div>
      </div>
  <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Total Earnings"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>

  )
}

export default Balance