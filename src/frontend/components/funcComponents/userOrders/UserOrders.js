
import React, { Component } from "react";
import './UserOrders.css'
import properties from "../../../../common/utils/properties";
import genericServices from "../../../../common/utils/genericServices";
import { connect } from "react-redux";
import { get as _get } from 'lodash';
import moment from "moment";

class UserOrders extends Component {
    constructor(props) {
        super(props);

        this.state = {
            arr: this.userOrders,
            modalMission: false,
            modalAvatar: false,
            loadingRender: false,
            ordersUser: null,
            listRestaurants: null
        }
    }

    componentDidMount = () => {
        this.getDataApi()
    }

    getDataApi = async () => {
        properties.GENERIC_SERVICE = new genericServices();
        let ordersUser = await properties.GENERIC_SERVICE.apiGET(`/order/user/${this.props.userIdDuck.userID}`, this.props.tokenDuck.token)
        let statusCode = _get(ordersUser, "status", null)
        let userRole = _get(ordersUser, "permission", [])
        let listRestaurants = await properties.GENERIC_SERVICE.apiGET('/restaurants', this.props.tokenDuck.token)

        this.setState({
            loadingRender: true,
            ordersUser: ordersUser,
            listRestaurants: listRestaurants
        })
    }


    printOrders = (e, i) => {

        return <div key={i} className="MissionMenuContainer">
            <ul className="UserOrdersMenu">

                <li className='UserOrderSingle'>
                    <div className="OrderSingleTitle">
                        <h2 style={{ color: 'var(--primary-dark' }}><span style={{ color: 'var(--primary-dark)', fontSize: "16px" }}>Ristorante:&nbsp;&nbsp;&nbsp;</span>{this.filterRestaurant(e)()}</h2>
                    </div>
                    <div className="UserOrdersDatas">
                        <p>Data: {moment(e.date).format('L')}</p>
                        <span className="MissionSub">
                            <span>
                                Fattura:&nbsp;&nbsp;
                            </span>
                            €{e.total}
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    }


    filterRestaurant = (e) => () => {
        let restaurantName = this.state.listRestaurants.filter((item) => {
            if (item.id === e.restaurantId) {
                return (item.name)
            }
        })
        return(restaurantName[0].name)
    }


    render() {
        return (
            <>
                {
                    this.state.loadingRender &&
                    <div className="MissionContainer">
                        <h1 style={{ fontSize: '1.4rem', color: 'var(--primary-dark)' }}>I miei ordini</h1>
                        {
                            this.state.ordersUser.length>0 ? this.state.ordersUser.map(this.printOrders) : <p>Nessun ordine</p>
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

export default connect(mapStateToProps)(UserOrders);