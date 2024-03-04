import { Link } from 'react-router-dom'
import logoMCD from '../assets/logoMCD.png'
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
            <img src={logoMCD} />
            </div>
            <ul>                
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/menulist">Menu</Link>
                </li>
                <li>
                    <Link to="/create">Add Menu</Link>
                </li>
                <li>
                    <Link to="/createpromo">Add Promo</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
