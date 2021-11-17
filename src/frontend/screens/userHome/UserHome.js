import React, { Component } from "react";
// import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { get as _get, last } from 'lodash';

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



class UserHome extends Component {
    constructor(props) {
        super(props)

        this.state = {
            wheelModal: false,
            wheelAvailable: true,
            avatarDisplay: false,
            slideMenu: false,
            count: 0,
            active: true,
            selectedPage: 'homeUser',
            selectedTab: 'missionUser',
            loadingRender: false,
            dataUser: null,

            wheel: null,
            oldDate: null,
            avatar: null,
            badge: null,
            wheelAward: null,
            totalExp: 0
        }

        this.newWheelAvaileble = null
        this.newDate = new Date().getTime()
        this.difference = null
        this.compare = false
        this.timer = 86400000

        this.levelExp = 1000
        this.percentageExp = 0
    }


    componentDidMount = () => {
        this.getDataApi()
    }

    getDataApi = async () => {
        properties.GENERIC_SERVICE = new genericServices();
        let dataUser = await properties.GENERIC_SERVICE.apiGET(`/user/${this.props.userIdDuck.userID}`, this.props.tokenDuck.token)
        let statusCode = _get(dataUser, "status", null)
        let userRole = _get(dataUser, "permission", [])


        let avatar = await properties.GENERIC_SERVICE.apiGET(`/avatar/detail/${this.props.userIdDuck.userID}`, this.props.tokenDuck.token)
        let badge = await properties.GENERIC_SERVICE.apiGET(`/badges`, this.props.tokenDuck.token)
        let badgePath = badge.find(item => item.id===dataUser.id).path
        console.log("percorso: ", badgePath)
        // wheelAward = await properties.GENERIC_SERVICE.apiGET('custumerdiscount/1', this.props.tokenDuck.token)

        let wheelUser = await properties.GENERIC_SERVICE.apiGET(`/wheel/of_user/${this.props.userIdDuck.userID}`, this.props.tokenDuck.token)
        let lastWheelUser = wheelUser[wheelUser.length - 1]
        let oldDate = wheelUser.length > 0 ? lastWheelUser.startDate : 0
        let wheelAward = lastWheelUser ? lastWheelUser.award : 'Wheel award'
        console.log(wheelAward)

        let totalExp = dataUser.exp === null ? 0 : dataUser.exp

        this.difference = this.newDate - oldDate
        this.compare = this.difference > 86400000 ? true : false
        this.timer -= this.difference

        if (oldDate) {
            this.newWheelAvaileble = this.compare
        }

        console.log("avatar: ", avatar)

        this.setState({
            wheelAvailable: this.newWheelAvaileble,
            loadingRender: true,
            dataUser: dataUser,

            oldDate: oldDate,
            avatar: avatar,
            badge: badgePath,
            wheelAward: wheelAward,
            totalExp: totalExp
        })
    }

    componentDidUpdate = () => {
        if (this.compare || !this.state.oldDate) {
            this.newWheelAvaileble = true
        } else {
            this.newWheelAvaileble = false
            setTimeout(() => {
                this.newWheelAvaileble = true
                this.setState({
                    wheelAvailable: this.newWheelAvaileble
                })
            }, 86400000 - this.compare);
        }
    }

    //apre le modali al click delle immagini
    callbackSwitcher = (e) => {
        let target = e.target.getAttribute('name')
        switch (target) {
            case 'userAvatar':
                this.setState({
                    avatarDisplay: true
                })
                break;
            case 'userBadge':
                break;

            case 'coinInfo':
                break;

            default:
                /* some error */
                break;
        }
    }

    //calcola il livello sulla base dell'esperienza
    userLevel = () => {
        let totalExp = this.state.totalExp
        if (totalExp < 1000) {
            this.percentageExp = totalExp / this.levelExp * 100
            return 1
        }
        if (totalExp >= 1000 && totalExp < 3000) {
            totalExp -= 1000
            this.levelExp = 2000
            this.percentageExp = totalExp / this.levelExp * 100
            return 2
        }
        if (totalExp >= 3000 && totalExp < 6000) {
            totalExp -= 3000
            this.levelExp = 3000
            this.percentageExp = totalExp / this.levelExp * 100
            return 3
        }
        if (totalExp >= 6000 && totalExp < 10000) {
            totalExp -= 6000
            this.levelExp = 4000
            this.percentageExp = totalExp / this.levelExp * 100
            return 4
        }
        if (totalExp >= 10000 && totalExp < 15000) {
            totalExp -= 10000
            this.levelExp = 5000
            this.percentageExp = totalExp / this.levelExp * 100
            return 5
        } if (totalExp >= 15000) {
            totalExp = 5000
            this.levelExp = 5000
            this.percentageExp = 100
            return 5
        }
    }

