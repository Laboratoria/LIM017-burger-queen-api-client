
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import {Navbar} from '../src/components/Navbar/Navbar'
import {Home} from './components/Home/Home'
import {Login} from './components/Login/Login'
import {Onboarding} from './components/Onboarding/Onboarding'

function App() {
 return (
  <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Onboarding/>}/>
      <Route path='/login' element={<Login/>}/> */}
      <Route path='/Navbar' element={<Navbar/>}/>
      <Route path='/' element={<Onboarding/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/> 
    </Routes>
  </BrowserRouter>
 )
}

export default App
