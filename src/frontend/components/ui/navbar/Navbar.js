import { Link } from "react-router-dom";
import './Navbar.css';

import logo from '../../../../common/assets/LogoSvgRosa.svg';

import { useState } from "react";
import { useLocation } from "react-router";

const Navbar = (props) => {

    //location per sapere quando renderizzare la navbar e quando no
    let location = useLocation();
    let history = useHistory();
    const pathArray = location.pathname.split('/');

    // HOOKS STATE
    const [state, setState] = useState({
        isBurgerClicked: false,
        navOptionRightLeft: 'pickup',
        selectedDelivery: 'white-txt',
        selectedPickup: '',
    })

    const styleObj = {
        textDecoration: 'none',
        color: 'white',
    }

    const burgerEffects = () => {
        setIsBurgerClicked(isBurgerClicked ? false : true);
    }

    
    

    //da formattare eventualmente il return
           
    if (pathArray[1] === 'restaurant') {
        return (false);
    }
    return (
        <>
            {
                //navbar non va visualizzata quando ci troviamo nel backoffice o nella userPage
                pathArray[1] !== 'restaurant' && pathArray[1] !== 'userHome' &&
                
                <nav className="navbar">
                    {/* VISUALIZZAZIONE ELEMENTI IN MODALITA DESKTOP */}
                    <div className='box-desktop'>
                        <div className='left-nav-side'>
                            <span>
                                <Link style={styleObj} to="/"><img src={logo} className="img_logo" alt="fun_delivery" /></Link>
                            </span>

                            {/* render dinamico della selezione del tipo di consegna */}
                            {
                                (pathArray[1] === '' || pathArray[1] === 'restaurants') &&
                                <div className='outer-btn' onClick={navOptionSlide}>
                                    <span className={`left-inner-text ${state.selectedPickup}`}>Pickup</span>
                                    <span className={`right-inner-text ${state.selectedDelivery}`}>Consegna</span>
                                    <div className={`inner-btn ${state.navOptionRightLeft}`}></div>
                                </div>
                            }
                        </div>


                        <div className='right-nav-side'>
                            <span className='right-btn login' style={styleObj} onClick={goToSelectedPage('/loginUser')}>
                                Login
                                {/* <Link style={styleObj} to="/loginUser">Accedi</Link> */}
                            </span>

                            <span className='right-btn register' style={styleObj} onClick={goToSelectedPage('/registrationUser')}>
                                Register
                                {/* <Link style={styleObj} to="/registrationUser">Registrati</Link> */}
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
                                <Link style={{ color: '#3f3d56', textDecoration: 'none' }} to="/loginUser">Login</Link>
                            </span>
    
                            <span>
                                <Link style={{ color: '#3f3d56', textDecoration: 'none' }} to="/registrationUser">Registrazione</Link>
                            </span>
                        </div>
    
                    </div>
                </div>
            </nav>
    );

}
export default Navbar;