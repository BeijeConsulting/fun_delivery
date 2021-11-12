import React, { Component } from "react";

import './Mission.css'
import properties from "../../../../common/utils/properties";
import genericServices from "../../../../common/utils/genericServices";
import { get as _get } from 'lodash';
import { connect } from "react-redux";

//Import img
import firstOrder2 from "../../../assets/images/badges/firstOrder2.png"
import Coin from '../../../assets/images/beijeCoin.png'

//Import Components
import Button from "../../../../common/components/ui/button/Button"

class Mission extends Component {
    constructor(props) {
        super(props);
        // this.storage = JSON.parse(localStorage.getItem('userInfo'))
        /*         this.missions = properties.missions.map((el, i) => { if (this.storage.mission.includes(i)) { el.claim = true } return el }) */

        this.state = {
            /*             arr: this.missions, */
            modalMission: false,
            modalAvatar: false,
            loadingRender: false,
            allMissions: null,
            missionUser: null

            // storage: this.storage === null ? [] : this.storage,
        }
    }

    componentDidMount = () => {
        this.getDataApi()
    }

    getDataApi = async () => {
        properties.GENERIC_SERVICE = new genericServices();
        let allMissions = await properties.GENERIC_SERVICE.apiGET('/mission/list', this.props.tokenDuck.token)
        console.log('get allMissions: ', allMissions)
        let statusCode = _get(allMissions, "status", null)
        let userRole = _get(allMissions, "permission", [])

        let missionUser = await properties.GENERIC_SERVICE.apiGET('/user_mission/list/163', this.props.tokenDuck.token)


        this.setState({
            allMissions: allMissions,
            loadingRender: true,
            missionUser: missionUser
        })
    }


    handleClaim =  (e, i)  => async () => {
        //  let newStorage = this.state.dataUser
        //  let newArr = this.state.arr

        //  newStorage.mission.push(i)
        //  newStorage.experience = newStorage.experience >= 15000 ? newStorage.experience : newStorage.experience += e.exp
        //  newStorage.beijeCoin += e.beijeCoin
        //  if (e.badge !== null) {
        //      newStorage.badge.userBadges.push(e.badge)
        // //  }
        //  newArr[i].claim = true

        //  localStorage.setItem('userInfo', JSON.stringify(newStorage))

        //  this.setState({
        //      storage: newStorage,
        //      arr: newArr
        //  })
        let missionId = this.state.missionUser.map(item => item = item.id).join()
        
        let obj = {
            id: missionId+0,
            userId: 163,
            missionId: e.missionId,
            checked: 1
        }

        await properties.GENERIC_SERVICE.apiPUT(`/user_mission/update/${missionId}`, obj, this.props.tokenDuck.token)


    }

    checkMissionUser = (e) => () => {
        // questa è la prova che mirco non dice troiate
        let missionUser = this.state.missionUser
        let onlyId = missionUser.map(el => el = el.missionId)
        if (onlyId.includes(e.id)) {
            return true
        }
    }

    printMissions = (e, i) => {
        let missionCompleted = this.checkMissionUser(e)()
        return <div key={i} className="MissionMenuContainer">
            <ul className="MissionMenu">
                <li
                    style={missionCompleted ? { backgroundColor: '#b6b1b1' } : null}
                    className='MissionSingle'>
                    <div className="MissionSingleTitle">
                        <h2 style={{ color: 'var(--primary-dark', textAlign: 'center' }}>{e.title}</h2>
                        <p>{e.description}</p>
                    </div>
                    <div className="MissionAward">
                        {e.exp > 0 &&
                            <>
                                <span className="MissionSub">
                                    <span>
                                        EXP:
                                    </span>
                                    {e.exp}
                                </span>
                            </>
                        }
                        {e.beijeCoin > 0 &&
                            <>
                                <span className="MissionSub">
                                    <span style={{ marginLeft: '20px' }}>
                                        BeijeCoin: &nbsp;
                                    </span>
                                    {e.beijeCoin}
                                    <img className="BeijeCoinMission" src={Coin} alt="BeijeCoin" />
                                </span>
                            </>
                        }
                        {/*                         {
                            e.badge !== null &&
                            <span className="MissionSub">
                                <span>
                                    Badge: &nbsp;
                                </span>       
                                <img className="badgeMission" src={firstOrder2} alt="Badge" />
                            </span>
                        } */}

                    </div>
                    {missionCompleted &&
                        <Button
                            className={'MissionCollect'}
                            text="Riscuoti!"
                            callback={this.handleClaim(e, i)}
                        />}
                </li>
            </ul>
        </div>
    }



    render() {
        return (
            <>
                {this.state.loadingRender &&
                    <div className="MissionContainer">
                        <h1 style={{ fontSize: '1.4rem', color: 'var(--primary-dark)' }}>Le mie missioni</h1>
                        {
                            this.state.allMissions.map(this.printMissions)/* .sort((a, b) => a.claim > b.claim ? -1 : 1) */
                        }
                    </div>
                }
            </>
        )
    }
}

const mapStateToProps = state => ({
    tokenDuck: state.tokenDuck
})

export default connect(mapStateToProps)(Mission);