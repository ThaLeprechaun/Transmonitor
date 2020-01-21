import React from 'react';
import './App.css';
import Navbar from './views/Nav';
import SideNav from './views/SideNav';
import Main from './views/Main/Main';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <SideNav />
          </div>
          <div className="col-lg-10">
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}
