import './Home.css';
import CupOfCofee from '../../Images/Cup-of-cofee.svg';
import burger from '../../Images/burger-lunch.svg';
import burgerToSelect from '../../Images/burgertoselect.svg'
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ListOfOrder from './ListOfOrder';

const Home = () => {
    const [ products, setProducts ] = useState();

    const token = localStorage.getItem('accessToken');
    // const productInLS = localStorage.getItem('product-1')

    const getProducts = () => fetch('http://localhost:8080/products', {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "authorization": `Bearer ${token}`
            }
            })
        .then(response => response.json()) 
        .then(json => setProducts(json))
        .catch(err => console.log(err));

    useEffect(()=>{
        getProducts();
        
    }, [])

    return(
        <div className='Home'>
            <section className="section__chooseMenu">
                <div className='div__buttons'>
                    <div>
                        <button>
                            <p>Breakfasts</p>  
                            <img src={CupOfCofee} className='img-menu' alt='Cup of cofee'/>
                        </button>
                    </div>
                    <div >
                        <button>
                            <p>Lunches</p> 
                            <img src={burger} className='img-menu' alt='burger-lunch'/>
                        </button>
                        
                    </div>
                </div>
                           
                <div className="products">
                    <div className="choose-by-type">
                        <div>
                            <img src={burgerToSelect} alt='burger'></img>
                            Burgers
                            <i className="fa-solid fa-circle-play iconHomeView"></i>
                        </div>
                        <div>
                        <img src={burgerToSelect} alt='burger'></img>
                            Extra
                            <i className="fa-solid fa-circle-play iconHomeView"></i>
                        </div>
                        <div>
                        <img src={burgerToSelect} alt='burger'></img>
                            Drinks
                            <i className="fa-solid fa-circle-play iconHomeView"></i>
                        </div>
                    </div> 
                    <div className="list-of-Products">
                        <div>
                        {console.log(products)}
                        {!products ? 'Cargando...' : 
                        products.map((product) => {
                            return  <ProductCard 
                                key={product.id}
                                prop={product} /> 
                                })}
                        </div>
                    </div>
                </div>
            </section>
            <section className="section__makeOrder">
                <div  className="listOfOrder">
                    lista de ordenes
                    {/* { productInLS ? <ListOfOrder/> : 'nada'} */}
                    <ListOfOrder/>
                </div>
            </section>
        </div>
    )
}

export default Home