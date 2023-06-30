import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
<>
<nav id="sidebar-nav">
  {/* Add class="sticky-sidebar-js" for auto-height sidebar */}
  <ul id="vertical-sidebar-nav" className="sf-menu">
    <li className="normal-item-pro current-menu-item">
      <a href="/dashboard">
        <span className="icon-Old-TV" />
        Earn Studio
      </a>
    </li>
    <li className="normal-item-pro">
      <Link href="/dashboard/affiliate">
        <span className="icon-Reel" />
        Affiliates
      </Link>
    </li>
    <li className="normal-item-pro">
      <Link href="/dashboard/leaderboard">
        <span className="icon-Movie" />
        LeaderBoard
      </Link>
    </li>
    <li className="normal-item-pro">
      <Link href="/dashboard/offers">
        <span className="icon-Movie-Ticket" />
        Offers
      </Link>
    </li>
    <li className="normal-item-pro">
      <Link href="/dashboard/sponsored">
        <span className="icon-Clock" />
        Sponsored Post
      </Link>
    </li>
  </ul>
  <div className="clearfix" />
</nav>

</>
  )
}

export default Navbar