import style from './ProductCard.module.css'
function ProductCard({product, addProductsSelected}){

    return (
        
        <div className={style.ProductCard}>
            <img src={product.image} alt='imgProduct'></img>
            <h4>{product.name}</h4>
            <div>
                <p>$ {product.price}</p>
                <button onClick={(event) => addProductsSelected(event, product)}>Add</button>
            </div>
        </div>
        
    )
};
export default ProductCard;