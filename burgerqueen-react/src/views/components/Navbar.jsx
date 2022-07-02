import { Link } from "react-router-dom";
import './Narvbar.css'

const Navbar = ({ref0, name0, icon0, ref1, name1, icon1, ref2, name2, icon2}) => {
    return (
        <nav className="configuration">
            <div>
                <i className= {icon0} ></i>
                <Link to={ref0} className='btn btn-dark'>{name0}</Link>
            </div>
            <div>
                <i className= {icon1}></i>
                <Link to={ref1} className='btn btn-dark'>{name1}</Link>
            </div>
            <div>
                <i className= {icon2}></i>
                <Link to={ref2} className='btn btn-dark'>{name2}</Link>
            </div>
            <div>
                <i className="fa-solid fa-power-off"></i>
            </div>
        </nav>
    )
};
export default Navbar;