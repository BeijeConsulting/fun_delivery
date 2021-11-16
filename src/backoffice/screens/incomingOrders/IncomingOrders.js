import React, { Component } from "react";
import { withTranslation } from 'react-i18next';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import SingleOrder from '../../components/funcComponents/singleOrder/SingleOrder'
import properties from "../../../common/utils/properties";
import genericServices from '../../../common/utils/genericServices';

import { connect } from 'react-redux';
import { get as _get } from 'lodash';

import 'antd/dist/antd.css';
import './IncomingOrders.css';


class IncomingOrders extends Component {
    constructor(props) {
        super(props);
        this.state={
            in_pending_orders: []
        }
    }

    componentDidMount = async() =>{
        properties.GENERIC_SERVICE = new genericServices();
        let response = await properties.GENERIC_SERVICE.apiGET(`order/restaurant/${this.props.restaurantIdDuck.restaurant_id}/1`, this.props.tokenDuck.token)
        let statusCode = _get(response, "status", null)

        if (statusCode === "401") {
            // error = true; //deve dare un errore
        }
        else {
            this.setState({
                in_pending_orders : response
            })
        }
    }

    handleCallbackPageSingleOrder = (orderID) => () => {
        
        this.props.history.push(properties.BO_ROUTING.SINGLE_ORDER, {
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
                            {this.state.in_pending_orders.map((item, index) => {
                                return (
                                    <SingleOrder
                                        key={index}
                                        user={item.userFirstname + " " + item.userLastname}
                                        ordered_text={t('backoffice.screens.incoming_orders.ordered_text')}
                                        button_text={t('common.components.button.show')}
                                        callbackRedirect={this.handleCallbackPageSingleOrder(item.id)} />
                                )
                            })}
                        </section>

                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

const mapStateToProps = state => ({
    tokenDuck: state.tokenDuck,
    restaurantIdDuck: state.restaurantIdDuck
})

export default connect(mapStateToProps)(withTranslation()(IncomingOrders))