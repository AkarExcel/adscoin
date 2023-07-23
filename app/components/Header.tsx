
import React,{useEffect, useState} from 'react'

const Header = () => {
  const [open, setOpen] = useState(false);
  useEffect(()=>{console.log(open)},[open])

  return (
<header id="header_main" className=" relative">
  <div className="px-3 py-2">
    <div className="flex relative">
      <div className="w-full">
        <div className="flex justify-between ">

          <div className="flex gap-x-5 justify-center items-center ">
            <div className="logo">
                <h1 className='uppercase font-bold'>Adscointube</h1>
            </div>
            <div className="flex 0">
            <nav id="main-nav" className=" hidden lg:flex">
                <ul id="menu-primary-menu" className="flex gap-x-5 uppercase whitespace-nowrap">
                    <li className="menu-item current-menu-item">
                    <a href="https://learnify.ng">Home</a>
                    </li>

                    <li className="menu-item">
                    <a href="https://learnify.ng/news">How it works?</a>
                    </li>
                    <li className="menu-item">
                    <a href="https://learnify.ng/adverts">About Us</a>
                    </li>
                    <li className="menu-item">
                    <a href="https://learnify.ng/contact-us">Success Stories</a>
                    </li>

                    <li className="menu-item">
                    <a href="https://learnify.ng/marketplace">FAQ</a>
                    </li>
                </ul>
            </nav>

            </div>
            </div>

          <div className="flex space-x-3 items-center">
            {/* <div className="mode-switcher">
              <a className="sun" href="#" onclick="switchTheme()">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.99993 11.182C9.7572 11.182 11.1818 9.75745 11.1818 8.00018C11.1818 6.24291 9.7572 4.81836 7.99993 4.81836C6.24266 4.81836 4.81812 6.24291 4.81812 8.00018C4.81812 9.75745 6.24266 11.182 7.99993 11.182Z"
                    stroke="#23262F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 1V2.27273"
                    stroke="#23262F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 13.7271V14.9998"
                    stroke="#23262F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.04956 3.04932L3.9532 3.95295"
                    stroke="#23262F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0469 12.0469L12.9505 12.9505"
                    stroke="#23262F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 8H2.27273"
                    stroke="#23262F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.7273 8H15"
                    stroke="#23262F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.04956 12.9505L3.9532 12.0469"
                    stroke="#23262F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0469 3.95295L12.9505 3.04932"
                    stroke="#23262F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#" className="moon" onclick="switchTheme()">
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.0089 8.97241C12.7855 9.64616 12.4491 10.2807 12.0107 10.8477C11.277 11.7966 10.2883 12.5169 9.1602 12.9244C8.03209 13.3319 6.81126 13.4097 5.64056 13.1486C4.46987 12.8876 3.39772 12.2986 2.54959 11.4504C1.70145 10.6023 1.1124 9.53013 0.851363 8.35944C0.590325 7.18874 0.668097 5.96791 1.07558 4.8398C1.48306 3.71169 2.2034 2.72296 3.1523 1.9893C3.71928 1.55094 4.35384 1.21447 5.02759 0.991088C4.69163 1.84583 4.54862 2.77147 4.61793 3.7009C4.72758 5.17128 5.36134 6.55346 6.40394 7.59606C7.44654 8.63866 8.82873 9.27242 10.2991 9.38207C11.2285 9.45138 12.1542 9.30837 13.0089 8.97241Z"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div> */}
            <div className=" px-4 py-2 rounded-2xl border-2 text-black">
              <a href="/login"> Login</a>
            </div>

            <div className={`relative flex items-center justify-center cursor-pointer p-2 h-4
            menu-btn  ${open?'open':''} lg:hidden`} onClick={() => setOpen(!open)}>
              <span className={`mobile-btn `}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav id="main-nav-mobi" className={`absolute w-full lg:hidden h-screen transition-all duration-500 z-10
   ${open?' flex ':'hidden'}`} >
    <ul id="menu-primary-menu" className="flex flex-col gap-y-2 text-lg uppercase w-full whitespace-nowrap">
                    <li className="menu-item current-menu-item">
                    <a href="https://learnify.ng">Home</a>
                    </li>

                    <li className="menu-item">
                    <a href="https://learnify.ng/news">How it works?</a>
                    </li>
                    <li className="menu-item">
                    <a href="https://learnify.ng/adverts">About Us</a>
                    </li>
                    <li className="menu-item">
                    <a href="https://learnify.ng/contact-us">Success Stories</a>
                    </li>

                    <li className="menu-item">
                    <a href="https://learnify.ng/marketplace">FAQ</a>
                    </li>
    </ul>
  </nav>
</header>

  )
}

export default Header