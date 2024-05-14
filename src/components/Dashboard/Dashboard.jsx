import React from 'react';
import Cards from '../Cards/Cards';
import './Dashboard.css';
import Table from '../Table/Table';

function Dashboard() {
  return (
    <div className='MainDash'>
      <Cards/>
      <Table/>
    </div>
  )
}

export default Dashboard