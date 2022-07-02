import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './views/components/Navbar';
import './App.css'
import logowaiter from './views/Images/logowaiter.svg';

// Controles para Waiter: barra de navegación para todas las vistas de este usuario

export function AppWaiter() {
  return (
    <>
      <header>
        <div className='logoName'>
          <img src={logowaiter} className="logowaiter" alt="logo"/>
          <h3>Burger Restaurant</h3>
        </div>
        <Navbar 
          icon0 ='fa-solid fa-house' ref0='/Waiter' name0='HOME' 
          icon1 = 'fa-solid fa-list-check' ref1='/Waiter/Orders' name1='ORDERS' 
          icon2 = 'fa-solid fa-user' ref2='/Waiter/Profile' name2='PROFILE'
        />
      </header>
      <main className='main-container'>
        <Outlet />
      </main>
    </>
  );
};

// Controles para Admin: barra de navegación para todas las vistas de este usuario

export function AppAdmin() {
  return (
    <>
      <header>
        <div className='logoName'>
        <img src={logowaiter} className="logowaiter" alt="logo"/>
          <h3>Burger Restaurant</h3>
        </div>
        <Navbar 
          icon0 ='fa-solid fa-burger' ref0='/Admin' name0='PRODUCTS' 
          icon1 = 'fa-solid fa-users' ref1='/Admin/Users' name1='USERS'  
          icon2 = 'fa-solid fa-user' ref2='/Admin/ProfileAdmin' name2='PROFILE' 
        />
      </header>
      <main className='main-container'>
        <Outlet />
      </main>
    </>
  );
};
