import './Home.css';
import CupOfCofee from '../newDir/Cup-of-cofee.svg';
import burger from '../newDir/burger-lunch.svg';
import burgerToSelect from '../newDir/burgertoselect.svg'

const Home = () => {
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