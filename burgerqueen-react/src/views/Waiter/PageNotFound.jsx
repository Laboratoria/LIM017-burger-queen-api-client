import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <Link to='/' className=''>Inicio</Link>
        </div>
    )
}

export default PageNotFound;