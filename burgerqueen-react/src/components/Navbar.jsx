import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="">
            <div className="container">
                <Link to="/" className='btn btn-dark'>INICIO</Link>
                <Link to="/Login" className='btn btn-dark'>LOGIN</Link>
                <Link to="/Home" className='btn btn-dark'>HOME</Link>
            </div>   
        </nav>
    )
};
export default Navbar;