import React from 'react';
import { Cart } from '../../components/Cart/Cart';
import { CartProvider } from '../../components/Context/CartContext';
import { Products } from '../../components/Products/Products';
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