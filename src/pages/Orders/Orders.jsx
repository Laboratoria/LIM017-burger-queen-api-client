import { useEffect, useState } from 'react';
import { NavCook } from '../../components/NavCook/NavCook';
import { OrderCard } from '../../components/OrderCard/OrderCard';
import { getOrders } from '../../services/orders';
import './style.css'

export const Orders = () =>{
  const [orders, setOrders] = useState([])
  useEffect(()=>{
    getOrders()
      .then(response => setOrders(response.data))
      .catch(err => console.log(err))
  }, [])
  return(
    <div className= 'cookContainer'>
      <p className="cookTitle">Ordenes</p>
      <NavCook></NavCook>
      <div className='cardContainer'>
        {orders && orders.map(order => {
          return (<OrderCard order={order} key={order.id}></OrderCard>)
        })}
      </div>
    </div>
  )
};