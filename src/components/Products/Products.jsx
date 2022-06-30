import React from 'react';
import './style.css';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../Context/CartContext';
import { getProducts } from '../../services/products';
import { Button } from '../Button/Button';

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
  <div className="productsContainer">
   {products.map((product, i) => (
   <div key={i} className="product">
    <img src={product.image} alt={product.name}/>
    <div>
      <p>
        {product.name} - ${product.price}
      </p>
    </div>
    {/* <button onClick={() => addItemToCart(product)}> Agregar al carrito </button> */}
    <Button type="submit" onClick={() => addItemToCart(product)} className="btn btn-warning btn-sm" name="Agregar" ></Button>
    </div>
    ))}
  </div>
  )
}