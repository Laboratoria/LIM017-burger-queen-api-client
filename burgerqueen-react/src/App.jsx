import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarWaiter from './views/Waiter/components/Navbar-Waiter';
import './App.css'
import logowaiter from './views/newDir/logowaiter.svg';

// Controles para Waiter: barra de navegación para todas las vistas de este usuario

function AppWaiter() {
  return (
    <>
      <header>
        <div className='logoName'>
          <img src={logowaiter} className="logowaiter" alt="logo" />
          <h3>Burger Restaurant</h3>
        </div>
        <NavbarWaiter/>
      </header>
      <main className='main-container'>
        <Outlet />
      </main>
    </>
  );
};
export default AppWaiter;
