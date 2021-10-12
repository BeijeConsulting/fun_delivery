import '../landing/Landing.css';
import HtmlTag from '../../components/funcComponents/htmlTag/HtmlTag';
import Input from '../../../common/components/ui/inputBox/InputBox';
import Button from '../../../common/components/ui/button/Button';

import burger from '../../../common/assets/HAMBURGER.svg';
/* import barbecue from '../../../common/assets/BARBECUE.svg'; */
import iceCream from '../../../common/assets/IceCream.svg';
import breakFast from '../../../common/assets/Breakfast.svg';
/* import plateBreakfast from '../../../common/assets/PlateBreakfast.svg'; */


//gsap
import { gsap } from "gsap";
/* import { ScrollTrigger } from "gsap/ScrollTrigger"; */
import { useState } from "react";
import { useRef } from "react"
import { useEffect } from "react/cjs/react.development";


const Landing = (props) => {
    const ref = useRef(null);

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
        const element = ref.current;

        const burgerSel = element.querySelector('.fe-burger-svg')
        const iceCreamSel = element.querySelector('.fe-icecream-svg')
        const breakfastSel = element.querySelector('.fe-breakfast-svg')

        gsap.from(burgerSel, { x: 50, opacity: 0, duration: 1, scale: 0.2 })
        gsap.from(iceCreamSel, { y: -50, opacity: 0, duration: 1, scale: 0.2 })
        gsap.from(breakfastSel, { x: -50, opacity: 0, duration: 1, scale: 0.2 })

    }, [])

    const handleCallbackInputBox = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleCallbackBtn = (e) => {
        props.history.push('/restaurants')
    }


    const mouseMoveFunction = (e) => {
        setState({
            ...state,
            burgerOnPage : {
                bottom : e.pageY / 80,
                left : -e.pageX / 80,
            },
        })
    }


    return (
        <div className='landing-screen' ref={ref} onMouseMove={mouseMoveFunction}>
            <div className='landing-content'>
                {/* NAV  */}

                <HtmlTag
                    tag='h1'
                    className='main-title'
                    text='Fame? Si mangia!'
                />

                <div className='main-box'>
                    <Input
                        placeholder='via Roma n.173'
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
                        text='Trova Ristoranti'
                        callback={handleCallbackBtn}
                        className='landing-btn'
                    />
                </div>

                {/* FOOTER */}
            </div>
            <img className='fe-burger-svg fe-svg-landing' src={burger} alt="" style={state.burgerOnPage} />
            <img className='fe-icecream-svg fe-svg-landing' src={iceCream} alt="" style={state.iceCreamOnPage}/>
            {/* <img className='fe-barbecue-svg fe-svg-landing' src={barbecue} alt="" /> */}
            <img className='fe-breakfast-svg fe-svg-landing' src={breakFast} alt="" />
        </div>
    );
}

export default Landing;