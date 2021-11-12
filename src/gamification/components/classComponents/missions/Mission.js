import React, {Component} from "react";

import './Mission.css'
import properties from "../../../utilities/properties";
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
        this.missions = properties.missions.map((el, i) => { if (this.storage.mission.includes(i)) { el.claim = true } return el })

        this.state = {
            arr: this.missions,
            modalMission: false,
            modalAvatar: false,

            dataUser: null

            // storage: this.storage === null ? [] : this.storage,
        }
    }

    componentDidMount = ()=>{
        this.getDataApi()
    }

    getDataApi = async () => {
        properties.GENERIC_SERVICE = new genericServices();
        let dataUser = await properties.GENERIC_SERVICE.apiGET('/user/163', this.props.tokenDuck.token)
        console.log('get user id: ', dataUser)
        let statusCode = _get(dataUser, "status", null)
        let userRole = _get(dataUser, "permission", [])

        this.setState({
            dataUser: dataUser,
            loadingRender: true
        })
    }


    handleClaim = (e, i) => () => {
        let newStorage = this.state.dataUser
        let newArr = this.state.arr

        newStorage.mission.push(i)
        newStorage.experience = newStorage.experience >= 15000 ? newStorage.experience : newStorage.experience += e.exp
        newStorage.beijeCoin += e.beijeCoin
        if (e.badge !== null) {
            newStorage.badge.userBadges.push(e.badge)
        }
        newArr[i].claim = true

        localStorage.setItem('userInfo', JSON.stringify(newStorage))

        this.setState({
            storage: newStorage,
            arr: newArr
        })

        

    }

    printMissions = (e, i) => {

        return <div key={i} className="MissionMenuContainer">
            <ul className="MissionMenu">

                <li
                    style={this.missions[i].claim !== null ? { backgroundColor: '#b6b1b1' } : null}
                    className='MissionSingle'>
                    <div className="MissionSingleTitle">
                        <h2 style={{ color: 'var(--primary-dark', textAlign: 'center' }}>{e.title}</h2>
                        <p>{e.description}</p>
                    </div>
                    <div className="MissionAward">
                        {e.exp > 0 && e.beijeCoin > 0 &&
                            <>
                                <span className="MissionSub">
                                    <span>
                                        EXP:
                                    </span>
                                    {e.exp}
                                </span>
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
                            e.badge !== null &&
                            <span className="MissionSub">
                                <span>
                                    Badge: &nbsp;
                                </span>
                                {/* {e.badge} */}
                                <img className="badgeMission" src={firstOrder2} alt="Badge" />
                            </span>
                        }

                    </div>
                    {this.missions[i].claim === false &&
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
            <div className="MissionContainer">
                <h1 style={{ fontSize: '1.4rem', color: 'var(--primary-dark)' }}>Le mie missioni</h1>
                {
                    this.state.arr.map(this.printMissions).sort((a, b) => a.claim > b.claim ? -1 : 1)
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tokenDuck: state.tokenDuck
}) 

export default connect(mapStateToProps)(Mission);