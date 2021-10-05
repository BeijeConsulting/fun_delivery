import React, { useState } from "react";

import '../userHome/UserHome.css'
import luckySpin from '../../../common/assets/luckySpin.svg';

import Button from '../../../common/components/ui/button/Button'
import UserNavbar from "../../components/ui/userNavbar/UserNavbar";
import { useHistory } from "react-router-dom";

import apple from '../../../gamification/assets/images/avatar/avatar_apple.png'
import badge from '../../../gamification/assets/images/badges/capitan20.png'
import coin from '../../../common/assets/BeijeCoin.png'

import Avatar from '../../../gamification/components/classComponents/avatar/Avatar.js'



const UserHome = (props) => {
    let history = useHistory();

    const [state, setState] = useState({
        avatarDisplay: false
    })

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
        return
    }

    /* da generalizzare con il parametro path passato alla funzione */
    const goToUserMissionsPage = () => {
        history.push('/userHome/userMissions');

        /* WRITE HERE the foo to open the missions modale */
    }
    /* END GAMIFICATION */



    /* TO BE IMPLEMENTED */
    const logoutUser = () => {
        return
    }

    const handleCloseCallback = () => {
        setState({
            avatarDisplay: false
        })
    }

    return (
        <div className='frontend-user-page-container'>
            <div className='frontend-user-page'>
                {/* ----- NAVBAR ----- */}
                <UserNavbar
                    /* from API */
                    userAvatar={apple}
                    userBadge={badge}
                    userName={'Nome Cognome'}
                    userLvl={0}
                    userExp={0}
                    userCoins={0}
                    callback={callbackSwitcher}
                    coin={coin}
                />

                {/* ----- MAIN ----- */}
                <main className='frontend-main-user'>
                    <ul>
                        <li>
                            <span style={{ cursor: 'pointer' }}>Le mie informazioni</span>
                        </li>

                        <li>
                            <span style={{ cursor: 'pointer' }}>I miei ordini</span>
                        </li>

                        <li>
                            <span style={{ cursor: 'pointer' }} onClick={goToUserMissionsPage}>Le mie missioni</span>
                        </li>
                    </ul>

                    <div className='fortune-wheel-container'>
                        <img src={luckySpin} alt="fortunewheel" className='lucky-spin' />
                        <Button
                            text='TAP TO SPIN'
                            callback={openWheelOfFortuneGame}
                        />
                    </div>

                    <Button
                        text='LOGOUT'
                        className='frontend-user-logout-btn'
                        callback={logoutUser}
                    />
                </main>
            </div>

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