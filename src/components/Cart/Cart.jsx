import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createOrder } from '../../services/orders';
import { CartContext } from '../Context/CartContext';
import {ItemCart} from '../ItemCart/ItemCart'
import  './style.css';
import { Button } from '../Button/Button';

export const Cart= () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [productsLength, setProductsLength] = useState(0);

  const {cartItems} = useContext(CartContext);

  useEffect(() => {
    setProductsLength(
      cartItems.reduce((previous, current) => previous + current.qty, 0)
    );
  }, [cartItems]);
  
  const total = cartItems.reduce(
    (previous, current) => previous + current.qty * current.price,
    0
  );
    const data = {
      userId: 1,
      client: "",
      products: [
        {
          productId: 1,
          qty: 2
        },
        {
          productId: 2,
          qty: 6
        }
      ]
    }
    createOrder(data).then().catch()
    
  return(
  <div className="cartContainer">
    <div onClick={() => {setCartOpen(!cartOpen);}} className="buttonCartContainer">
      <div className="buttonCart">{!cartOpen && <div className="productsNumber">{productsLength}</div>}</div>
    </div>

    {cartItems && cartOpen && (
     <div className="cart">
      <h2> Tu Orden </h2>

      {
        cartItems.length === 0 ?
        (<p className="cartVacio"> Tu carrito esta vacio </p>) :
        (<div className="productsCartContainer"> 
          {cartItems.map((item, i) => (
           <ItemCart key={i} item={item} />
          ))}
         </div>)
      }

      <h2 className="total"> Total: $ {total} </h2>
      <Button type="submit" onClick={() => navigate('/login')} className="btn btn-warning btn-lg" name="Enviar Orden" ></Button>
     </div>
    )}
  </div>
)

};