import axios from 'axios';
import {urlBase} from '../config'

const urlUsers = `${urlBase}/users`

export const getUsers = () =>{
  return axios.get(urlUsers)
}

export const getUser = (email) => {
  const urlUser = `${urlUsers}/${email}`
  return axios.get(urlUser)
}
