import UserNavbar from "../../../frontend/components/ui/userNavbar/UserNavbar";
import Button from "../../../common/components/ui/button/Button"
import { Component } from "react";
import './Mission.css'
import Coin from '../../assets/images/beijeCoin.png'
import { isElementOfType } from "react-dom/test-utils";
import properties from "../../utilities/properties";


class Mission extends Component {
    constructor(props) {
        super(props);
        this.storage = JSON.parse(localStorage.getItem('userInfo'))
        this.missions = properties.missions.map((el,i) => {if(this.storage.mission.includes(i)){el.claim = true}   return el})

        this.state = {
            arr: this.missions,
            modalMission: false,
            modalAvatar: false,
            storage: this.storage === null ? [] : this.storage,
        }
        console.log(this.state.storage)
    }

    // controllCheck = () => {
    //     let arr = this.state.arr;
    //     let count = 0
    //     arr.map((element, key) => {
    //         if (element.check === true) {
    //             count = count + 1
    //         }
    //     })

    //     if (count === this.state.arr.length) {
    //         this.setState({ arr: [] })

    //     }
    // }
    // componentDidMount() {
    //     this.controllCheck()
    // }

    handleClaim = (e, i) => () => {
        let newStorage = this.state.storage
        let newArr = this.state.arr

        newStorage.mission.push(i)
        newStorage.experience += e.exp
        newStorage.beijeCoin += e.beijeCoin
        newArr[i].claim=true

        this.setState({
            storage: newStorage,
            arr:newArr
        })

        localStorage.setItem('userInfo', JSON.stringify(newStorage))

    }

    printMissions = (e, i) => {

        return <div key={i} className="MissionMenuContainer">
            <ul className="MissionMenu">
                {/* <li className={e.level === 2 ? 'MissionSingle sepia' : 'MissionSingle'} key={i} style={{ background: e.level === 2 ? 'rgba(153, 147, 147, 0.534)' : '' }} > */}

                <li
                    style={this.missions[i].claim!==null ? { backgroundColor: 'rgba(153, 147, 147, 0.534)' } : null}
                    className='MissionSingle'>
                    <div className="MissionSingleTitle">
                        <h2>{e.title}</h2>
                        <p>{e.description}</p>
                        {this.missions[i].claim === false &&
                            <Button style={{backgroundColor: "var(--primary-strawberry)", padding: "5px 10px"}} text="Riscuoti!"
                                callback={this.handleClaim(e, i)}
                            />}
                    </div>
                    <div className="MissionAward">
                        <span className="MissionSub">
                            <span>
                                EXP:
                            </span>
                            {e.exp}
                        </span>
                        <span className="MissionSub">
                            <span>
                                BeijeCoin:
                            </span>
                            {e.beijeCoin}
                            <img className="BeijeCoinMission" src={Coin} alt="BeijeCoin" />
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    }


    render() {
        return (
            <div className="MissionContainer">
                <h1>Le mie missioni</h1>
                {this.state.arr.length > 0 &&
                    this.state.arr.map(this.printMissions).sort((a,b)=> a.claim > b.claim ? -1 : 1)
                }
                {
                    this.state.arr.length === 0 &&
                    <h2>Non ci sono piu Missioni</h2>
                }
            </div>
        )
    }
}


export default Mission;