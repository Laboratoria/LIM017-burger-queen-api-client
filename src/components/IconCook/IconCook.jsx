// import Image from './image/listaBQ.jpg';
import './style.css';
import { OrderCount } from "../OrderCount/OrderCount";

export const IconCook = (props) =>{

  const {image='../img/listaBQ.jpg', name='Lista', title='Por preparar' } = props;

  return(
    <div className='IconCookContainer'>
      <div className='IconContainer'>
        <img className="Icon" src={props.image} alt={props.name}></img>
        <p className='IconCookTitle'>{props.title}</p>
        <div className='indicator'></div>
      </div>
      <div>
        <OrderCount></OrderCount>
      </div>
    </div>
  )
}