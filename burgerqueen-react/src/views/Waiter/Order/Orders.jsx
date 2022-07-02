import style from './Orders.module.css'
import VerticalBar from "./Orders-Components/VerticalBar";
import OrderCard from "./Orders-Components/Card";

const Order = () => {
    return(
        <div className={style.Container}>
            <VerticalBar/>
            <section className={style.SectionCards}>
                <div className={style.Cards}>
                    <OrderCard/>
                    <OrderCard/>
                    <OrderCard/>
                    <OrderCard/>
                    <OrderCard/>
                </div>
            </section>
            
        </div>
    )
}

export default Order