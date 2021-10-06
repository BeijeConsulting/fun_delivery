import { Component } from "react";
import './MyOrders.css';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import Card from "../../components/funcComponents/card/Card"
import Select from "../../../common/components/ui/select/Select"
import properties from "../../../common/utils/properties";
import confirm from '../../assets/images/confirm.png'
import delivering from '../../assets/images/truck.svg'
import in_progress from '../../assets/images/in_progress.png'
import 'antd/dist/antd.css';
import {orderBy as _orderBy} from "lodash";

class MyOrders extends Component {

    constructor(props) {
        super(props);

        this.state = {
            orders: []
        }

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
                status: "confermato"
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
                status: "confermato"
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
                status: "in arrivo"
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
                status: "terminato"
            },
        ]

    }
    componentDidMount() {
        // let all_orders = JSON.parse(localStorage.getItem('localStorageData')).orders_list;        

        // let categoryPlates = allPlates.filter((plate, index) => {
        //     return plate.plate_category_id === this.restaurant_category;
        // })
       let asc_orders = _orderBy(this.all_orders, ['order_id'], ['desc'])
        this.setState({
            orders: asc_orders
        })
    }

    handleCallbackPageSingleOrder = (order) => () => {
        this.props.history.push(properties.BO_ROUTING.SINGLE_ORDER,{
            order: order,
            titlePage: "#" + order.order_id,
            order_id: order.order_id,  
        })
    }

    // Fare funzione che filtri per stato dell'ordine

    render() {
        return (
            <>
                <LayoutBackOffice
                    pageTitle="MY ORDERS"
                >
                    <div className="bo-order-container">
                        <div className="bo-order-first-row">

                            <div className="bo-order-welcome">
                                <h2>I tuoi ordini</h2>
                            </div>
                            <Select
                                selectID="state"
                                selectName="state"
                                data={['Tutti', 'Completati', 'In Consegna', 'In Preparazione']}
                                className="bo-select-order"
                            />
                        </div>
                        <div className="bo-order-form">
                            {
                                this.state.orders.map((order, index) => {
                                    return (
                                        <div className="bo-mymenu-flex-cards" key={index}>
                                            <Card
                                                title={order.order_id}
                                                img={confirm}
                                                callback={this.handleCallbackPageSingleOrder(order)}
                                                status={order.status}
                                            />
                                        </div>
                                    )
                                })
                            }

                            {/*                             
                             <div className="bo-order-flex-cards">
                                 <Card 
                                    title='Ordine #000'
                                    img={confirm}
                                    callback={this.handleCallbackPageSingleOrder}
                                    status = {'🟢 confermato'}
                                />
                            </div>
                            <div className="bo-order-flex-cards">
                                <Card
                                    title='Ordine #001'
                                    img={delivering}
                                    callback={this.handleCallbackPageSingleOrder}
                                    status = {'🔵 in arrivo'}
                                />
                            </div>
                            <div className="bo-order-flex-cards">
                                <Card
                                    title='Ordine #002'
                                    img={in_progress}
                                    callback={this.handleCallbackPageSingleOrder}
                                    status = {'🟡 in preparazione'}
                                />
                            </div> */}
                        </div>
                        {/* </div> */}
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

export default MyOrders