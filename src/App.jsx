
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Onboarding } from './pages/Onboarding/Onboarding';
import { Orders } from './pages/Orders/Orders';
import { Order } from './pages/Order/Order';


function App() {
 return (
  <BrowserRouter>
    <Routes>

      <Route path='/' element={<Onboarding/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/> 
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/order/:id' element={<Order/>}/> 

    </Routes>
  </BrowserRouter>
 )
}

export default App
