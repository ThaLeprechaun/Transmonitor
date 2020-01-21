import React from 'react'

import Button from '../../Components/Button/Button';
import {items} from '../../data/sideNavItem';
import SideNavMenu from '../../Components/SideNavMenu';
import './sidenav.css';


interface IItemProps {
  text: string;
  icon: string;
  key?: number;
}

export default function SideNav() {

  const overview = "assets/overview.svg";
  const merchantProfile = "assets/merchant_profile.svg";
  return (
    <div className="sidenav__container">
      <div className="side__nav--content-holder">
        <Button  className="btn__style" name="generate invoice"/>
        <h5>main</h5>
        <div className="sidenav__container--items">
          <SideNavMenu text="Overview" src={overview} />
        </div>

        <div className="sidenav__container--items2">
          <h5>payments</h5>
            {items.topSideNavItems.map((item: IItemProps, index: number)=>(
              <SideNavMenu text={item.text} src={item.icon} key={index}/>
            ))}
        </div>

        <div className="sidenav__container--items3">
          <h5>order</h5>
            {items.bottomSideNavItems.map((item: IItemProps, index: number)=>(
              <SideNavMenu text={item.text} src={item.icon} key={index}/>
            ))}
        </div>

        <div className="merchant">
          <SideNavMenu text="Merchant Profile" src={merchantProfile}/>
        </div>
      </div>
    </div>
  )
}
