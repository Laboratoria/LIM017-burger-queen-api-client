import { Link } from "react-router-dom";

const NavbarWaiter = () => {
    return (
        <nav className="">
            <div className="container">
                <Link to="/Waiter" className='btn btn-dark'>HOME</Link>
                <Link to="/Waiter/Profile" className='btn btn-dark'>PROFILE</Link>
                <Link to="/Waiter/Order" className='btn btn-dark'>ORDER</Link>
            </div>   
        </nav>
    )
};
export default NavbarWaiter;