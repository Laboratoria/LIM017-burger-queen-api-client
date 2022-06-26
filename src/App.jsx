
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import {Home} from './pages/Home/Home';
import {Login} from './pages/Login/Login';
import {Onboarding} from './pages/Onboarding/Onboarding';
import {Cook} from './pages/Cook/Cook';
import { OrderCook } from './pages/OrderCook/OrderCook';


function App() {
 return (
  <BrowserRouter>
    <Routes>

      <Route path='/' element={<Onboarding/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/> 
      <Route path='/cook' element={<Cook/>}/>
      <Route path='/order/:id' element={<OrderCook/>}/> 

    </Routes>
  </BrowserRouter>
 )
}

export default App
