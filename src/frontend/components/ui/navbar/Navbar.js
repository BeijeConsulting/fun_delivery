import './Navbar.css';
import logo from '../../../../common/assets/LogoSvgRosa.svg';


import { useState } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";

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
        setState({
            ...state,
            isBurgerClicked: state.isBurgerClicked ? false : true
        });
    }
    const navOptionSlide = () => {
        setState({
            navOptionRightLeft: state.navOptionRightLeft === 'pickup' ? 'delivery' : 'pickup',
            selectedDelivery: state.navOptionRightLeft === 'delivery' ? 'white-txt' : '',
            selectedPickup: state.navOptionRightLeft === 'pickup' ? 'white-txt' : ''
        });
    }

    const goToSelectedPage = (path) => () => {
        history.push(path)
    }


    return (
        <>
            {
                //navbar non va visualizzata quando ci troviamo nel backoffice o nella userPage
                pathArray[1] !== 'restaurant' && pathArray[1] !== 'userHome' && pathArray[1] !== 'quiz' && pathArray[1] !== "memory" &&
                
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

                    {/* VISUALIZZAZIONE ELEMENTI IN MODALITA SMARTPHONE E TABLET */}
                    <div className="box-smartphone">
                        <span className='logo-smartphone'>
                            <Link style={styleObj} to="/"><img src={logo} className="img_logo" alt="fun_delivery" /></Link>
                        </span>

                        <div className='burger-menu' onClick={burgerEffects}>
                            <div className={`burger upper-line ${state.isBurgerClicked ? 'show' : ''}`}></div>
                            <div className={`burger middle-line ${state.isBurgerClicked ? 'right' : ''}`}></div>
                            <div className={`burger middle-line ${state.isBurgerClicked ? 'left' : ''}`}></div>
                            <div className={`burger lower-line ${state.isBurgerClicked ? 'show' : ''}`}></div>
                        </div>

                        {/* DROP DOWN LINKBOX */}
                        <div className={`drop-down-link-box ${state.isBurgerClicked ? 'drop' : ''}`}>
                            <div className='link-container'>
                                <span onClick={goToSelectedPage('/loginUser')}>
                                    Login
                                    {/* <Link style={{ color: '#3f3d56', textDecoration: 'none' }} to="/loginUser">Login</Link> */}
                                </span>

                                <span onClick={goToSelectedPage('/registrationUser')}>
                                    Register
                                    {/* <Link style={{ color: '#3f3d56', textDecoration: 'none' }} to="/registrationUser">Registrazione</Link> */}
                                </span>
                            </div>

                        </div>
                    </div>
                </nav>
            }
        </>
    );

}
export default Navbar;