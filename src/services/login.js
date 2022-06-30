import axios from 'axios';
import {urlBaseAuth} from '../config'

const urlLogin = `${urlBaseAuth}/login`

export const login = (email, password) => {
  const data = {
    email: email,
    password: password
  }
  return axios.post(urlLogin, data)
}