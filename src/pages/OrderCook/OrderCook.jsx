import { CookCard } from "../../components/OrderCookCard/OrderCookCard";
import './style.css'

export const OrderCook = ()=>{
  return(
    <div className="OrderCookContainer">
      <p className="OrderTableTitle">Mesa 4</p>
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