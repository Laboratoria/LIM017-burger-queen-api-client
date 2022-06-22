
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import {Login} from './components/Login'
import {Onboarding} from './components/Onboarding'
import {Navbar} from '../src/components/Navbar/Navbar'

function App() {
 return (
  <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Onboarding/>}/>
      <Route path='/login' element={<Login/>}/> */}
      <Route path='/Navbar' element={<Navbar/>}/>
    </Routes>
  </BrowserRouter>
 )
}

export default App
