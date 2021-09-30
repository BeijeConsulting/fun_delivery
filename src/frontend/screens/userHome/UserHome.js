import React from "react";

import '../userHome/UserHome.css'
import luckySpin from '../../../common/assets/luckySpin.svg';

import Button from '../../../common/components/ui/button/Button'
import UserNavbar from "../../components/ui/userNavbar/UserNavbar";

import { useHistory } from "react-router-dom";

const UserHome = (props) => {
    let history = useHistory();

    /* GAMIFICATION */
    const callbackSwitcher = (e) => {
        /* TEST */
        console.log(e.target.getAttribute('name'));

        let target = e.target.getAttribute('name')
        switch (target) {
            case 'userIcon':
                /* WRITE HERE the foo to open icons modale*/

                /* TEST */
                console.log('hello userIcon');
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

    return (
        <div>
            {/* ----- NAVBAR ----- */}
            <UserNavbar
                /* from API */
                userImg={''}
                userName={'FreeWords'}
                userLvl={0}
                userExp={0}
                userCoins={0}
                callback={callbackSwitcher}
            />

            {/* ----- MAIN ----- */}
            <main className='frontend-main-user'>
                <ul>
                    <li>
                        <span style={{cursor: 'pointer'}}>Le mie informazioni</span>
                    </li>

                    <li>
                        <span style={{cursor: 'pointer'}}>I miei ordini</span>
                    </li>

                    <li>
                        <span style={{cursor: 'pointer'}} onClick={goToUserMissionsPage}>Le mie missioni</span>
                    </li>
                </ul>

                <div className='fortune-wheel-container'>
                    <img src={luckySpin} alt="fortunewheel" className='lucky-spin'/>
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
    )

}

export default UserHome;