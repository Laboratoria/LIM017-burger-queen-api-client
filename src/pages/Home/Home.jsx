import React from 'react';
import { Cart } from '../../components/Cart/Cart';
import { CartProvider } from '../../components/Context/CartContext';
import { Products } from '../../components/Products/Products';
import  './style.css'

export const Home = () => {
  return (
  <CartProvider>

    <div className='HomeContainer'>
     <p className='HomeTitle'>Bienvenido</p>
     <input type='text' placeholder='Nombre del cliente' className='InputNameClient'></input>
     <Cart/>
     <Products />
     
    </div>

    </CartProvider>
  )
}