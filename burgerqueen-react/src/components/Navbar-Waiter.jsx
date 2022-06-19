import { Link } from "react-router-dom";

const navbarWaiter = () => {
    return (
        <nav className="">
            <div className="container">
                <Link to="/" className='btn btn-dark'>HOME</Link>
                <Link to="/Profile" className='btn btn-dark'>PROFILE</Link>
                <Link to="/Order" className='btn btn-dark'>ORDER</Link>
            </div>   
        </nav>
    )
};
export default navbarWaiter;