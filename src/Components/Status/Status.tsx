import React from 'react';

import './status.css';

export default function Status({status}: any) {
  const ellipse =  `assets/ellipse_${status === "reconciled" ? "green" : status === "unreconciled" ? "grey" : "yellow"}.svg`;
  const arrowDown = 'assets/arrow_down.svg';
  return (
    <div className="status__container">
      <div className="color_badge">
        <span className="ml-2 mr-3 mb-1">
          <img src={ellipse} alt="ellipse"/>
        </span>
        <span
          className={`sm_text text_color_${
            status === "reconciled"
              ? "green"
              : status === "unreconciled"
              ? "yellow"
              : "grey"
          }`}
        >
          {status === "reconciled"
            ? "Reconciled"
            : status === "unreconciled"
            ? "Un-reconciled"
            : "Pending"}
        </span>
      </div>
      <div className="arrow">
        <img src={arrowDown} alt="options" />
      </div>
    </div>
  )
}
