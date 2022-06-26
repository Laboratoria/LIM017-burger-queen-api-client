import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import style from './style.css'
import { getProducts } from '../../services/products'

export const Products = () => {
  const {addItemToCart} = useContext(CartContext)
  const [products, setProducts] = useState([])

  useEffect(()=>{
    console.log('Use Effect')
    getProducts()
      .then((response)=>{
        setProducts(response.data)
      })
      .catch((err)=> console.log(err))
  }, [])


  return (
  <div className={style.productsContainer}>
   {products.map((product, i) => (
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