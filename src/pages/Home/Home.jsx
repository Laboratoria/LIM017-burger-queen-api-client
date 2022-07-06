import React from 'react';
import { Cart } from '../../components/Cart/Cart';
import { CartProvider } from '../../components/Context/CartContext';
import { Products } from '../../components/Products/Products';
import { NameClient } from '../../components/Form/Client';
import  './style.css'

export const Home = () => {
  return (
  <CartProvider>

    <div className='HomeContainer'>
     <NameClient />
     {/* <Cart/>
     <Products /> */}
     
    </div>

    </CartProvider>
  )
}