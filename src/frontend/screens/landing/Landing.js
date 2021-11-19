import '../landing/Landing.css';
import HtmlTag from '../../components/funcComponents/htmlTag/HtmlTag';
import Input from '../../../common/components/ui/inputBox/InputBox';
import Button from '../../../common/components/ui/button/Button';
import backgroundFood from '../../assets/images/background_food.png'
//gsap
//AOS 
import AOS from 'aos';
/* import { ScrollTrigger } from "gsap/ScrollTrigger"; */
import { useState, useRef, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { i18n } from 'i18next';
import Navbar from '../../components/ui/navbar/Navbar';
import Footer from '../../components/funcComponents/footer/Footer'
import properties from '../../../common/utils/properties';
import genericServices from '../../../common/utils/genericServices';

const Landing = (props) => {

    const [t, i18n] = useTranslation()
    //STATE
    const [state, setState] = useState({
        addressValue: '',
        hourValue: '',
        burgerOnPage: {
            bottom: 0,
            left: 10,
        },
    })

    //USEEFFECT
    useEffect(() => {
        //AOS INIT
        AOS.init({
            duration: 1000
        })
    }, [])
    const handleCallbackInputBox = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleCallbackBtn = (e) => {
        if(state.addressValue) {
            properties.GENERIC_SERVICE = new genericServices()
            let addressInfo = properties.GENERIC_SERVICE.apiPOST()
            props.history.push('/restaurants')            
        }
    }
    
    const changeLanguages = (e) => {
        i18n.changeLanguage(e.target.value)
    }

    return (
        <>
            <Navbar/>
            <div className='landing-screen'>
                {/* <video src={Video}autoPlay="true"/> */}
                <img className='foodBack' src={backgroundFood} data-aos="fade-up" />
                <div className='landing-content' data-aos="fade-up">
                    {/* NAV  */}
                    
                    <HtmlTag
                        tag='h1'
                        className='main-title'
                        text={t('frontend.screens.landing_page.title')}
                     />
                     <HtmlTag
                        tag='h1'
                        className='main-titleD'
                        text={t('frontend.screens.landing_page.titleFame')}
                     />
                     

                    <div className='main-box'>
                        <Input
                            placeholder={t('frontend.screens.landing_page.address_placeholder')}
                            name='addressValue'
                            type='text'
                            value={state.addressValue}
                            callback={handleCallbackInputBox}
                            className='landing-input'
                        />
                        <Input
                            name='hourValue'
                            type='time'
                            callback={handleCallbackInputBox}
                            className='landing-input'
                        />
                        <Button
                            text={t('frontend.components.landing_page.footer.button.find')}
                            callback={handleCallbackBtn}
                            className='landing-btn'
                        />
                    </div>
                    <div className="translation-container">
                        <button value="it" onClick={changeLanguages}>IT</button>
                        <button value="en" onClick={changeLanguages}>EN</button>
                    </div>


                    {/* FOOTER */}
                </div>
                {/* <img className='fe-burger-svg fe-svg-landing' src={burger} alt="" style={state.burgerOnPage} /> */}
                {/* { <img className='fe-icecream-svg fe-svg-landing' src={iceCream} alt="" style={state.iceCreamOnPage}/> /* */}
            </div>
            <Footer />
        </>
    );
}
export default Landing;