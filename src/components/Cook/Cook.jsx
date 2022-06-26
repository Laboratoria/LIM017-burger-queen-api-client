import { NavCook } from '../NavCook/NavCook';
import { OrderCard } from '../OrderCard/OrderCard';
import './style.css'

export const Cook = () =>{
  return(
    <div className= 'cookContainer'>
      <p className="cookTitle">Ordenes</p>
      <NavCook></NavCook>
      <div className='cardContainer'>
      <OrderCard></OrderCard>
      <OrderCard></OrderCard>
      <OrderCard></OrderCard>
      </div>
    </div>
  )
};