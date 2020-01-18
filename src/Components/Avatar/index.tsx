import React from 'react';

import Img from '../Image/Img';
import './avi.css';

export default function Avatar() {
  const avatar = 'assets/oluwaleke.svg';
  return (
    <div className="avatar__container">
      <div className="avatar__details">
        <div className="avatar__details--hello">Hello</div>
        <div className="avatar__details--name">Oluwaleke Ojo</div>
      </div>
      <div className="avatar__image">
        <Img src={avatar} alt="avatar"/>
      </div>
    </div>
  )
}
