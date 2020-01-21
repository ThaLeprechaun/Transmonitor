import React from 'react'

interface ICardProps {
  heading: string,
  value: string
}

export default function Card(props: ICardProps) {
  return (
    <div className="card__container">
      <div className="card__container--details">
        <div className="card__header">{props.heading}</div>
        <div className="card__value">{props.value}</div>
      </div>
      <div className="small__chart">
        <img src="assets/small_chart.svg" alt="chart" />
      </div>
    </div>
  )
}
