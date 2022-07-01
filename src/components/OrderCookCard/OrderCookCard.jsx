import './style.css';
import { Button } from '../../components/Button/Button';
import { createOrder } from '../../services/orders';

export const CookCard = ({orderLines}) =>{

  createOrder()
    .then()
    .catch()

  return(
    <div className="CookCardContainer">
     <table className='Table'>
      <thead>
        <tr className='CardTitle'>
          <th>Producto</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      {orderLines && orderLines.map((orderLine)=>{
        return (
          <tbody key={orderLine.product.id}>
            <tr >
              <td className='RowItem'>{orderLine.product.name}</td>
              <td className='RowQty'>{orderLine.qty}</td>
            </tr>
          </tbody>
        )
       })}
     </table>
     <Button type="submit"  className="btn btn-warning btn-lg" name="Preparado" ></Button>
    </div>
  )
}