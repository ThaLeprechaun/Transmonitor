import React from 'react';

import Card from '../../Components/Card/Card';
import { items } from '../../data/sideNavItem';
import './main.css';

export default function Transactions() {
  const smallCard = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "253px",
    height: "75px",
    backgroundColor: "#fff",
    border: "1px solid #EEF8FD",
    borderRadius: "2px"
  }
  return (
    <div className="trans__container">
      {items.transactions.map((item, index)=>(
        <Card heading={item.transHeader} value={item.transValue} key={index} style={smallCard} />
      ))}
    </div>
  )
}
