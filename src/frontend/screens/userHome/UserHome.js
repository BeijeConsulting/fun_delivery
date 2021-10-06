import React from "react";

import '../userHome/UserHome.css'
import luckySpin from '../../../common/assets/luckySpin.svg';

import Button from '../../../common/components/ui/button/Button'
import UserNavbar from "../../components/ui/userNavbar/UserNavbar";

import Wheel from '../../../gamification/components/classComponents/wheel/Wheel'

import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import CountDownTimer from "../../../gamification/components/funcComponents/CountDownTimer";

import { CloseOutlined } from '@ant-design/icons';

const UserHome = (props) => {
    const [state, setState] = useState({
        wheelModal: false,
        wheelAvailable: true
    })

    let newWheelAvaileble
    let newDate = new Date().getTime()
    let oldDate = JSON.parse(localStorage.getItem('wheelTimer'))
    let difference = newDate - oldDate 
    let compare = difference > 10_000 ? true : false
    let timer = 10000 - difference

    console.log(difference, "dentro ad un quadrato")
    const msToTime=(milliseconds)=> {

          let seconds = Math.floor((milliseconds / 1000) % 60)
          let minutes = Math.floor((milliseconds / (1000 * 60)) % 60)
          let hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24)

      
          let obj = {
              hours:  hours,
              minutes:  minutes,
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
        }, 10_000 - compare);
    }
    useEffect(() => {
        if (oldDate) {
            newWheelAvaileble = compare
            // setState({
            //     ...state,
            //     wheelAvailable: newDate-oldDate > 10_000 ? true : false
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
        let newDate = new Date().getTime()
        let oldDate = JSON.parse(localStorage.getItem('wheelTimer'))

        if (oldDate) {
            setState({
                wheelModal: newDate - oldDate > 10_000 ? true : false
            })
        } else {
            setState({
                wheelModal: true
            })
        }
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

    const wheelModalClick = () => {
        setState({
            wheelModal: false
        })
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
                        style={newWheelAvaileble ? { backgroundColor: '#F2CB05' } : { color: "white", backgroundColor: "gray" }}
                        text={newWheelAvaileble ? 'TAP TO SPIN' :<CountDownTimer time={msToTime(timer)} />}
                        callback={openWheelOfFortuneGame}
                    />

                    {state.wheelModal &&

                        <div className="gm-wheel-modal">
                            <CloseOutlined onClick={wheelModalClick} />
                            <Wheel />
                        </div>
                    }
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