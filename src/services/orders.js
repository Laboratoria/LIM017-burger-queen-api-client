import axios from 'axios';
// import {urlBase} from '../config'

// const urlOrders = `${urlBase}/orders`
let url="http://localhost:5000/orders";

export const createOrder = (url, data)=>{
  return axios.post(url, data)
}

export const getOrders = () => {
  return axios.get(url)
}

export const getOrder = (id) => {
  const urlOrder = `${url}/${id}`
  return axios.get(urlOrder)
}

export const putOrder =(id, data) =>{
  const urlOrder = `${url}/${id}`
  return axios.put(urlOrder, data)
}