import style from './Card.module.css';
import CardProduct from './CardProduct';
import CardButton from './CardButton';

function OrderCard({client, dataEntry, userId, status, products }){
    return(
        <article className={style.Card}>
            <div className={style.Card__info}>
                <h4>List of Order</h4>
                <p>Client: {client}</p>
                <p>Date: {dataEntry}</p>
                <p>Waiter: {userId}</p>
            </div>
            <div className={style.Card__products}>
                {products.map(item => <CardProduct
                qty={item.qty}
                img={item.product.image}
                name={item.product.name}
                price={item.product.price}/>)}
            </div>
            <div className={style.Card__button}>
                <CardButton/>
                <p>Status: {status}</p>
                <p>tiempo de prepaión: -</p>
            </div>
        </article>
    )
}

export default OrderCard