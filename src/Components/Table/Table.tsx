import React from 'react'

import './table.css';
import Status from '../Status/Status';


interface ITableProps {
  data: {
    itemType: string,
    price: string,
    transactionNo: string,
    time: string,
    status: string
  }
}
interface ITableState {
  data: Array<ITableProps>
}

interface ITableComponentProps extends ITableState{
  loading?: HTMLDivElement
  error?: HTMLDivElement
}

export default function Table({loading, error, data}: ITableComponentProps) {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <table style={{width: "100%"}}>
      <thead>
        <tr>
        <th>Item Type</th>
        <th>Price</th>
        <th>Transaction No</th>
        <th>Time</th>
        <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: any) => (
          <tr>
            <td>
              <span className="mr-4">
                <img src="assets/vw_symbol.svg" alt="avatar" />
              </span>
              {item.itemType}
            </td>
          <td data-column="Price">{item.price}</td>
          <td data-column="Transaction No">{item.transactionNo}</td>
          <td data-column="time">{item.time}</td>
          <td data-column="Status">
             <Status status={item.status}/>
          </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
