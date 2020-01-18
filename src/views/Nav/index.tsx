import React from 'react';
import Img from '../../Components/Image/Img';

export default function Navbar() {
  const searchIcon = './assets/search.svg';
  return (
    <nav className="nav__container">
      <div className="nav__container--content">
        <div className="nav__items--left">
          <div className="nav__logo">
            Transmonitor
          </div>
          <div className="nav__search">
            <Img src={searchIcon} alt="searchIcon"/>
          </div>
          <div className="nav__search--input">
            <input type="search" name="search" className="search__field" placeholder="Search..."/>
          </div>
        </div>

        <div className="nav__items--right">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
        </div>
      </div>
    </nav>
  )
}
