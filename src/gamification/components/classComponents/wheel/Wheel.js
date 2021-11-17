
import React from 'react'
import { useEffect } from 'react'
// import Coin from './../../assets/images/coin.svg'
import WheelComponentCustom from '../../WheelComponentCustom'

import wheelSound from "../../../assets/sounds/wheelSound.mp3"
import tryAgainWheel from "../../../assets/sounds/tryAgainWheel.mp3"

import { connect } from "react-redux";
import { useState } from 'react'

import genericServices from "../../../../common/utils/genericServices";
import properties from "../../../../common/utils/properties"


const Wheel = (props) => {
    let user = JSON.parse(localStorage.getItem('userInfo'))
    let audio = new Audio(wheelSound)

    console.log(user)
    useEffect(()=>{
        const actualState = "(╯°□°)╯︵ ┻━┻"
        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext('2d')
        const x = canvas.width/2
        ctx.textAlign = 'center'
        ctx.moveTo(x,0)
    },[])

    let storage = JSON.parse(localStorage.getItem('awards'))
    const [state, setState] = useState({
        awards: storage === null ? [] : storage,
        premio: '',
        id: 0,
        isOnlyOnce: false
    })
    const segments = [
        'TRY AGAIN',
        '10 🥮',
        '100 EXP',
        '5€ SALES',
        'FREE 🛵',
        'NOTHING WON',
        '10 🥮',
        '100 EXP',
        'FREE 🛵',
    ]

    const segColors = [
        '#F24464',
        'rgba(201, 178, 178, 0.904)',
        '#F2CB05',
        '#F24464',
        'rgba(201, 178, 178, 0.904)',
        '#F2CB05',
        '#F24464',
        'rgba(201, 178, 178, 0.904)',
        '#F2CB05',
    ]
    const onFinished = async (winner) => {
        properties.GENERIC_SERVICE = new genericServices();
        let response = ""
        console.log(user)
        if (winner !== 'TRY AGAIN') {
            if(winner === '10 🥮'){
               response = "10"
            }
            if(winner === '100 EXP'){
                response = "100"
            }
            if(winner === 'NOTHING'){
                response = ""
            }
            if(winner === 'FREE 🛵'){
                response = "free"
            }
        
            state.isOnlyOnce = true
            
            let obj = 
                {
                    userId: 163,
                    startDate: new Date().getTime(),
                    award: response
                }
            

            await properties.GENERIC_SERVICE.apiPOST('/wheel/insert',obj, this.props.tokenDuck.token)

            // localStorage.setItem('userInfo', JSON.stringify(user))
            
            // localStorage.setItem('wheelTimer', JSON.stringify(new Date().getTime()))
        }else{
            let audioTryAgain = new Audio(tryAgainWheel)
            audioTryAgain.volume = 0.4
            audioTryAgain.play()
        }

        setState(
            {
                ...state,
                awards: state.awards,
                premio: winner
            }
            )
            localStorage.setItem('awards', JSON.stringify(winner))
            audio.pause()
    }

    const handleClick = () => {
        audio.volume = 0.02
        audio.play()
    }



    return (

        <div style={{margin: "0 auto"}} onClick={handleClick}>
            
            <WheelComponentCustom
                segments={segments}
                segColors={segColors}
                onFinished={(winner) => onFinished(winner)}
                primaryColor='#f3f3f3'
                contrastColor='#3F3D56'
                buttonText='Spin'
                isOnlyOnce={state.isOnlyOnce}
                size={280}
                upDuration={400}
                downDuration={500}
                maxSpeed={1000}
            />

        </div>


    )
}
const mapStateToProps = state => ({
    tokenDuck: state.tokenDuck
})
export default connect(mapStateToProps)(Wheel);