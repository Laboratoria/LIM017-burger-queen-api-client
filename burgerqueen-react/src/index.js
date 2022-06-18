import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Inicio from './views/Inicio';
import Login from "./views/Login";
import Home from "./views/Home";
import PageNotFound from "./views/PageNotFound";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
     <App />
   </React.StrictMode>
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Inicio/>}/>
        <Route path='Home' element={<Home />}/>
        <Route path='Login' element={<Login />}/>
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
