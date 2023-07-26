import React from 'react'

const Why:React.FC = () => {
  return (
  <section className='p-2 mt-5 md:mt-10'>
<div className="w-full">
  <div className="flex flex-col md:flex-row lg:justify-between">
    <div className="w-full md:w-1/2">
      <div
        className="services__content aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration={1000}
      >
        <h3 className="font-bold text-2xl md:text-4xl">Lorem, ipsum dolor.</h3>
        <p className="md:text-sm md:w-1/2 mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum. Eos, modi? Eaque, tempora qui.
        </p>
        <ul className="flex flex-col gap-y-6 p-2 mt-4">
          <li className="active li__wrapper">
            <div className="bg-red-200 icon p-4">
              <svg
                width={37}
                height={38}
                viewBox="0 0 37 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M35.9606 13.88C34.7889 6.66876 28.6638 1.30399 21.361 1.0928C21.0138 1.07919 20.6754 1.2042 20.4205 1.44029C20.1655 1.67637 20.0149 2.00415 20.0018 2.35138V2.35138V2.46885L20.824 14.7694C20.878 15.5974 21.5898 16.2269 22.4182 16.179L34.7523 15.3567C35.0999 15.331 35.4228 15.1678 35.6496 14.9032C35.8764 14.6386 35.9883 14.2945 35.9606 13.9471V13.88Z"
                  stroke="#D33535"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.8195 8.40957C13.6041 8.22809 14.407 8.62953 14.7325 9.36609C14.8178 9.53933 14.8691 9.72732 14.8835 9.91987C15.0514 12.3028 15.4038 17.5217 15.6051 20.3409C15.6395 20.8488 15.8749 21.322 16.2591 21.6558C16.6433 21.9896 17.1448 22.1566 17.6524 22.1197V22.1197L28.0064 21.482C28.4686 21.4542 28.9218 21.6187 29.2586 21.9365C29.5954 22.2542 29.786 22.6971 29.7851 23.1601V23.1601C29.3656 29.4125 24.8735 34.6394 18.7553 35.9942C12.6371 37.3491 6.3582 34.5074 3.33816 29.0167C2.43662 27.4365 1.86569 25.6894 1.66005 23.8817C1.57214 23.3269 1.53842 22.7649 1.55937 22.2036C1.57718 15.5266 6.26646 9.7735 12.8027 8.40957"
                  stroke="#D33535"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col space-y-3">
              <h6 className="title">Earn even as a non affiliate</h6>
              <p>
                As a non affiliate you can peform tasks daily on the website and
                earn, Even participate in Quiz and Lucky wheel to earn Extra and
                even purchase airtime and data with your earnings.
              </p>
            </div>
          </li>
          <li className=" li__wrapper">
            <div className="icon bg-green-200">
              <svg
                width={44}
                height={44}
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6667 3.66699V9.16699"
                  stroke="#58BD7D"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.3333 3.66699V9.16699"
                  stroke="#58BD7D"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.41675 16.665H37.5834"
                  stroke="#58BD7D"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M40.3334 34.8333C40.3334 36.2083 39.9484 37.51 39.2701 38.61C38.0051 40.7367 35.6768 42.1667 33.0001 42.1667C31.1484 42.1667 29.4618 41.4883 28.1784 40.3333C27.6101 39.8567 27.1151 39.27 26.7301 38.61C26.0518 37.51 25.6667 36.2083 25.6667 34.8333C25.6667 30.7817 28.9484 27.5 33.0001 27.5C35.2001 27.5 37.1618 28.4716 38.5001 29.9933C39.6368 31.295 40.3334 32.9817 40.3334 34.8333Z"
                  stroke="#58BD7D"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30.1401 34.8338L31.9551 36.6488L35.8601 33.0371"
                  stroke="#58BD7D"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M38.5 15.5837V29.9936C37.1617 28.472 35.2 27.5003 33 27.5003C28.9483 27.5003 25.6667 30.782 25.6667 34.8337C25.6667 36.2087 26.0517 37.5103 26.73 38.6103C27.115 39.2703 27.61 39.857 28.1783 40.3337H14.6667C8.25 40.3337 5.5 36.667 5.5 31.167V15.5837C5.5 10.0837 8.25 6.41699 14.6667 6.41699H29.3333C35.75 6.41699 38.5 10.0837 38.5 15.5837Z"
                  stroke="#58BD7D"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.9918 25.1169H22.0083"
                  stroke="#58BD7D"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.2062 25.1169H15.2226"
                  stroke="#58BD7D"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.2062 30.6169H15.2226"
                  stroke="#58BD7D"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="content">
              <h6 className="title">RANKS AND INCENTIVES FOR INFLUENCERS</h6>
              <p>
                All Ranked influencers are entitled to incentives on Learnify,
                You get paid your full affiliate earnings + Incentives
              </p>
            </div>
          </li>
          <li className=" li__wrapper">
            <div className="icon bg-blue-200">
              <svg
                width={45}
                height={44}
                viewBox="0 0 45 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.5332 3.66699H22.1332C21.5253 3.66699 21.0332 4.15907 21.0332 4.76699C21.0332 5.37491 21.5253 5.86699 22.1332 5.86699H26.5332C27.1411 5.86699 27.6332 5.37491 27.6332 4.76699C27.6332 4.15907 27.1411 3.66699 26.5332 3.66699Z"
                  fill="#3772FF"
                />
                <path
                  d="M31.3001 0H13.7001C11.2743 0 9.30011 1.97416 9.30011 4.4V39.6C9.30011 42.0258 11.2743 44 13.7001 44H31.3001C33.726 44 35.7001 42.0258 35.7001 39.6V4.4C35.7001 1.97416 33.726 0 31.3001 0ZM33.5001 39.6C33.5001 40.8152 32.5153 41.8 31.3001 41.8H13.7001C12.485 41.8 11.5001 40.8152 11.5001 39.6V4.4C11.5001 3.18484 12.485 2.2 13.7001 2.2H31.3001C32.5153 2.2 33.5001 3.18484 33.5001 4.4V39.6Z"
                  fill="#3772FF"
                />
                <path
                  d="M22.5002 40.3336C23.7152 40.3336 24.7002 39.3486 24.7002 38.1336C24.7002 36.9186 23.7152 35.9336 22.5002 35.9336C21.2851 35.9336 20.3002 36.9186 20.3002 38.1336C20.3002 39.3486 21.2851 40.3336 22.5002 40.3336Z"
                  fill="#3772FF"
                />
                <path
                  d="M18.4666 5.86699C19.0741 5.86699 19.5666 5.3745 19.5666 4.76699C19.5666 4.15948 19.0741 3.66699 18.4666 3.66699C17.8591 3.66699 17.3666 4.15948 17.3666 4.76699C17.3666 5.3745 17.8591 5.86699 18.4666 5.86699Z"
                  fill="#3772FF"
                />
              </svg>
            </div>

            <div className="content">
              <h6 className="title">Global Enability</h6>
              <p>
                Learnify is a Global business, anybody in the world can get
                started and enjoy all L-Earn benefits without limitations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="w-full md:w-1/2 lg:translate-x-10 lg:w-[33%] self-start">
      <div className="relative ">
        <div className="shape" />
        <div className="shadow rounded-lg flex flex-col items-center gap-y-4  py-4 w-[94%] my-3 mx-auto p-4 bg-white ">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://learnify.ng/rockie/assets/images/avt/user.jpg"
              alt="user"
            />
            <h6 className='mt-2 font-bold'>Esther Mariam</h6>
            <p>esthermariam01@gmail.com</p>
          </div>
          <div className="flex flex-col gap-y-2 w-[95%]  items-start p-4 rounded-xl text-white 
          bg-gradient-to-tr from-[#ffc872] to-[#8444d5]
          ">
            <h6 className="title text-white">Overview</h6>
            <p>Balance</p>
            <h6 className="price text-xl text-white">$20,509.75</h6>
            <div className="flex space-x-2 mt-2">
              <a className='rounded-full border border-white px-3 py-1' href="#">Deposit</a>
              <a className='rounded-full border border-white px-3 py-1' href="#">Withdraw</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </section>
  )
}

export default Why