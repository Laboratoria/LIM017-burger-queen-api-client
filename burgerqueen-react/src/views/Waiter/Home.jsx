import './Home.css';
import CupOfCofee from '../newDir/Cup-of-cofee.svg';
import burger from '../newDir/burger-lunch.svg';
import burgerToSelect from '../newDir/burgertoselect.svg'
import { useState, useEffect } from 'react';


const Home = () => {
    const [ products, setProducts ] = useState();
    const promesa = () => fetch('http://localhost:8080/products', {
            method: "GET",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuaXRhLmJvcmdAc3lzdGVycy54eXoiLCJpYXQiOjE2NTY0MjMyOTEsImV4cCI6MTY1NjQyNjg5MSwic3ViIjoiMSJ9.NuesG4anPeyMIFwzKEv0E2fjivJcWPt-PWVop-2ZC4w'}
            })
        .then(response => response.json()) 
        .then(json => setProducts(json))
        .catch(err => console.log(err));

    useEffect(()=>{

        promesa();

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
                    <div className="lit-of-Products">
                        List Products
                        {!products ? 'Cargando' : 
                        products.map((product) => {
                            return  <div key={product.id}>
                                        <p>{product.name}</p>
                                        {/* <img src={product.image} alt="01" /> */}
                                    </div>})}
                        
                    </div>
                </div>
            </section>
            <section className="section__makeOrder">
                <div  className="listOfOrder">
                    lista de ordenes
                </div>
            </section>
        </div>
    )
}

export default Home