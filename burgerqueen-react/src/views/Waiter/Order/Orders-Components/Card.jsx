import style from './Card.module.css';
import CardProduct from './CardProduct';
import CardButton from './CardButton';
function OrderCard(){
    return(
        <article className={style.Card}>
            <div className={style.Card__info}>
                <h4>List of Order</h4>
                <p>Client: Eva Ayllon</p>
                <p>Date: 15/12/30</p>
                <p>Waiter: waiter01</p>
            </div>
            <div className={style.Card__products}>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
            </div>
            <div className={style.Card__button}>
                <CardButton/>
                <p>status: pending</p>
                <p>tiempo de prepaión: -</p>
            </div>
        </article>
    )
}

export default OrderCard