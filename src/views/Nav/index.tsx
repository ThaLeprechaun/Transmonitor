import React from 'react';

import Img from '../../Components/Image/Img';
import Avatar from '../../Components/Avatar';
import './nav.css';
import Search from '../../Components/Search/Search';

export default function Navbar() {
  const searchIcon = './assets/search.svg';
  const notificationBell = './assets/notification_bell.svg';
  return (
    <nav className="nav__container">
      <div className="container">
        <div className="nav__container--content">
          <div className="nav__items--left">
            <div className="nav__logo">
              TransMonitor
            </div>
            <div className="nav__search">
              <Img src={searchIcon} alt="searchIcon" className="search--icon"/>
              <div className="nav__search--input">
                <Search type="search" name="search" className="search__field" placeholder="Search..."/>
              </div>
            </div>
          </div>

          <div className="nav__items--right">
            <div className="nav__right--content">
              <ul className="nav--items">
                <li className="nav__link">Support</li>
                <li className="nav__link">FAQ</li>
                <li className="nav__link">
                  <div className="nav__notif">
                    <Img src={notificationBell} alt="notificationIcon"/>   
                  </div>
                </li>
                <div className="nav__avi">
                  <Avatar />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
