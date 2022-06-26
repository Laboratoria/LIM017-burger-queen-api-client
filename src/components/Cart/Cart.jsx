import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { CartContext } from '../Context/CartContext';
import {ItemCart} from '../ItemCart/ItemCart'
import style from './style.css'

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
  return(
  <div className={style.cartContainer}>
    <div onClick={() => {
       setCartOpen(!cartOpen);
    }}
    className={style.buttonCartContainer}
    >
      <div className={style.buttonCart}>
        {/* {!cartOpen ? (
          console.log('aqui')
          ) : (
            console.log('o si no')
          )} */}
        {!cartOpen && <div className={style.productsNumber}>{productsLength}</div>}
      </div>

    {cartItems && cartOpen && (
     <div className={style.cart}>
      <h2> Tu carrito </h2>

      {
        cartItems.length === 0 ?
        (<p className={style.cartVacio}> Tu carrito esta vacio </p>) :
        (<div className={style.productsContainer}> 
          {cartItems.map((item, i) => (
           <ItemCart key={i} item={item} />
          ))}
         </div>)
      }

      <h2 className={style.total}> Total: $ {total} </h2>
     </div>
    )}
  </div>
</div>
)

};