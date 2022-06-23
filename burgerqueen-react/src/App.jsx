import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarWaiter from './views/Waiter/components/Navbar-Waiter';
import './App.css'

// Controles para Waiter: barra de navegación para todas las vistas de este usuario

function App() {
  return (
    <>
      <header>
        <div className='logoName'>
          <img src="" alt="" />
          <h2>Burger Restaurant</h2>
        </div>
        <NavbarWaiter/>
      </header>
      <main className='main-container'>
        <Outlet />
      </main>
    </>
  );
};
export default App;
