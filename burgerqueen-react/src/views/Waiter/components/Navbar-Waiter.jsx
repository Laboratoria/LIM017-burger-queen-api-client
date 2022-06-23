import { Link } from "react-router-dom";
import './Narvbar.css'

const NavbarWaiter = () => {
    return (
        <nav className="configuration">
                <Link to="/Waiter" className='btn btn-dark'>HOME</Link>
                <Link to="/Waiter/Profile" className='btn btn-dark'>PROFILE</Link>
                <Link to="/Waiter/Order" className='btn btn-dark'>ORDERS</Link>
                <p>LOG OUT</p>
        </nav>
    )
};
export default NavbarWaiter;