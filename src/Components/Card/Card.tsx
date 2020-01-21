import React from 'react'

export default function Card(props: any) {
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
