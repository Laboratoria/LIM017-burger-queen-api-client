import { Link } from "react-router-dom";
import './Narvbar.css'

const NavbarWaiter = () => {
    return (
        <nav className="configuration">
            <div>
                <i className="fa-solid fa-house"></i>
                <Link to="/Waiter" className='btn btn-dark'>HOME</Link>    
            </div>
            <div>
                <i className="fa-solid fa-list-check"></i>
                <Link to="/Waiter/Order" className='btn btn-dark'>ORDERS</Link>
            </div>
            <div>
                <i className="fa-solid fa-user"></i>
                <Link to="/Waiter/Profile" className='btn btn-dark'>PROFILE</Link>
            </div>
            <div>
                <i className="fa-solid fa-power-off"></i>
            </div>
        </nav>
    )
};
export default NavbarWaiter;