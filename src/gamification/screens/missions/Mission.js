import UserNavbar from "../../../frontend/components/ui/userNavbar/UserNavbar";
import { Component } from "react";
import './Mission.css'
import Coin from '../../assets/images/beijeCoin.png'
import { isElementOfType } from "react-dom/test-utils";

const MISSIONS = [
    {
        title: 'Mangia con noi',
        description: 'Effettua il primo ordine',
        level: 1,
        exp: 50,
        beijeCoin: 5,
        check: false,
        id: 1
    },
    {
        title: 'Special One',
        description: 'Effettua almeno un ordine dalla special week',
        level: 1,
        exp: 70,
        beijeCoin: 10,
        check: false,
        id: 2
    },
    {
        title: 'Giochiamo insieme',
        description: 'Fai una partita ad un minigame',
        level: 1,
        exp: 80,
        beijeCoin: 15,
        check: false,
        id: 3

    },
    {
        title: 'Spendaccione',
        description: 'Compra almeno un avatar premium',
        level: 2,
        exp: 110,
        beijeCoin: 35,
        check: false,
        id: 4

    },
    {
        title: 'Capitano 20',
        description: 'Spendi almeno 20 euro per un ordine',
        level: 2,
        exp: 150,
        beijeCoin: 50,
        check: false,
        id: 5
    },
    {
        title: 'King',
        description: 'Ordina da tre categorie diverse',
        level: 2,
        exp: 300,
        beijeCoin: 70,
        check: false,
        id: 6

    }
]

class Mission extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: MISSIONS,
            modalMission: false,
            modalAvatar: false

        }
    }
    controllCheck = () => {
        let arr = this.state.arr;
        let count = 0
        arr.map((element, key) => {
            if (element.check === true) {
                count = count + 1
            }
        })

        if (count === this.state.arr.length) {
            this.setState({ arr: [] })

        }
    }
    componentDidMount() {
        this.controllCheck()
    }

    printMissions = (e, i) => {

        if (e.check === false) {

            return <div key={i} className="MissionMenuContainer">
                <ul className="MissionMenu">
                    <li className={e.level === 2 ? 'MissionSingle sepia' : 'MissionSingle'} key={i} style={{ background: e.level === 2 ? 'rgba(153, 147, 147, 0.534)' : '' }} >

                        <div className="MissionSingleTitle">
                            <h2>{e.title}</h2>
                            <p>{e.description}</p>

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
                                +{e.beijeCoin}
                                <img className="BeijeCoinMission" src={Coin} alt="BeijeCoin" />
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        }
    }


    render() {
        return (
            <div className="MissionContainer">
                <h1>Le mie missioni</h1>
                {this.state.arr.length > 0 &&
                    this.state.arr.map(this.printMissions)
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