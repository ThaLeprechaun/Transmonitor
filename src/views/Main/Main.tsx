import React, { useState, useEffect } from 'react';

import './main.css';
import Transactions from './transactions';
import Chart from '../../Components/Chart/Chart';
import Summary from '../../Components/Summary/Summary';
import Table from '../../Components/Table/Table';
import Search from '../../Components/Search/Search';
import Img from '../../Components/Image/Img';
import Pagination from 'react-js-pagination';

const searchIcon = './assets/search.svg';

export default function Main() {
  const [dataTransactions, setDataTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);

  useEffect(() => {
    async function getData() {
      const res = await fetch("data.json");
      res
      .json()
      .then(res=>{
        setDataTransactions(res.data)
      })
      .catch(err => console.log(err));
    }
    getData();
  }, []);
  
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = dataTransactions.slice(indexOfFirstData, indexOfLastData);

  const paginate = (p: any) => {
    setCurrentPage(p);
  };

  return (
    <div className="main__container">
      <div className="main__container--transactions">
        <Transactions />
      </div>
      <div className="main__container--chart">
        <Chart />
        <Summary />
      </div>
      <div className="heading mt-5 mb-5 payment__header">Payments</div>
      <div className="show-table-details__container">
        <div className="show__number--details">
          <p>Showing</p>
          <select className="select__style--value mb-3">
            <option value="20">10</option>
            <option value="30">20</option>
            <option value="40">30</option>
            <option value="50">40</option>
          </select>
          <p>out of {dataTransactions.length} payments</p>
        </div>
        <div className="nav__search mb-3">
          <Img src={searchIcon} alt="searchIcon" className="search--icon"/>
          <Search type="search" name="search" className="search__field--bottom" placeholder="Search Payments..."/>
        </div>
        <div className="show__status--details">
          <p className="mr-3">Show</p>
          <select className="null select__style mb-3">
            <option value="All">All</option>
            <option value="Reconciled">Reconciled</option>
            <option value="Un-Reconciled">Un-Reconciled</option>
            <option value="Settled">Settled</option>
            <option value="Unsettled">Unsettled</option>
          </select>
        </div>
      </div>
      <Table data={currentData}/>
      <div className="table__summary">
              <div className="shows">Showing {indexOfFirstData + 1} to {indexOfLastData} of {dataTransactions.length} entries</div>
          <div className="pagin">
            <Pagination
              hideFirstLastPages
              activePage={currentPage}
              itemsCountPerPage={dataPerPage}
              pageRangeDisplayed={2}
              prevPageText="Previous"
              nextPageText="Next"
              itemClass="page-item"
              linkClass="page-link"
              totalItemsCount={dataTransactions.length}
              onChange={paginate}
            />
          </div>
        </div>
    </div>
  )
}
