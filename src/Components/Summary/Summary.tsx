import React from 'react';

import './summary.css';

export default function Summary() {
  return (
    <div className="orderpay__container">
      <div className="order__container">
        <div className="order__head">Orders</div>
        <div className="progress mb-3 mt-3" style={{backgroundColor: "#FDC203", height: "4px"}}>
          <div className="progress-bar bg-success" role="progressbar" style={{width: `80%`}}></div>
        </div>
        <div className="order__pending mb-3">pending orders: <span className="yellow__text ml-3">20</span></div>
        <div className="order__pending mb-3">Reconciled Order: <span className="green__text ml-3">80</span></div>
        <div className="order__pending mb-3">Total Orders: <span className="blue__text ml-3">100</span></div>
      </div>
      <div className="order__container">
        <div className="order__head">Payments</div>
        <div className="progress mb-3 mt-3" style={{backgroundColor: "#FDC203", height: "4px"}}>
          <div className="progress-bar bg-success" role="progressbar" style={{width: `80%`}}></div>
        </div>
        <div className="order__pending mb-3">Un-Reconciled Payments: <span className="yellow__text ml-3">20</span></div>
        <div className="order__pending mb-3">Reconciled Payements: <span className="green__text ml-3">80</span></div>
        <div className="order__pending mb-3">Total Payments: <span className="blue__text ml-3">100</span></div>
      </div>
  </div>
  )
}
