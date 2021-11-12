
import Button from "../../../../common/components/ui/button/Button"
import { Component } from "react";
import './UserOrders.css'
import Coin from '../../../../common/assets/BeijeCoin.png'
import properties from "../../../../gamification/utilities/properties";
import { connect } from "react-redux";


class UserOrders extends Component {
    constructor(props) {
        super(props);
        this.storage = JSON.parse(localStorage.getItem('userInfo'))
        this.userOrders = properties.userOrders

        this.state = {
            arr: this.userOrders,
            modalMission: false,
            modalAvatar: false,
            storage: this.storage === null ? [] : this.storage,
        }
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



    printMissions = (e, i) => {

        return <div key={i} className="MissionMenuContainer">
            <ul className="UserOrdersMenu">

                <li className='UserOrderSingle'>
                    <div className="OrderSingleTitle">
                        <h2 style={{ color: 'var(--primary-dark' }}><span style={{ color: 'var(--primary-dark)', fontSize: "16px" }}>Ristorante:&nbsp;&nbsp;&nbsp;</span>{e.title}</h2>
                    </div>
                    <div className="UserOrdersDatas">
                        <p>Data: {e.description}</p>
                        <span className="MissionSub">
                            <span>
                                Fattura:&nbsp;&nbsp;
                            </span>
                            €{e.cost}
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    }


    render() {
        return (
            <div className="MissionContainer">
                <h1 style={{ fontSize: '1.4rem', color: 'var(--primary-dark)' }}>I miei ordini</h1>
                {
                    this.state.arr.map(this.printMissions)
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tokenDuck: state.tokenDuck
}) 

export default connect(mapStateToProps)(UserOrders);