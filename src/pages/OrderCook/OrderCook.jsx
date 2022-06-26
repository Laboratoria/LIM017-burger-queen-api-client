import { CookCard } from "../../components/OrderCookCard/OrderCookCard";
import './style.css'
import {
  useParams
} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getOrder } from "../../services/orders";
export const OrderCook = ()=>{
  const {id} = useParams()
  const [order, setOrder] = useState({})
  useEffect(()=>{
    getOrder(id)
      .then(response => {
        setOrder(response.data)
      })
      .catch(err => console.log(err))
  }, [])
  return(
    <div className="OrderCookContainer">
      <p className="OrderTableTitle">#{order.id}</p>
      <div className="OrderInfContainer">
        <div className="OrderInf">
          <label htmlFor="" className="label">Cliente:</label>
          <input type="text" className="input"/>
        </div>
        <div className="OrderInf">
          <label htmlFor="" className="label">Orden:</label>
          <input type="text" className="input"/>
        </div>
        <div className="OrderInf">
          <label htmlFor="" className="label">Hora:</label>
          <input type="text" className="input"/>
        </div>
      </div>
      <CookCard></CookCard>
    </div>
    
  )
}