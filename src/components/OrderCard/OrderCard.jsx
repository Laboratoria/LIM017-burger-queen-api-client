import {useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button';
import './style.css';


export const OrderCard = () =>{
  
  const navigate = useNavigate()
  
  const onSubmitHandler = () =>{
    // console.log('Hola soy una orden');
    navigate('/Order')
  }

  return(
      <div className="OrderCardContainer">
        <p className="OrderTitle">Mesa 3</p>
        <Button onClick={onSubmitHandler} type='submit' className="btn btn-warning btn-sm" name="Tomar Pedido">Tomar Pedido</Button>
    </div>
  )
}