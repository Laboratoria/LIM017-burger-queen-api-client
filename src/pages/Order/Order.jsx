import { CookCard } from "../../components/OrderCookCard/OrderCookCard";
import './style.css'
import {
  useParams
} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getOrder } from "../../services/orders";

export const Order = ()=>{
  const {id} = useParams()
  const [order, setOrder] = useState({})
  useEffect(()=>{
    getOrder(id)
      .then(response => {
        setOrder(response.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (order) &&
    (<div className="OrderCookContainer">
      <p className="OrderTableTitle">Orden #{order.id}</p>
      <div className="OrderInfContainer">
        <div className="OrderInf">
          <h4 className="Order">Cliente: <small>{order.client}</small></h4>
        </div>
        <div className="OrderInf">
          <h5 h4 className="Order">Hora: <small>{order.dataEntry}</small></h5>
        </div>
      </div>
      <CookCard orderLines={order.products}></CookCard>
    </div>)

}