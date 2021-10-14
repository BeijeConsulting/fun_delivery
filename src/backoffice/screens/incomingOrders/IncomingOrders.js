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
        this.all_orders = JSON.parse(localStorage.getItem('localStorageData')).order_list
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
                <LayoutBackOffice pageTitle={t('backoffice.screens.incoming_orders.title')}>
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