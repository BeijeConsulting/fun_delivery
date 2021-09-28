import { Link } from "react-router-dom";
import './Navbar.css';

import logo from '../../../../common/assets/LogoSvgRosa.svg';

import { useState } from "react";

const Navbar = (props) => {

    const [isBurgerClicked, setIsBurgerClicked] = useState(false);

    const styleObj = {
        textDecoration: 'none',
        color: 'white',
    }

    const burgerEffects = () => {
        setIsBurgerClicked(isBurgerClicked ? false : true);
    }

    return (
        <nav className="navbar">
            {/* VISUALIZZAZIONE ELEMENTI IN MODALITA DESKTOP */}
            <div className='box-desktop'>
                <div className='left-nav-side'>
                    <span>
                        <Link style={styleObj} to="/"><img src={logo} className="img_logo" alt="fun_delivery" /></Link>
                    </span>

                    <div className='outer-btn'>
                        <div className='inner-btn'>
                            <span>Consegna</span>
                        </div>
                        <span className='inner-txt'>
                            Pickup
                        </span>
                    </div>

                </div>


                <div className='right-nav-side'>
                    <span className='right-btn login'>
                        <Link style={styleObj} to="/loginUser">Accedi</Link>
                    </span>

                    <span className='right-btn register'>
                        <Link style={styleObj} to="/registrationUser">Registrati</Link>
                    </span>
                </div>
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
                            <Link style={styleObj} to="/loginUser">Login</Link>
                        </span>

                        <span>
                            <Link style={styleObj} to="/registrationUser">Registrazione</Link>
                        </span>
                    </div>

                </div>
            </div>
        </nav>
    )
}
export default Navbar;