import {useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button';
import { useState } from "react";
import './style.css';


export const OrderCard = ({order}) =>{

  const [status, setStatus] = useState([
    'pending',
    'canceled',
    'delivering',
    'delivered',
  ])
  
  const navigate = useNavigate()
  
  const onSubmitHandler = () =>{
    // console.log('Hola soy una orden');
    navigate(`/order/${order.id}`)
  }
  
  return(
      <div className="OrderCardContainer">
        <p className="OrderTitle">#{order.id}</p>
        <Button onClick={onSubmitHandler} type='submit' className="btn btn-warning btn-sm" name="Ver Pedido">Ver Pedido</Button>
        <div 
          className={`State ${order.status}`}> 
          {order.status}
        </div>
    </div>
  )
}