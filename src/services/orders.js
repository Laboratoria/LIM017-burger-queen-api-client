import axios from 'axios';
// import {urlBase} from '../config'

// const urlOrders = `${urlBase}/orders`

export const createOrder = (url, data)=>{
  return axios.post(url, data)
}

export const getOrders = () => {
  return axios.get(urlOrders)
}

export const getOrder = (id) => {
  const urlOrder = `${urlOrders}/${id}`
  return axios.get(urlOrder)
}