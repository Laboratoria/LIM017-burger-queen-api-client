import axios from 'axios';
import {urlBase} from '../config'


const urlProducts = `${urlBase}/products`

export const createProduct = (data)=>{
  return axios.post(urlProducts, data)
}

export const getProducts = () => {
  return axios.get(urlProducts)
}

export const getProduct = (id) => {
  const urlProduct = `${urlProducts}/${id}`
  return axios.get(urlProduct)
}