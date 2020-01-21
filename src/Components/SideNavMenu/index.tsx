import React from 'react';

interface ISideProps {
  className?: string;
  src: string;
  alt?: string;
  text: string;
  key?: number;
  link?: string;
  linkitem?: string;
  overlay?: string;
}

export default function SideNavMenu(props: ISideProps) {
  return (
    <div className="sidenav__content">
      <img src={props.src} alt={props.alt} className="img__margin" />
      <span>{props.text}</span>
    </div>
  )
}
