import React from 'react'

interface ISearchProps{
  type: string,
  name: string,
  className: string,
  placeholder: string,
}
export default function Search(props: ISearchProps) {
  return (
    <div>
      <input type={props.type} name={props.name} className={props.className} placeholder={props.placeholder}/>
    </div>
  )
}
