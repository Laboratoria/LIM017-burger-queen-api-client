import axios from 'axios';
import {urlBase} from '../config'

const urlLogin = `${urlBase}/login`

export const login = (email, password) => {
  const data = {
    email: email,
    password: password
  }
  return axios.post(urlLogin, data)
}