    addExp = () => {
        let totalExp = this.state.totalExp
        totalExp += 250

        this.setState({
            count: this.state.count + 1,
            totalExp: totalExp
        })
    }

    msToTime = (milliseconds) => {
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




    //Fortune wheel 
    openWheelOfFortuneGame = () => {
        let newDate = new Date().getTime()
        let wheelModal = true

        if (this.state.oldDate) {
            wheelModal = newDate - this.state.oldDate > 86400000 ? true : false
        }

        this.setState({
            wheelModal: wheelModal
        })
    }

    wheelModalClick = () => {
        this.setState({
            wheelModal: false
        })
    }

    handleCloseCallback = () => {
        this.setState({
            avatarDisplay: false
        })
    }

    // Slider menu for mobile
    slideMenu = () => {
        this.setState({
            slideMenu: !this.state.slideMenu
        })
    }


    //Button to go to an other page
    goToHome = () => {
        this.setState({
            selectedPage: 'homeUser',
            slideMenu: !this.state.slideMenu
        })
    }

    goToInformation = () => {
        this.setState({
            selectedPage: 'infoUser',
            slideMenu: !this.state.slideMenu
        })
    }

    goToOrders = () => {
        this.setState({
            selectedPage: 'orderUser',
            slideMenu: !this.state.slideMenu
        })
    }

    goToMissions = () => {
        this.setState({
            selectedPage: 'missionUser',
            slideMenu: !this.state.slideMenu
        })
    }

    showMyInfo = () => {
        this.setState({
            selectedTab: 'infoUser'
        })
    }
    showMyOrder = () => {
        this.setState({
            selectedTab: 'orderUser'
        })
    }
    showMyMission = () => {
        this.setState({
            selectedTab: 'missionUser'
        })
    }

    render() {
        return (
            <>
                {
                    this.state.loadingRender &&
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
                                                <img className='fe-user-avatar' src={this.state.avatar.path} alt="avatar" onClick={this.callbackSwitcher} name='userAvatar' />

                                                <div className='fe-user-badge-container'>
                                                    <img className='fe-user-badge' src={this.state.badge} alt="badge" onClick={this.callbackSwitcher} name='userAvatar' />
                                                </div>

                                                <div className='fe-user-icon-container'>
                                                    <img className='fe-user-icon' src={pencil} alt="pencil" onClick={this.callbackSwitcher} name='userAvatar' />
                                                </div>
                                            </div>
                                            {/* User name */}
                                            <div className='fe-user-name-container'>
                                                <span className='fe-user-name'>{this.state.dataUser.firstName + " " + this.state.dataUser.lastName}</span>
                                            </div>
                                        </div>
                                        {/* Coin info */}
                                        <div className='fe-user-switching-home-container' style={this.state.selectedPage !== 'homeUser' ? { display: 'none' } : { display: 'block' }}>
                                            <div className='fe-user-coin-container'>
                                                <img className='fe-user-coin' src={coin} alt="coin" />
                                                <span className='fe-coin-number'>{this.state.dataUser.totalCoins}</span>
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
                                                    <span className={this.state.totalExp >= 15000 ? 'fe-level-number fe-fire' : 'fe-level-number'}>&nbsp;{this.userLevel()}</span>
                                                    {this.state.totalExp >= 15000 &&
                                                        <span>
                                                            <img className='fe-user-gif-fire' src={fire} alt="fire" />
                                                        </span>
                                                    }
                                                </span>
                                                <div className='fe-progress-bar'>
                                                    <div style={{ width: `${this.percentageExp}%` }} className="fe-progress-exp"></div>
                                                </div>
                                                <span
                                                    style={{
                                                        fontSize: '.9rem',
                                                        letterSpacing: '1px',
                                                        textAlign: 'center'
                                                    }}
                                                >Experience
                                                    <span className='fe-exp-number'>&nbsp;{this.state.totalExp}</span>
                                                    /{this.levelExp}
                                                    <Button
                                                        className={'fe-user-add-experience'}
                                                        text={'+'}
                                                        callback={this.addExp}
                                                    />
                                                </span>

                                            </div>
                                            {/* WHeel container */}
                                            <div className='fe-user-wheel-container'>
                                                {
                                                    //mostrare solo se c'è una vincita
                                                    <span className='fe-wheel-text'>La tua vincita del giorno è: <br />
                                                        {
                                                            <span className='fe-wheel-award'>{this.state.wheelAward ? this.state.wheelAward : 'Gira la ruota'}</span>
                                                        }
                                                    </span>
                                                }
                                                <img className='fe-user-wheel' src={luckySpinMobile} alt="wheel" />
                                                <Button
                                                    className={this.newWheelAvaileble ? 'fe-btn-wheel-playable fe-btn-wheel' : 'fe-btn-wheel-not-playable fe-btn-wheel'}
                                                    text={this.newWheelAvaileble ? 'TAP TO SPIN' : <CountDownTimer time={this.msToTime(this.timer)} />}
                                                    callback={this.openWheelOfFortuneGame}
                                                />
                                            </div>
                                        </div>

                                        <div
                                            className='fe-user-switching-container'
                                            style={this.state.selectedPage !== 'infoUser' ? { display: 'none' } : { display: 'block' }}
                                        >
                                            <UserInformation /></div>

                                        <div
                                            className='fe-user-switching-container'
                                            style={this.state.selectedPage !== 'orderUser' ? { display: 'none' } : { display: 'block' }}
                                        >
                                            <UserOrders />
                                        </div>

                                        <div
                                            className='fe-user-switching-container'
                                            style={this.state.selectedPage !== 'missionUser' ? { display: 'none' } : { display: 'block' }}
                                        >
                                            <Mission />
                                        </div>


                                        {/* Slide Menu closed */}
                                        <div className='fe-user-slide-menu-closed'>
                                            <FontAwesomeIcon icon={faChevronUp} className='fe-user-slide-up-arrow' onClick={this.slideMenu} />
                                        </div>
                                    </div>
                                    {/* ----- Slide menu opened ----- */}
                                    <div className={this.state.slideMenu ? 'fe-user-slide-menu-opened fe-user-slide-menu-animation' : 'fe-user-slide-menu-opened'} >
                                        <FontAwesomeIcon icon={faChevronDown} className='fe-user-slide-down-arrow' onClick={this.slideMenu} />
                                        <Button
                                            className={`fe-user-btn-slide-menu ${this.state.selectedPage === 'homeUser' ? 'fe-slide-menu-active' : null}`}
                                            text={'Home'}
                                            callback={this.goToHome}
                                        />
                                        <Button
                                            className={`fe-user-btn-slide-menu ${this.state.selectedPage === 'infoUser' ? 'fe-slide-menu-active' : null}`}
                                            text={'Le mie informazioni'}
                                            callback={this.goToInformation}
                                        />
                                        <Button
                                            className={`fe-user-btn-slide-menu ${this.state.selectedPage === 'orderUser' ? 'fe-slide-menu-active' : null}`}
                                            text={'I miei ordini'}
                                            callback={this.goToOrders}
                                        />
                                        <Button
                                            className={`fe-user-btn-slide-menu ${this.state.selectedPage === 'missionUser' ? 'fe-slide-menu-active' : null}`}
                                            text={'Le mie missioni'}
                                            callback={this.goToMissions}
                                        />
                                    </div>

                                </div>
                                {/* ----- Second section ----- */}
                                <div className='fe-user-second-section'>
                                    <div className='fe-user-header-tabs'>
                                        <span
                                            className={this.state.selectedTab === 'infoUser' ? 'fe-user-tab-active' : null}
                                            onClick={this.showMyInfo}
                                        >Le mie informazioni</span>
                                        <span>|</span>
                                        <span
                                            className={this.state.selectedTab === 'orderUser' ? 'fe-user-tab-active' : null}
                                            onClick={this.showMyOrder}
                                        >I miei ordini</span>
                                        <span>|</span>
                                        <span
                                            className={this.state.selectedTab === 'missionUser' ? 'fe-user-tab-active' : null}
                                            onClick={this.showMyMission}
                                        >Le mie missioni</span>
                                    </div>
                                    <div className='fe-user-second-section-content'>

                                        {
                                            this.state.selectedTab === 'infoUser' &&
                                            <UserInformation />
                                        }
                                        {
                                            this.state.selectedTab === 'orderUser' &&
                                            <UserOrders />
                                        }
                                        {
                                            this.state.selectedTab === 'missionUser' &&
                                            <Mission />
                                        }
                                    </div>
                                </div>
                            </main>

                            {this.state.wheelModal &&


                                <div className="gm-wheel-modal">
                                    <CloseOutlined onClick={this.wheelModalClick} />
                                    <Wheel />
                                </div>

                            }


                            {/* ---- AVATAR ----*/}
                            {this.state.avatarDisplay &&
                                <div className='frontend-avatar'>
                                    <Avatar
                                        closeCallback={this.handleCloseCallback}
                                    />
                                </div>

                            }

                        </div>
                    </>
                }
            </>
        )
    }

}

const mapStateToProps = state => ({
    tokenDuck: state.tokenDuck,
    userIdDuck: state.userIdDuck
})

export default connect(mapStateToProps)(UserHome);
