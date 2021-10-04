
import React from 'react'
import { useEffect } from 'react'
// import Coin from './../../assets/images/coin.svg'
import WheelComponentCustom from '../../WheelComponentCustom'
import 'react-wheel-of-prizes/dist/index.css'

import { useState } from 'react'




const Wheel = () => {

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
        id: 0
    })
    const segments = [
        'TRY AGAIN',
        '10 🥮',
        '100 EXP',
        '10% SALES',
        'FREE 🛵',
        'TRY AGAIN',
        '10 🥮',
        '100 EXP',
        '10% SALES',
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
        console.log(winner)
        if (winner) {
            state.awards.push({
                id: state.id++,
                single_award: winner
            })
        }
        setState(
            {
                ...state,
                awards: state.awards,
                premio: winner
            }
        )
        localStorage.setItem('awards', JSON.stringify(state.awards))
    }
    return (

        <div style={{margin: "0 auto"}}>

            <WheelComponentCustom
                segments={segments}
                segColors={segColors}
                onFinished={(winner) => onFinished(winner)}
                primaryColor='#3f3d56'
                contrastColor='#3F3D56'
                buttonText='Spin'
                isOnlyOnce={false}
                size={290}
                upDuration={400}
                downDuration={500}
                maxSpeed={1000}
            />

        </div>


    )
}

export default Wheel;