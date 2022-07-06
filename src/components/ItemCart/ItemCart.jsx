import React from "react";
import './style.css';
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Button } from '../Button/Button';

export const ItemCart = ({item}) => {
    const { deleteItemToCart, addItemToCart } = useContext(CartContext);

    const {id} = item;

    return (
    <div className="cartItem">
     <img src={item.image} alt={item.name} />
     <div className="dataContainer">
       <div className="left">
          <p> {item.name} </p>
           <div className="buttons">
               <Button type="submit" onClick={() => {addItemToCart(item)}} className="btn btn-warning btn-sm" name="Agregar" ></Button>
                <Button type="submit" onClick={() => {deleteItemToCart(item)}} className="btn btn-warning btn-sm" name="Eliminar" ></Button>
            </div>
        </div>
        <div className="right">
            <div className="ProductQty">{item.qty}</div>
            <p> Total: ${item.qty * item.price}</p>
        </div>
     </div>  
    </div>
    )
}