
import React from 'react'
import { useEffect } from 'react'
// import Coin from './../../assets/images/coin.svg'
import WheelComponentCustom from '../../WheelComponentCustom'

import wheelSound from "../../../assets/sounds/wheelSound.mp3"
import tryAgainWheel from "../../../assets/sounds/tryAgainWheel.mp3"

import { useState } from 'react'


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
    const onFinished = (winner) => {
        console.log(user)
        if (winner !== 'TRY AGAIN') {
            if(winner === '10 🥮'){
                user.beijeCoin = user.beijeCoin + 10
            }
            if(winner === '100 EXP'){
                user.experience = user.experience + 100
            }
            if(winner === '5€ SALES'){
                user.discount = true
            }
            if(winner === 'FREE 🛵'){
                user.freeDelivery = true
            }
            
            // state.awards.push({
            //     id: state.id++,
            //     single_award: winner
            // })
            state.isOnlyOnce = true
            
            localStorage.setItem('userInfo', JSON.stringify(user))
            
            localStorage.setItem('wheelTimer', JSON.stringify(new Date().getTime()))
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
        audio.volume = 0.4
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

export default Wheel;