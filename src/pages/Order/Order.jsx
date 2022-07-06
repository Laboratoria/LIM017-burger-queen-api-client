import { CookCard } from "../../components/OrderCookCard/OrderCookCard";
import './style.css'
import {
  useParams
} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getOrder, putOrder } from "../../services/orders";
import Image from '../../img/arrow.png';
import {useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';


export const Order = ()=>{

  
 
  const navigate = useNavigate();

  const {id} = useParams()
  const [order, setOrder] = useState({})
  const [status, setStatus] = useState('Pendiente');
  useEffect(()=>{
    getOrder(id)
      .then(response => {
        setOrder(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  const onSubmithandler = () =>{
    const orderUpdate = {
      status: status,
    }
    putOrder(order.id)
      .then(response => {
        setOrder(response.data)
      })
      .catch((err) =>{
        console.log(err)
      })
  }
  const captureStatus = (e) =>{
    setStatus(e.target.value)
  };

  return (order) &&
    (<div className="OrderCookContainer">
      <div className="OrderCookNav">
      <p className="OrderTableTitle">Orden #{order.id}</p>
      <div onClick={() => navigate('/orders')}><img  className='OrderImgBack' src={Image}></img></div>
      </div>
      <div className="OrderInfContainer">
        <div className="OrderInf">
          <h4 className="Order">Cliente: <small>{order.client}</small></h4>
        </div>
        <div className="OrderInf">
          <h5 h4 className="Order">Hora: <small>{order.dataEntry}</small></h5>
        </div>
      </div>
      <CookCard orderLines={order.products}></CookCard>
      <select className="form-select" aria-label="Default select example" onChange={captureStatus}>
        <option selected>Pendiente</option>
        <option value='Preparando'>Preparando</option>
        <option value='Preparado'>Preparado</option>
        <option value='Cancelado'>Cancelado</option>
      </select>
      <Button type="submit" onClick={onSubmithandler} className="btn btn-warning btn-lg btn-status" name="Actualizar" ></Button>
    </div>)

}