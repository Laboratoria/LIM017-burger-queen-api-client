import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarWaiter from './components/Navbar-Waiter';

function App() {
  return (
    <>
      <NavbarWaiter />
      <div className='container'>
        <Outlet />
      </div>
    </>
  );
};

export default App;
