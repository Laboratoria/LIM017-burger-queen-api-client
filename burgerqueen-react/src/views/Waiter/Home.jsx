import './Home.css';
import CupOfCofee from '../newDir/Cup-of-cofee.svg';
import burger from '../newDir/burger-lunch.svg';

const Home = () => {
    return(
        <div className='Home'>
        <section className="section__chooseMenu">
            <div>
                <button>Breakfasts</button>
                <img src={CupOfCofee} className='img-menu' alt='Cup of cofee'/>
            </div>
            <div>
                <button>Lunches</button>
                <img src={burger} className='img-menu' alt='burger-lunch'/>
            </div>
        </section>
        <section className="section__makeOrder">
            <div className="products">
                <div className="choos-by-type">
                    <div>
                        Burgers
                    </div>
                    <div>
                        Extra
                    </div>
                    <div>
                        Drinks
                    </div>
                    
                </div>
                <div className="lit-of-Products">
                    List Products
                </div>
            </div>
            <div  className="listOfOrder">
                lista de ordenes

            </div>
        </section>
        </div>
    )
}

export default Home