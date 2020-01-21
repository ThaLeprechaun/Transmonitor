import React from 'react';

import './chart.css';

export default function Chart() {
  return (
    <div className="chart__container">
      <div className="chart__header">
        <div className="chart__date">Today: 5, Aug 2018</div>
        <div className="chart__details">
          <div className="chart_selects">
            <select id=""  className="mr-3">
              <option value="1 Jan - 1 Jun">
                1 Jan - 1 Jun
              </option>
            </select>
            <span className="ml-3">
              <button className="chart__btn">
                <img src="assets/Left_Button.svg" alt="leftarrow" />
              </button>
              <button className="chart__btn">
                <img src="assets/Right_Button.svg" alt="rightarrow" />
              </button>
            </span>
          </div>
        </div>
      </div>

      <div className="chart__content">
        <div className="chart__img--container">
          <img src="assets/big_graph.svg" alt="" className="chart__img"/>
        </div>
        <div className="chart__month">
          <div className="chart__month--info">Jan</div>
          <div className="chart__month--info">Feb</div>
          <div className="chart__month--info">Mar</div>
          <div className="chart__month--info">Apr</div>
          <div className="chart__month--info">May</div>
          <div className="chart__month--info">Jun</div>
        </div>
      </div>
    </div>
  
  )
}
