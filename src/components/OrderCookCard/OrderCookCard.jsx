import './style.css'

export const CookCard = ({orderLines}) =>{
  return(
    <div className="CookCardContainer">
     {/* <p className="ProductTitle">Producto</p>
     <p className="QtyTitle">Cantidad</p> */}

     <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
        </tr>
      </thead>
      {orderLines && orderLines.map((orderLine)=>{
        return (
          <tbody key={orderLine.product.id}>
            <tr>
              <td>{orderLine.product.name}</td>
              <td>{orderLine.qty}</td>
            </tr>
          </tbody>
        )
       })}
     </table>
    </div>
  )
}