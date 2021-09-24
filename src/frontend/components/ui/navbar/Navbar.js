 import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/"><img src={props.logo} className="img_logo" alt="fun_delivery" /></Link>
                </li>
                <li>
                    <Link to="/LoginUser">Login</Link>
                </li>
                <li>
                    <Link to="/RegistrationUser">Registrazione</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;