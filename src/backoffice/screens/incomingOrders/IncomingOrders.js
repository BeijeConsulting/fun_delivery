import React, { Component } from "react";
import { withTranslation } from 'react-i18next';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import properties from "../../../common/utils/properties";
import SingleOrder from '../../components/funcComponents/singleOrder/SingleOrder'
import 'antd/dist/antd.css';
import './IncomingOrders.css';


class IncomingOrders extends Component {
    constructor(props) {
        super(props);
        this.all_orders = [
            {
                order_id: 34221,
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
                order_id: 34220,
                customer_name: "Lorenzo Chiesa",
                customer_address: "Una via all'Elba",
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
                order_id: 34224,
                customer_name: "Simone Micalizzi",
                customer_address: "Una via a Palermo",
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
                status: "rejected"
            },
            {
                order_id: 34223,
                customer_name: "Enrico Paolazzi",
                customer_address: "Una via a Ferrara",
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
                order_id: 34222,
                customer_name: "Calogero Messina",
                customer_address: "Una via a Caltanissetta",
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
    }

    handleCallbackPageSingleOrder = (orderID) => () => {
        let foundOrder = {}
        foundOrder = this.all_orders.find((order) => order.order_id === orderID)
        this.props.history.push(properties.BO_ROUTING.SINGLE_ORDER, {
            order: foundOrder,
            titlePage: "#" + orderID,
            order_id: orderID,
        })
    }

    render() {
        const { t } = this.props
        return (
            <>
                <LayoutBackOffice pageTitle="IN ARRIVO">
                    <div className="bo-io-container">
                        <div className="bo-io-first-row">
                            <div className="bo-io-home">
                                <h2>{t('backoffice.screens.incoming_orders.title')}</h2>
                            </div>
                        </div>

                        <section>
                            {/* mapping ordini ricevuti */}
                            {this.all_orders.map((item, index) => {
                                return (
                                    <SingleOrder
                                        key={index}
                                        user={item.customer_name}
                                        ordered_text={t('backoffice.screens.incoming_orders.ordered_text')}
                                        button_text={t('common.components.button.show')}
                                        callbackRedirect={this.handleCallbackPageSingleOrder(item.order_id)} />
                                )
                            })}
                        </section>

                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

export default withTranslation()(IncomingOrders)