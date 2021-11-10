import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { get as _get } from 'lodash';

import '../userHome/UserHome.css'
import properties from "../../../common/utils/properties"

//Components
import Wheel from '../../../gamification/components/classComponents/wheel/Wheel'
import Button from '../../../common/components/ui/button/Button'
import CountDownTimer from "../../../gamification/components/funcComponents/CountDownTimer";
import Avatar from '../../../gamification/components/classComponents/avatar/Avatar.js'
import Mission from "../../../gamification/components/classComponents/missions/Mission";
import UserOrders from "../../components/funcComponents/userOrders/UserOrders"

//Images
import coin from '../../../common/assets/BeijeCoin.png'
import pencil from '../../../frontend/assets/images/pencil.svg'
import fire from '../../assets/images/fire.gif'
import luckySpinMobile from '../../assets/images/luckySpinMobile.png'
import propertiesGM from "../../../gamification/utilities/properties";

//Icon fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { CloseOutlined } from '@ant-design/icons';
import UserInformation from "../../components/funcComponents/userInformation/UserInformation";

import Navbar from "../../components/ui/navbar/Navbar";
import genericServices from "../../../common/utils/genericServices";



const UserHome = (props) => {
    const [state, setState] = useState({
        wheelModal: false,
        wheelAvailable: true,
        avatarDisplay: false,
        slideMenu: false,
        count: 0,
        active: true,
        selectedPage: 'homeUser',
        selectedTab: 'infoUser'
    })

    //Data from localStorage
    // let oldDate = JSON.parse(localStorage.getItem('wheelTimer'))
    // let userPath = JSON.parse(localStorage.getItem('userInfo'))
    let wheelAward = JSON.parse(localStorage.getItem('awards'))

    //Dichiarazione variabili
    let history = useHistory();

    let newWheelAvaileble
    let newDate = new Date().getTime()
    let difference = newDate - oldDate
    let compare = difference > 86400000 ? true : false
    let timer = 86400000 - difference

    let levelExp = 1000
    let totalExp = dataUser.exp
    let percentageExp = 0

    let dataUser = null
    let oldDate = null
    let avatar = null
    let badge = null
    let wheelAward = null

    //useEffect
    useEffect(async () => {
        if (oldDate) {
            newWheelAvaileble = compare
        }


        properties.GENERIC_SERVICE = new genericServices();
        dataUser = await properties.GENERIC_SERVICE.apiGET('/user/1', props.tokenDuck.token)
        let statusCode = _get(dataUser, "status", null)
        let userRole = _get(dataUser, "permission", [])

        oldDate = await properties.GENERIC_SERVICE.apiGET('/wheel/1', props.tokenDuck.token)
        avatar = await properties.GENERIC_SERVICE.apiGET('/avatar/detail/1', props.tokenDuck.token)
        badge = await properties.GENERIC_SERVICE.apiGET('/badge/1', props.tokenDuck.token)
        wheelAward = await properties.GENERIC_SERVICE.apiGET('custumerdiscount/1', props.tokenDuck.token)

        console.log('get user id: ', dataUser)

        setState({
            ...state,
            wheelAvailable: newWheelAvaileble
        })
    }, []);

    //apre le modali al click delle immagini
    const callbackSwitcher = (e) => {
        let target = e.target.getAttribute('name')
        switch (target) {
            case 'userAvatar':
                setState({
                    ...state,
                    avatarDisplay: true
                })
                break;
            case 'userBadge':
                console.log('hello userBadge');
                break;

            case 'coinInfo':
                console.log('hello coins');
                break;

            default:
                /* some error */
                break;
        }
    }

    //calcola il livello sulla base dell'esperienza
    const userLevel = () => {
        if (dataUser.exp < 1000) {
            percentageExp = totalExp / levelExp * 100
            return 1
        }
        if (dataUser.exp >= 1000 && dataUser.exp < 3000) {
            totalExp -= 1000
            levelExp = 2000
            percentageExp = totalExp / levelExp * 100
            return 2
        }
        if (dataUser.exp >= 3000 && dataUser.exp < 6000) {
            totalExp -= 3000
            levelExp = 3000
            percentageExp = totalExp / levelExp * 100
            return 3
        }
        if (dataUser.exp >= 6000 && dataUser.exp < 10000) {
            totalExp -= 6000
            levelExp = 4000
            percentageExp = totalExp / levelExp * 100
            return 4
        }
        if (dataUser.exp >= 10000 && dataUser.exp < 15000) {
            totalExp -= 10000
            levelExp = 5000
            percentageExp = totalExp / levelExp * 100
            return 5
        } if (dataUser.exp >= 15000) {
            totalExp = 5000
            levelExp = 5000
            percentageExp = 100
            return 5
        }
    }

    const addExp = () => {
        dataUser.exp += 250
        // localStorage.setItem('userInfo', JSON.stringify(userPath))
        setState({
            ...state,
            count: state.count + 1
        })
        console.log(state.count)

    }

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


    //Fortune wheel 
    const openWheelOfFortuneGame = () => {
        let newDate = new Date().getTime()
        let oldDate = JSON.parse(localStorage.getItem('wheelTimer'))

        if (oldDate) {
            setState({
                ...state,
                wheelModal: newDate - oldDate > 86400000 ? true : false
            })
        } else {
            setState({
                ...state,
                wheelModal: true
            })
        }
    }

    const wheelModalClick = () => {
        setState({
            ...state,
            wheelModal: false
        })
    }

    const handleCloseCallback = () => {
        setState({
            ...state,
            avatarDisplay: false
        })
    }

    // Slider menu for mobile
    const slideMenu = () => {
        setState({
            ...state,
            slideMenu: !state.slideMenu
        })
    }


    //Button to go to an other page
    const goToHome = () => {
        setState({
            ...state,
            selectedPage: 'homeUser',
            slideMenu: !state.slideMenu
        })
    }

    const goToInformation = () => {
        setState({
            ...state,
            selectedPage: 'infoUser',
            slideMenu: !state.slideMenu
        })
    }

    const goToOrders = () => {
        setState({
            ...state,
            selectedPage: 'orderUser',
            slideMenu: !state.slideMenu
        })
    }

    const goToMissions = () => {
        setState({
            ...state,
            selectedPage: 'missionUser',
            slideMenu: !state.slideMenu
        })
    }

    const showMyInfo = () => {
        setState({
            ...state,
            selectedTab: 'infoUser'
        })
    }
    const showMyOrder = () => {
        setState({
            ...state,
            selectedTab: 'orderUser'
        })
    }
    const showMyMission = () => {
        setState({
            ...state,
            selectedTab: 'missionUser'
        })
    }

    return (
        <>
            <Navbar />
            <div className='fe-user-page-container'>

                {/* ----- MAIN ----- */}
                <main className='fe-main-user'>
                    {/* ----- First section ----- */}
                    <div className='fe-user-first-section'>
                        <div style={{ padding: '0 2rem' }}>
                            <div className='fe-user-header'>
                                {/* User images */}
                                <div className='fe-user-images-container'>
                                    <img className='fe-user-avatar' src={avatar.path} alt="avatar" onClick={callbackSwitcher} name='userAvatar' />

                                    <div className='fe-user-badge-container'>
                                        <img className='fe-user-badge' src={badge.path} alt="badge" onClick={callbackSwitcher} name='userAvatar' />
                                    </div>

                                    <div className='fe-user-icon-container'>
                                        <img className='fe-user-icon' src={pencil} alt="pencil" onClick={callbackSwitcher} name='userAvatar' />
                                    </div>
                                </div>
                                {/* User name */}
                                <div className='fe-user-name-container'>
                                    <span className='fe-user-name'>{dataUser.firstName + " " + dataUser.lastName}</span>
                                </div>
                            </div>
                            {/* Coin info */}
                            <div className='fe-user-switching-home-container' style={state.selectedPage !== 'homeUser' ? { display: 'none' } : { display: 'block' }}>
                                <div className='fe-user-coin-container'>
                                    <img className='fe-user-coin' src={coin} alt="coin" />
                                    <span className='fe-coin-number'>{dataUser.totalCoins}</span>
                                    <span style={{
                                        fontSize: '.9rem',
                                        letterSpacing: '1px'
                                    }}
                                    >BeijeCoin</span>
                                </div>
                                {/* Level and experience */}
                                <div className='fe-user-level-container'>
                                    <span style={{
                                        position: 'relative',
                                        fontSize: '.9rem',
                                        letterSpacing: '1px'
                                    }}>Level:
                                        <span className={dataUser.exp >= 15000 ? 'fe-level-number fe-fire' : 'fe-level-number'}>&nbsp;{userLevel()}</span>
                                        {dataUser.exp >= 15000 &&
                                            <span>
                                                <img className='fe-user-gif-fire' src={fire} alt="fire" />
                                            </span>
                                        }
                                    </span>
                                    <div className='fe-progress-bar'>
                                        <div style={{ width: `${percentageExp}%` }} className="fe-progress-exp"></div>
                                    </div>
                                    <span
                                        style={{
                                            fontSize: '.9rem',
                                            letterSpacing: '1px',
                                            textAlign: 'center'
                                        }}
                                    >Experience
                                        <span className='fe-exp-number'>&nbsp;{totalExp}</span>
                                        /{levelExp}
                                        <Button
                                            className={'fe-user-add-experience'}
                                            text={'+'}
                                            callback={addExp}
                                        />
                                    </span>

                                </div>
                                {/* WHeel container */}
                                <div className='fe-user-wheel-container'>
                                    {
                                        //mostrare solo se c'è una vincita
                                        <span className='fe-wheel-text'>La tua vincita del giorno è: <br />
                                            {
                                                <span className='fe-wheel-award'>{wheelAward ? wheelAward : 'Gira la ruota'}</span>
                                            }
                                        </span>
                                    }
                                    <img className='fe-user-wheel' src={luckySpinMobile} alt="wheel" />
                                    <Button
                                        className={newWheelAvaileble ? 'fe-btn-wheel-playable fe-btn-wheel' : 'fe-btn-wheel-not-playable fe-btn-wheel'}
                                        text={newWheelAvaileble ? 'TAP TO SPIN' : <CountDownTimer time={msToTime(timer)} />}
                                        callback={openWheelOfFortuneGame}
                                    />
                                </div>
                            </div>

                            <div
                                className='fe-user-switching-container'
                                style={state.selectedPage !== 'infoUser' ? { display: 'none' } : { display: 'block' }}
                            >
                                <UserInformation /></div>

                            <div
                                className='fe-user-switching-container'
                                style={state.selectedPage !== 'orderUser' ? { display: 'none' } : { display: 'block' }}
                            >
                                <UserOrders /></div>

                            <div
                                className='fe-user-switching-container'
                                style={state.selectedPage !== 'missionUser' ? { display: 'none' } : { display: 'block' }}
                            >
                                <Mission /></div>


                            {/* Slide Menu closed */}
                            <div className='fe-user-slide-menu-closed'>
                                <FontAwesomeIcon icon={faChevronUp} className='fe-user-slide-up-arrow' onClick={slideMenu} />
                            </div>
                        </div>
                        {/* ----- Slide menu opened ----- */}
                        <div className={state.slideMenu ? 'fe-user-slide-menu-opened fe-user-slide-menu-animation' : 'fe-user-slide-menu-opened'} >
                            <FontAwesomeIcon icon={faChevronDown} className='fe-user-slide-down-arrow' onClick={slideMenu} />
                            <Button
                                className={`fe-user-btn-slide-menu ${state.selectedPage === 'homeUser' ? 'fe-slide-menu-active' : null}`}
                                text={'Home'}
                                callback={goToHome}
                            />
                            <Button
                                className={`fe-user-btn-slide-menu ${state.selectedPage === 'infoUser' ? 'fe-slide-menu-active' : null}`}
                                text={'Le mie informazioni'}
                                callback={goToInformation}
                            />
                            <Button
                                className={`fe-user-btn-slide-menu ${state.selectedPage === 'orderUser' ? 'fe-slide-menu-active' : null}`}
                                text={'I miei ordini'}
                                callback={goToOrders}
                            />
                            <Button
                                className={`fe-user-btn-slide-menu ${state.selectedPage === 'missionUser' ? 'fe-slide-menu-active' : null}`}
                                text={'Le mie missioni'}
                                callback={goToMissions}
                            />
                        </div>

                    </div>
                    {/* ----- Second section ----- */}
                    <div className='fe-user-second-section'>
                        <div className='fe-user-header-tabs'>
                            <span
                                className={state.selectedTab === 'infoUser' ? 'fe-user-tab-active' : null}
                                onClick={showMyInfo}
                            >Le mie informazioni</span>
                            <span>|</span>
                            <span
                                className={state.selectedTab === 'orderUser' ? 'fe-user-tab-active' : null}
                                onClick={showMyOrder}
                            >I miei ordini</span>
                            <span>|</span>
                            <span
                                className={state.selectedTab === 'missionUser' ? 'fe-user-tab-active' : null}
                                onClick={showMyMission}
                            >Le mie missioni</span>
                        </div>
                        <div className='fe-user-second-section-content'>

                            {
                                state.selectedTab === 'infoUser' &&
                                <UserInformation />
                            }
                            {
                                state.selectedTab === 'orderUser' &&
                                <UserOrders />
                            }
                            {
                                state.selectedTab === 'missionUser' &&
                                <Mission />
                            }
                        </div>
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
        </>
    )
}

const mapStateToProps = state => ({
    tokenDuck: state.tokenDuck
})

export default connect(mapStateToProps)(UserHome);
