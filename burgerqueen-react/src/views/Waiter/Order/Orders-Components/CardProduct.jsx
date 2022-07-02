import product from '../../../Images/burger-lunch.svg';
import style from './CardProduct.module.css'
function CardProduct(){
    return(
        <div className={style.CardProduct}>
            <img src={product} alt='product' className={style.CardProduct__img}></img>
            <section className={style.CardProduct__text}>
                <p className={style.CardProduct__text_name}>Chipotle Burger chip</p>
                <p className={style.CardProduct__text_portions}>3 porciones</p>
                <p>Total: $62.85</p>
            </section>
        </div>
    )
};

export default CardProduct;