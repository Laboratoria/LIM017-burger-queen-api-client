import { useState } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import {Login} from './components/Login'
import {Onboarding} from './components/Onboarding'

function App() {
 return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Onboarding/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  </BrowserRouter>
 )
}

export default App
