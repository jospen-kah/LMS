import React from 'react';
import { Outlet } from 'react-router';
import DashboardNav from './DashboardNav';
import './DashboardLayout.css';

function DashboardLayout() {
  return (
    <div className='dashboard-content'>
      <DashboardNav />
      <div>
        < Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout
