import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import style from './style.css';

export const ItemCart = ({item}) => {
    const { deleteItemToCart, addItemToCart } = useContext(CartContext);

    const {id} = item;

    return (
    <div className={style.cartItem}>
     <img src={item.image} alt={item.name} />
     <div className={style.dataContainer}>
       <div className={style.left}>
          <p> {item.name} </p>
           <div className={style.buttons}>
               <button onClick={() => {addItemToCart(item)}}> Agregar </button>
                <button onClick={() => {deleteItemToCart(item)}}> Sacar </button>
            </div>
        </div>
        <div className={style.right}>
            <div>{item.amount}</div>
            <p> Total: ${item.amount * item.price}</p>
        </div>
     </div>  
    </div>
    )
}