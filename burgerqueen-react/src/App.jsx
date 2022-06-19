import React from 'react';
import { Outlet } from 'react-router-dom';
import navbarWaiter from './components/Navbar-Waiter';

function App() {
  return (
    <>
      <navbarWaiter />
      <div className='container'>
        <Outlet />
      </div>
    </>
  );
};

export default App;
