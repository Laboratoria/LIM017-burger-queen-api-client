import style from './ProductCard.module.css'
function ProductCard({prop}){
    function addProducttoLocalS(){
        localStorage.setItem(`product-${prop.id}`, prop.id)
        return console.log(prop)
    }
    return (
        
        <div className={style.ProductCard}>
            <img src={prop.image} alt='imgProduct'></img>
            <h4>{prop.name}</h4>
            <div>
                <p>$ {prop.price}</p>
                <button onClick={addProducttoLocalS}>Add</button>
            </div>
        </div>
        
    )
};
export default ProductCard;