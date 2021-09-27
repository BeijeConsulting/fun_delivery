import { Link } from "react-router-dom";
import './Navbar.css';

import logo from '../../../../common/assets/LogoSvgRosa.svg';

import { useState } from "react";

const Navbar = (props) => {

    const [isBurgerClicked, setIsBurgerClicked] = useState(false);

    const styleObj = {
        textDecoration: 'none'
    }

    const burgerEffects = () => {
        setIsBurgerClicked(isBurgerClicked ? false : true);
    }

    return (
        <nav className="navbar">
            {/* VISUALIZZAZIONE ELEMENTI IN MODALITA DESKTOP */}
            <div className='box-desktop'>
                <span>
                    <Link style={styleObj} to="/"><img src={logo} className="img_logo" alt="fun_delivery" /></Link>
                </span>

                <span>
                    <Link style={styleObj} to="/LoginUser">Login</Link>
                </span>

                <span>
                    <Link style={styleObj} to="/RegistrationUser">Registrazione</Link>
                </span>
            </div>

            {/* VISUALIZZAZIONE ELEMENTI IN MODALITA SMARTPHONE E TABLET */}
            <div className="box-smartphone">
                <span className='logo-smartphone'>
                    <Link style={styleObj} to="/"><img src={logo} className="img_logo" alt="fun_delivery" /></Link>
                </span>

                <div className='burger-menu' onClick={burgerEffects}>
                    <div className={`burger upper-line ${isBurgerClicked ? 'show' : ''}`}></div>
                    <div className={`burger middle-line ${isBurgerClicked ? 'right' : ''}`}></div>
                    <div className={`burger middle-line ${isBurgerClicked ? 'left' : ''}`}></div>
                    <div className={`burger lower-line ${isBurgerClicked ? 'show' : ''}`}></div>
                </div>

                {/* DROP DOWN LINKBOX */}
                <div className={`drop-down-link-box ${isBurgerClicked ? 'drop' : ''}`}>
                    <div className='link-container'>
                        <span>
                            <Link style={styleObj} to="/LoginUser">Login</Link>
                        </span>

                        <span>
                            <Link style={styleObj} to="/RegistrationUser">Registrazione</Link>
                        </span>
                    </div>

                </div>
            </div>
        </nav>
    )
}
export default Navbar;