import React from 'react';

interface IImgProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function Img(props: IImgProps) {
  return (
    <img src={props.src} alt={props.alt} className={props.className} />
  )
}
