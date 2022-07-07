import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createOrder } from '../../services/orders';
import { CartContext } from '../Context/CartContext';
import {ItemCart} from '../ItemCart/ItemCart'
import  './style.css';
import { Button } from '../Button/Button';

export const Cart= (props) => {
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

  const handleOrders = (e) =>{
    let url = "http://localhost:5000/orders";
    const data = {
      client: props.name,
      products:cartItems,
      status: "pending"

    };

    createOrder(url, data).then((res)=> console.log(res)).catch((error)=> console.log(error))
  }

//   const handleReset = (e) => {
  
//  }

  return(
  <div className="cartContainer">
    <div onClick={() => {setCartOpen(!cartOpen);}} className="buttonCartContainer">
      <div className="buttonCart">{!cartOpen && <div className="productsNumber">{productsLength}</div>}</div>
    </div>

    {cartItems && cartOpen && (
     <div className="cart">
      <h2> Orden </h2>
      <h3>Cliente: {props.name } </h3>

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
      <Button type="submit" onClick={handleOrders} className="btn btn-warning btn-lg" name="Enviar Orden" ></Button>
      {/* <Button type="reset" onClick={handleReset} className="btn btn-warning btn-lg" name="Limpiar" ></Button> */}
     </div>
    )}
  </div>
)

};