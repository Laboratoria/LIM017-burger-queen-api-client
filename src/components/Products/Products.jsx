import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import {ProductsData} from '../Data/ProductsData'
import style from './style.css'

export const Products = () => {
  const {addItemToCart} = useContext(CartContext)

  return (
  <div className={style.productsContainer}>
   {ProductsData.map((product, i) => (
   <div key={i} className={style.product}>
    <img src={product.image} alt={product.name}/>
    <div>
      <p>
        {product.name} - ${product.price}
      </p>
    </div>
    <button onClick={() => addItemToCart(product)}> Agregar al carrito </button>
    </div>
    ))}
  </div>
  )
}