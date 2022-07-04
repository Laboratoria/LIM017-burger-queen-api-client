// import product from '../../../Images/burger-lunch.svg';
import style from './CardProduct.module.css'
function CardProduct({img, name, qty, price}){
    return(
        <div className={style.CardProduct}>
            <img src={img} alt={name} className={style.CardProduct__img}></img>
            <section className={style.CardProduct__text}>
                <p className={style.CardProduct__text_name}>{name}</p>
                <p className={style.CardProduct__text_portions}>{qty}</p>
                <p>Total: {price * qty}</p>
            </section>
        </div>
    )
};

export default CardProduct;