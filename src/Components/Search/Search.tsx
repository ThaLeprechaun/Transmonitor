import React from 'react'

export default function Search(props: any) {
  return (
    <div>
      <input type={props.type} name={props.name} className={props.className} placeholder={props.placeholder}/>
    </div>
  )
}
