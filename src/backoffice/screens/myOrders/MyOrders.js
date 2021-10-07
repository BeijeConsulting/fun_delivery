import { Component } from "react";
import { withTranslation } from 'react-i18next';
import {orderBy as _orderBy, keys as _keys, map as _map, values as _values, keysIn as _keysIn} from "lodash";
import constantsDictionary from '../../../common/utils/constantsDictionary'
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import Card from "../../components/funcComponents/card/Card"
import Select from "../../../common/components/ui/select/Select"
import utils from '../../../common/utils/utils'
import properties from "../../../common/utils/properties"
import delivering from '../../assets/images/truck.svg'
import preparing from '../../assets/images/in_progress.png'
import './MyOrders.css';
import 'antd/dist/antd.css';

class MyOrders extends Component {

    constructor(props) {
        super(props);

        this.all_orders = [
            {
                order_id: 1,
                customer_name: "Marco Brambilla",
                customer_address: "Una via a Milano",
                ordered: [
                    {
                        nameFood: "Margherita",
                    },
                    {
                        nameFood: "Napoli",
                    },
                    {
                        nameFood: "Coca cola",
                    }
                ],
                status: "confirmed"
            },
            {
                order_id: 0,
                customer_name: "Marco Brambilla",
                customer_address: "Una via a Milano",
                ordered: [
                    {
                        nameFood: "Margherita",
                    },
                    {
                        nameFood: "Napoli",
                    },
                    {
                        nameFood: "Coca cola",
                    }
                ],
                status: "confirmed"
            },
            {
                order_id: 3,
                customer_name: "Marco Brambilla",
                customer_address: "Una via a Milano",
                ordered: [
                    {
                        nameFood: "Margherita",
                    },
                    {
                        nameFood: "Napoli",
                    },
                    {
                        nameFood: "Coca cola",
                    }
                ],
                status: "delivering"
            },
            {
                order_id: 2,
                customer_name: "Marco Brambilla",
                customer_address: "Una via a Milano",
                ordered: [
                    {
                        nameFood: "Margherita",
                    },
                    {
                        nameFood: "Napoli",
                    },
                    {
                        nameFood: "Coca cola",
                    }
                ],
                status: "completed"
            },
        ]
        
        this.state = {
            orders: []
        }

        this.status = constantsDictionary.ORDER_STATUS
    }

    componentDidMount() {
        this.orderByDescOrders(this.all_orders)
    }

    orderByDescOrders(orders){
        let desc_orders = _orderBy(orders, ['order_id'], ['desc'])
        this.setState({
            orders: desc_orders
        })
    }

    handleSelect = (e) => {
        let filtered_orders = []
        filtered_orders = e.target.value==="all" ? this.all_orders : this.all_orders.filter((item) => item.status === e.target.value)
        this.setState({
            orders: filtered_orders
        })
        console.log(e.target.value)
    }

    handleCallbackPageSingleOrder = (order) => () => {
        this.props.history.push(properties.BO_ROUTING.SINGLE_ORDER, {
            order: order,
            titlePage: "#" + order.order_id,
            order_id: order.order_id,
        })
    }

    handleImageStatus = (status) => {
        return 
    }

    render() {
        const { t } = this.props
        return (
            <>
                <LayoutBackOffice
                    pageTitle="MY ORDERS"
                >
                    <div className="bo-order-container">
                        <div className="bo-order-first-row">

                            <div className="bo-order-welcome">
                                <h2>{t('backoffice.screens.my_orders.your_orders')}</h2>
                            </div>
                            <select
                                id="state"
                                name="state"
                                className="bo-select-order"
                                onChange={this.handleSelect}>
                                {
                                    Object.entries(this.status).map(([keyObject, label], index) => {
                                        return (
                                            <option value={keyObject} key={index}>
                                                {label}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="bo-order-form">
                            {
                                this.state.orders.map((order, index) => {
                                    console.log(order.status)
                                    return (
                                        <div className="bo-mymenu-flex-cards" key={index}>
                                            <Card
                                                title={t('backoffice.screens.my_orders.number_of_order') + order.order_id}
                                                img={`${properties.PATH_IMAGE + order.status}.png`}
                                                callback={this.handleCallbackPageSingleOrder(order)}
                                                // status={this.convertOrderStatus(order.status)}
                                                status = {this.status[order.status]}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

export default withTranslation()(MyOrders)