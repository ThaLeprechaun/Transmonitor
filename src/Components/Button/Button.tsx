import React from 'react';

import './btn.css'

interface IBtnProps{
  className: string;
  name: string;
}

export default function Button(props: IBtnProps) {
  return (
    <div>
      <button className={props.className}>{props.name}</button>
    </div>
  )
}
