import React, { Component } from "react";

import './Mission.css'
import properties from "../../../../common/utils/properties";
import genericServices from "../../../../common/utils/genericServices";
import { get as _get } from 'lodash';
import { cloneDeep } from "lodash";
import { connect } from "react-redux";

//Import img
import firstOrder2 from "../../../assets/images/badges/firstOrder2.png"
import Coin from '../../../assets/images/beijeCoin.png'

import map from 'lodash'

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
            missionUser: null,
            badge_list: [],
            count: 1

            // storage: this.storage === null ? [] : this.storage,
        }
    }
    componentDidMount = () => {
        this.getDataApi()
    }
    getDataApi = async () => {
        properties.GENERIC_SERVICE = new genericServices();
        let allMissions = await properties.GENERIC_SERVICE.apiGET('/mission/list', this.props.tokenDuck.token)
        let badgeListAPI = await properties.GENERIC_SERVICE.apiGET("/badges", this.props.tokenDuck.token)
        let statusCode = _get(allMissions, "status", null)
        let userRole = _get(allMissions, "permission", [])
        let missionUser = await properties.GENERIC_SERVICE.apiGET(`/user_mission/list/${this.props.userIdDuck.userID}`, this.props.tokenDuck.token)
        this.setState({
            allMissions: allMissions,
            loadingRender: true,
            missionUser: missionUser,
            badge_list: badgeListAPI
        })
    }

    handleClaim = (e, i) => async () => {
        let missionId = this.state.missionUser.map(el => {
            if (el.missionId === e.id) {
                return el = el.id
            }
        })
            .filter(el => Number.isInteger(el) ? el : null)
            .join()
        let obj = {
            id: Number(missionId),
            userId: this.props.userIdDuck.userID,
            missionId: e.id,
            checked: 1
        }

        await properties.GENERIC_SERVICE.apiPUT(`/user_mission/update/${Number(missionId)}`, obj, this.props.tokenDuck.token)
        await this.getDataApi()

    }

    checkMissionUser = (e) => () => {

        let missionUser = this.state.missionUser
        let onlyId = missionUser.map(el => el = el.missionId)
        if (onlyId.includes(e.id)) {
            return true
        }

    }
    isClaimed = (e) => () => {
        let missionUser = this.state.missionUser

        return missionUser.map(el => {
            if (el.checked) {
                return el.missionId
            }
        }).filter(el => Number.isInteger(el) ? el : null)
    }


    render() {
        return (
            <>
                {this.state.loadingRender &&
                    <div className="MissionContainer">
                        <div className={"pseudo-mission pseudo-2-mission"}></div>
                        <h1 style={{ fontSize: '1.4rem', color: 'var(--primary-dark)' }}>Le mie missioni</h1>
                        {
                            this.state.allMissions.map((e, i) => {
                                let missionCompleted = this.checkMissionUser(e)()
                                let isClaimed = this.isClaimed(e)()
                                return <div key={i} className="MissionMenuContainer">
                                    <div className={"pseudo-mission pseudo-1-mission"}></div>
                                    <ul className="MissionMenu">
                                        <li
                                            style={missionCompleted ? { backgroundColor: "#b6b1b1ce" } : null}
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
                                                {
                                                    e.badgeId !== null &&
                                                    <span className="MissionSub">
                                                         <span>
                                                            Badge: &nbsp;
                                                        </span>
                                                        <img className="badgeMission" src={this.state.badge_list[e.badgeId-1].path} alt="Badge" />
                                                    </span>
                                                }
                                            </div>
                                            {missionCompleted && !isClaimed.includes(e.id) &&
                                                <Button
                                                    className={'MissionCollect'}
                                                    text="Riscuoti!"
                                                    callback={this.handleClaim(e, i)}
                                                />}
                                        </li>
                                    </ul>
                                </div>
                            })
                        }
                    </div>
                }
            </>
        )
    }
}
const mapStateToProps = state => ({
    tokenDuck: state.tokenDuck,
    userIdDuck: state.userIdDuck
})
export default connect(mapStateToProps)(Mission);