'use client'
import {useEffect, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isProfile, setIsProfile] = useState(false);
  const [isNotify, setIsNotify] = useState(false);
  const [isMenu, setIsMenu] = useState(false)

  const handleMenu = () => {
    setIsMenu(!isMenu)
  }

  const handleProfile = () => {
    setIsProfile(!isProfile)
    setIsNotify(false)
  }
  const handleNotify = () => {
    setIsNotify(!isNotify)
    setIsProfile(false)
  }

  return (
<header id="videohead-pro" className={`fixed lg:z-[1000] z-[112] w-full ${isMenu?'active-mobile-icon-pro':''}`} style={{position:'fixed'}}>
  <div id="video-logo-background">
    <Link href="/" className='p-3 pl-4 pt-5'>
      <Image src="/images/logo-video-layout.png" alt="Logo" width={500} height={500}/>
    </Link>
  </div>
  <div id="video-search-header">
    <div id="search-icon-more" />
    <input
      type="text"
      placeholder="Search for Movies or TV Series"
      aria-label="Search"
    />
    <div id="video-search-header-filtering">
      <form id="video-search-header-filtering-padding">
        <div className="row">
          <div className="col-sm extra-padding">
            <h5>Type:</h5>
            <div className="row">
              <div className="col-sm">
                <label className="checkbox-pro-container">
                  Movies
                  <input
                    type="checkbox"
                    defaultChecked="checked"
                    id="movies-type"
                  />
                  <span className="checkmark-pro" />
                </label>
                <label className="checkbox-pro-container">
                  TV Series
                  <input type="checkbox" id="tv-type" />
                  <span className="checkmark-pro" />
                </label>
              </div>
              {/* close .col */}
              <div className="col">
                <label className="checkbox-pro-container">
                  New Arrivals
                  <input type="checkbox" id="movie-type" />
                  <span className="checkmark-pro" />
                </label>
                <label className="checkbox-pro-container">
                  Documentary
                  <input type="checkbox" id="documentary-type" />
                  <span className="checkmark-pro" />
                </label>
              </div>
              {/* close .col */}
            </div>
            {/* close .row */}
            <div className="dotted-dividers-pro" />
          </div>
          {/* close .col */}
          <div className="col-sm extra-padding">
            <h5>Genres:</h5>
            <select className="custom-select">
              <option selected="">All Genres</option>
              <option value={1}>Action</option>
              <option value={2}>Adventure</option>
              <option value={3}>Drama</option>
              <option value={4}>Animation</option>
              <option value={5}>Documentary</option>
              <option value={6}>Drama</option>
              <option value={7}>Horror</option>
              <option value={8}>Thriller</option>
              <option value={9}>Fantasy</option>
              <option value={10}>Romance</option>
              <option value={11}>Sci-Fi</option>
              <option value={12}>Western</option>
            </select>
            <div className="dotted-dividers-pro" />
          </div>
          {/* close .col */}
          <div className="col-sm extra-padding">
            <h5>Country:</h5>
            <select className="custom-select">
              <option selected="">All Countries</option>
              <option value={1}>Argentina</option>
              <option value={2}>Australia</option>
              <option value={3}>Bahamas</option>
              <option value={4}>Belgium</option>
              <option value={5}>Brazil</option>
              <option value={6}>Canada</option>
              <option value={7}>Chile</option>
              <option value={8}>China</option>
              <option value={9}>Denmark</option>
              <option value={10}>Ecuador</option>
              <option value={11}>France</option>
              <option value={12}>Germany</option>
              <option value={13}>Greece</option>
              <option value={14}>Guatemala</option>
              <option value={15}>Italy</option>
              <option value={16}>Japan</option>
              <option value={17}>asdfasdf</option>
              <option value={18}>Korea</option>
              <option value={19}>Malaysia</option>
              <option value={20}>Monaco</option>
              <option value={21}>Morocco</option>
              <option value={22}>New Zealand</option>
              <option value={23}>Panama</option>
              <option value={24}>Portugal</option>
              <option value={25}>Russia</option>
              <option value={26}>United Kingdom</option>
              <option value={27}>United States</option>
            </select>
            <div className="dotted-dividers-pro" />
          </div>
          {/* close .col */}
          <div className="col-sm extra-padding extra-range-padding">
            <h5>Average Rating:</h5>
            <input
              className="range-example-rating-input"
              type="text"
              min={0}
              max={10}
              defaultValue="4,10"
              step={1}
            />
            {/* JS is under /js/script.jss */}
          </div>
          {/* close .col */}
        </div>
        {/* close .row */}
        <div id="video-search-header-buttons">
          <a href="#!" className="btn btn-green-pro">
            Filter Search
          </a>
          <a href="#!" className="btn">
            Reset
          </a>
        </div>
        {/* close #video-search-header-buttons */}
      </form>
      {/* #video-search-header-filtering-padding */}
    </div>
    {/* close #video-search-header-filtering */}
  </div>
  {/* close .video-search-header */}
  <div id="mobile-bars-icon-pro" className={`noselect`} onClick={handleMenu}>
    <i className="fas fa-bars" />
  </div>

` <div id="header-user-profile" className={`hide ${isProfile?"active":""}`} onClick={handleProfile}>
    <div id="header-user-profile-click" className="noselect flex items-center w-fit justify-center">
      <img src="images/demo/user-profile.jpg" alt="Suzie" />
      <div id="header-username">Suzie Smith</div>
      <i className="fas fa-angle-down" />
    </div>
    {/* close #header-user-profile-click */}
    <div id="header-user-profile-menu">
      <ul>
        <li>
          <Link href="dashboard/profile">
            <span className="icon-User" />
            My Profile
          </Link>
        </li>
        {/* <li>
          <a href="dashboard-favorites.html">
            <span className="icon-Favorite-Window" />
            My Favorites
          </a>
        </li> */}
        <li>
          <Link href="/dashboard/account">
            <span className="icon-Gears" />
            Account Details
          </Link>
        </li>
        <li>
          <Link href="/dashboard/support">
            <span className="icon-Life-Safer" />
            Help/Support
          </Link>
        </li>
        <li>
          <Link href="/">
            <span className="icon-Power-3" />
            Log Out
          </Link>
        </li>
      </ul>
    </div>
    {/* close #header-user-profile-menu */}
  </div>`
  {/* close #header-user-profile */}
  <div id="header-user-notification" className={`hide ${isNotify?"active":""}`} onClick={handleNotify}>
  <div className='relative hidden mx-2 md:flex items-center'>
        <div className='rounded-l-full bg-slate-100 py-2 px-3 r'>2500</div>
        <div className='rounded-r-full bg-slate-50 py-2 px-3'>4000 <span>USD</span></div>
  </div>
    <div id="header-user-notification-click" className="noselect">
      <i className="far fa-bell" />
      <span className="user-notification-count">3</span>
    </div>
    {/* close #header-user-profile-click */}
    <div id="header-user-notification-menu" onClick={() => setIsNotify(!isNotify)}>
      <h3>Notifications</h3>
      <div id="header-notification-menu-padding">
        <ul id="header-user-notification-list">
          <li>
            <a href="#!">
              <img src="images/demo/user-profile-2.jpg" alt="Profile" />
              Lorem ipsum dolor sit amet, consec tetur adipiscing elit.{" "}
              <div className="header-user-notify-time">21 hours ago</div>
            </a>
          </li>
          <li>
            <a href="#!">
              <img src="images/demo/user-profile-3.jpg" alt="Profile" />
              Donec vitae lacus id arcu molestie mollis.{" "}
              <div className="header-user-notify-time">3 days ago</div>
            </a>
          </li>
          <li>
            <a href="#!">
              <img src="images/demo/user-profile-4.jpg" alt="Profile" />
              Aenean vitae lectus non purus facilisis imperdiet.{" "}
              <div className="header-user-notify-time">5 days ago</div>
            </a>
          </li>
        </ul>
        <div className="clearfix" />
      </div>
      {/* close #header-user-profile-menu */}
    </div>
  </div>
  {/* close #header-user-notification */}
  <nav id="mobile-navigation-pro"  className='mt-12' style={isMenu?{ display: "block" }:{display: "none"}}>
  <div className="menu-collapser" style={isMenu?{ display: "block" }:{display: "none"}}>
    Menu
    <div className="collapse-button">
      <span className="icon-bar" />
      <span className="icon-bar" />
      <span className="icon-bar" />
    </div>
  </div>
  <ul id="mobile-menu-pro" className="collapsed" style={isMenu?{ display: "block" }:{display: "none"}}>
    <li>
      <Link href="/dashboard">
        <span className="icon-Old-TV" />
        Earn Studio
      </Link>
    </li>
    <li></li>
    <li>
      <Link href="/dashboard/affiliate">
        <span className="icon-Reel" />
        Affiliates
      </Link>
    </li>
    <li>
      <a href="/dashboard/leaderboard">
        <span className="icon-Movie" />
        LeaderBoard
      </a>
    </li>
    <li>
      <a href="/dashboard/offers">
        <span className="icon-Movie-Ticket" />
        Offers
      </a>
    </li>
    <li>
      <a href="/dashboard/sponsored">
        <span className="icon-Clock" />
        Sponsored post
      </a>
    </li>
    <li>
      <a href="#!">
        <i className="far fa-bell" />
        <span className="user-notification-count">3</span>
        Notifications
      </a>
    </li>
  </ul>
  <div className="clearfix" />
  <div id="search-mobile-nav-pro">
    <input
      type="text"
      placeholder="Search for Movies or TV Series"
      aria-label="Search"
    />
  </div>
</nav>

</header>


  )
}

export default Header