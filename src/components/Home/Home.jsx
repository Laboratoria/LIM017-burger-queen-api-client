import React from 'react';
import { Cart } from '../Cart/Cart';
import { CartProvider } from '../Context/CartContext';
import { Products } from '../Products/Products';
import style from './style.css'

export const Home = () => {
  return (
  <CartProvider>

    <div className={style.home}>
  
     <Cart/>
     <Products />
     
    </div>

    </CartProvider>
  )
}