import { Link } from 'react-router-dom'
import logoMCD from '../assets/logoMCD.png'
import '../styles/navbar.css'

const UserNavbar = () => {
    return (
        <nav>
            <div className="logo">
            <img src={logoMCD} />
            </div>
            <ul>                
                <li>
                    <Link to="/userlanding">Home</Link>
                </li>
                <li>
                    <Link to="/usermenulist">Menu</Link>
                </li>
                <li>
                    <Link to="/login">Logout</Link>
                </li>
            </ul>
        </nav>
    );
}

export default UserNavbar;
