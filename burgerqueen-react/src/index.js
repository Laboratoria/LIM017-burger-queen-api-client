import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './views/Inicio'
import Login from './views/Login'
import App from './App';
import Profile from './views/Waiter/Profile';
import Order from "./views/Waiter/Order";
import Home from "./views/Waiter/Home";
import PageNotFound from "./views/Waiter/PageNotFound";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
     <App />
   </React.StrictMode>
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio />}></Route>
      <Route path='/Login' element={<Login />}></Route>
      <Route path='/Waiter/' element={<App />}>
        <Route index element={<Home/>}/>
        <Route path='Profile' element={<Profile />}/>
        <Route path='Order' element={<Order />}/>
        <Route path='*' element={<PageNotFound />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  //document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
