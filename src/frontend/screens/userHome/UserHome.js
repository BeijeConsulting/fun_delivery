import React, { useState } from "react";

import '../userHome/UserHome.css'
import luckySpin from '../../../common/assets/luckySpin.svg';
import luckySpinMobile from '../../assets/images/luckySpinMobile.png'

import Button from '../../../common/components/ui/button/Button'
// import UserNavbar from "../../components/ui/userNavbar/UserNavbar";

import Wheel from '../../../gamification/components/classComponents/wheel/Wheel'
import sortUpArrow from '../../assets/images/sortUpArrow.svg'

import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import CountDownTimer from "../../../gamification/components/funcComponents/CountDownTimer";

import { CloseOutlined } from '@ant-design/icons';

import apple from '../../../gamification/assets/images/avatar/avatar_apple.png'
import badge from '../../../gamification/assets/images/badges/capitan20.png'
import coin from '../../../common/assets/BeijeCoin.png'
import pencil from '../../../frontend/assets/images/pencil.svg'

import Avatar from '../../../gamification/components/classComponents/avatar/Avatar.js'



const UserHome = (props) => {
    const [state, setState] = useState({
        wheelModal: false,
        wheelAvailable: true,
        avatarDisplay: false,
    })

    let newWheelAvaileble
    let newDate = new Date().getTime()
    let oldDate = JSON.parse(localStorage.getItem('wheelTimer'))
    let difference = newDate - oldDate
    let compare = difference > 86400000 ? true : false
    let timer = 86400000 - difference

    let userPath = JSON.parse(localStorage.getItem('userInfo'))

    console.log(difference, "dentro ad un quadrato")
    const msToTime = (milliseconds) => {

        let seconds = Math.floor((milliseconds / 1000) % 60)
        let minutes = Math.floor((milliseconds / (1000 * 60)) % 60)
        let hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24)


        let obj = {
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }

        return obj
    }

    if (compare || !oldDate) {
        newWheelAvaileble = true
    } else {
        newWheelAvaileble = false
        setTimeout(() => {
            newWheelAvaileble = true
            setState({
                ...state,
                wheelAvailable: newWheelAvaileble
            })
        }, 86400000 - compare);
    }
    useEffect(() => {
        if (oldDate) {
            newWheelAvaileble = compare
            // setState({
            //     ...state,
            //     wheelAvailable: newDate-oldDate > 86400000 ? true : false
            // })
        }
        setState({
            ...state,
            wheelAvailable: newWheelAvaileble
        })

    }, []);


    let history = useHistory();

    /* GAMIFICATION */
    const callbackSwitcher = (e) => {
        let target = e.target.getAttribute('name')
        switch (target) {
            case 'userAvatar':
                setState({
                    avatarDisplay: true
                })
                break;
            case 'userBadge':
                /* WRITE HERE the foo to open icons modale*/

                /* TEST */
                console.log('hello userBadge');
                break;

            case 'coinInfo':
                /* WRITE HERE the foo to open infos modale*/

                /* TEST */
                console.log('hello coins');
                break;

            default:
                /* some error */
                break;
        }
    }

    const openWheelOfFortuneGame = () => {
        /* WRITE HERE the fo to open the wheel of fortune game */
        let newDate = new Date().getTime()
        let oldDate = JSON.parse(localStorage.getItem('wheelTimer'))

        if (oldDate) {
            setState({
                wheelModal: newDate - oldDate > 86400000 ? true : false
            })
        } else {
            setState({
                wheelModal: true
            })
        }
    }

    /* da generalizzare con il parametro path passato alla funzione */
    const goToUserMissionsPage = () => {
        history.push('/userHome/missions');

        /* WRITE HERE the foo to open the missions modale */
    }
    /* END GAMIFICATION */



    /* TO BE IMPLEMENTED */
    const logoutUser = () => {
        localStorage.clear();
        props.history.push('/')
        return
    }


    const wheelModalClick = () => {
        setState({
            wheelModal: false
        })
    }


    const handleCloseCallback = () => {
        setState({
            avatarDisplay: false
        })
    }

    let percentageExp = 40;

    return (
        <div className='fe-user-page-container'>

            {/* ----- MAIN ----- */}
            <main className='fe-main-user'>
                <div className='fe-user-first-section'>
                    <div className='fe-user-header'>
                        {/* User images */}
                        <div className='fe-user-images-container'>
                            <img className='fe-user-avatar' src={apple} alt="avatar" />

                            <div className='fe-user-badge-container'>
                                <img className='fe-user-badge' src={badge} alt="badge" />
                            </div>

                            <div className='fe-user-icon-container'>
                                <img className='fe-user-icon' src={pencil} alt="pencil" />
                            </div>
                        </div>
                        {/* User name */}
                        <div className='fe-user-name-container'>
                            <span className='fe-user-name'>Fede Dimo</span>
                        </div>
                    </div>
                    <div className='fe-user-coin-container'>
                        <img className='fe-user-coin' src={coin} alt="coin" />
                        <span className='fe-coin-number'>300 &nbsp;</span> <span>BeijeCoin</span>
                    </div>
                    <div className='fe-user-level-container'>
                        <span>Level:
                            <span className='fe-level-number'>&nbsp;1</span>
                        </span>
                        <div className='fe-progress-bar'>
                            <div style={{ width: `${percentageExp}%` }} className="fe-progress-exp"></div>
                        </div>
                        <span>Experience
                            <span className='fe-exp-number'>&nbsp;300</span>
                        </span>
                    </div>
                    <div className='fe-user-wheel-container'>
                        {
                            //mostrare solo se c'è una vincita
                            <span className='fe-wheel-text'>La tua vincita del giorno è:
                                <br /><span className='fe-wheel-award'>Una spedizione gratuita</span>
                            </span>
                        }
                        <img className='fe-user-wheel' src={luckySpinMobile} alt="wheel" />
                        <Button
                            className={newWheelAvaileble ? 'fe-btn-wheel-playable fe-btn-wheel' : 'fe-btn-wheel-not-playable fe-btn-wheel'}
                            // style={newWheelAvaileble ? { backgroundColor: '#F2CB05' } : { color: "white", backgroundColor: "gray" }}
                            text={newWheelAvaileble ? 'TAP TO SPIN' : <CountDownTimer time={msToTime(timer)} />}
                            callback={openWheelOfFortuneGame}
                        />
                    </div>
                    <div className='fe-user-slide-menu'>
                    <img className='fe-user-slide-arrow' src={sortUpArrow} alt="slide arrow" />
                    </div>
                </div>
                <div className='fe-user-second-section'>
                    <div className='fe-user-header-tabs'></div>
                </div>
            </main>

            {state.wheelModal &&


                <div className="gm-wheel-modal">
                    <CloseOutlined onClick={wheelModalClick} />
                    <Wheel />
                </div>

            }


            {/* ---- AVATAR ----*/}
            {state.avatarDisplay &&
                <div className='frontend-avatar'>
                    <Avatar
                        closeCallback={handleCloseCallback}
                    />
                </div>
            }

        </div>
    )

}

export default UserHome;















































// <main className='frontend-main-user'>
//     <ul>
//         <li>
//             <span style={{ cursor: 'pointer' }}>Le mie informazioni</span>
//         </li>

//         <li>
//             <span style={{ cursor: 'pointer' }}>I miei ordini</span>
//         </li>

//         <li>
//             <span style={{ cursor: 'pointer' }} onClick={goToUserMissionsPage}>Le mie missioni</span>
//         </li>
//     </ul>

//     <div className='fortune-wheel-container'>
//         <img src={luckySpin} alt="fortunewheel" className='lucky-spin' />
//         <Button
//             style={newWheelAvaileble ? { backgroundColor: '#F2CB05' } : { color: "white", backgroundColor: "gray" }}
//             text={newWheelAvaileble ? 'TAP TO SPIN' : <CountDownTimer time={msToTime(timer)} />}
//             callback={openWheelOfFortuneGame}
//         />


//     </div>

//     <Button
//         text='LOGOUT'
//         className='frontend-user-logout-btn'
//         callback={logoutUser}
//     />
// </main>