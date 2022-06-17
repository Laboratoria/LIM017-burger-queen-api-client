import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Routes
} from "react-router-dom";
// **
// import logo from './logo.svg';
// import './App.css';
import Inicio from './components/Inicio.jsx';
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
// import Parametros from './components/Parametros';
// import User from './components/User';

function App() {
  return (
    <Router>
      <div className='container mt-5'>
        <div className='btn-group'> 
          <Link to="/" className='btn btn-dark'>INICIO</Link>
          <Link to="/Login" className='btn btn-dark'>LOGIN</Link>
          <Link to="/Home" className='btn btn-dark'>HOME</Link>
        </div>
        <hr />
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/' element={<Inicio/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
