import { Component } from "react";
import { withTranslation } from "react-i18next";
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import Button from "../../../common/components/ui/button/Button";
import Timeline from "../../components/ui/timeline/Timeline";
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import BackPageButton from "../../components/ui/backPageButton/BackPageButton";
import genericServices from '../../../common/utils/genericServices';
import properties from '../../../common/utils/properties';
import { connect } from 'react-redux';
import { get as _get } from 'lodash';
import "./SingleOrder.css";

class RestaurantSingleOrder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            order: null,
            error: false,
            order_status: null, //necessario per la timeline
            showTimeline: false,
            //this.foundOrder.status !== "pending",
            total_price: 0,
        };
    }

    //Mapping the food ordered by the customer
    componentDidMount = async () => {
        let errorToSave = false
        let sumToSave = 0
        properties.GENERIC_SERVICE = new genericServices();
        let response = await properties.GENERIC_SERVICE.apiGET(`order/${this.props.location.state.order_id}/restaurant`, this.props.tokenDuck.token)
        let statusCode = _get(response, "status", null)
        console.log("response: ", response)
        if (statusCode === "401") {
            errorToSave = true; //deve dare un errore
        }
        else {
            sumToSave = this.totalPriceOrder(response);
        }
        this.setState({
            order: response,
            total_price: sumToSave,
            error: errorToSave
        })
    }

    getSingleOrder = async () => {
        let errorToSave = false
        let sumToSave = 0
        properties.GENERIC_SERVICE = new genericServices();
        let response = await properties.GENERIC_SERVICE.apiGET(`order/${this.props.location.state.order_id}/restaurant`, this.props.tokenDuck.token)
        let statusCode = _get(response, "status", null)
        console.log("response: ", response)
        if (statusCode === "401") {
            errorToSave = true; //deve dare un errore
        }
        else {
            sumToSave = this.totalPriceOrder(response);
        }
        this.setState({
            order: response,
            total_price: sumToSave,
            error: errorToSave
        })
    }

    handleShowTimelineAccept = () => {
        this.setState({
            showTimeline: true,
        });
        this.handleStatusTimeline("approved")
    };

    handleShowTimelineReject = () => {
        this.handleStatusTimeline("rejected")
    };

    totalPriceOrder = (order) => {
        let sum = 0;
        console.log("order: ", order)
        order.items.map((item) => (sum += item.price));
        return sum;
    };

    //Funzione per salvare nel local storage va qui. Callback di timeline, nella quale passiamo l'oggetto ordini
    handleStatusTimeline = async(e) => {
        let errorToSave = false
        let orderStatusToSave = null
        properties.GENERIC_SERVICE = new genericServices();
        let response = await properties.GENERIC_SERVICE.apiGET(`/orders/update/${this.props.location.state.order_id}/status/${e}`, this.props.tokenDuck.token)
        let statusCode = _get(response, "status", null)
        console.log("response: ", response)
        if (statusCode === "401") {
            errorToSave = true; //deve dare un errore
        }
        else {
            orderStatusToSave = e
        }
        // this.ordersLocalStorage.order_list.find((item) => item.order_id === this.props.location.state.order_id).status = e;
        // localStorage.setItem("localStorageData", JSON.stringify(this.ordersLocalStorage));
        this.setState({
            order_status: orderStatusToSave,
            error: errorToSave
        });
    };

    render() {
        const { t } = this.props;
        return (
            <>
                {
                    this.state.error &&
                    //Componente errore da creare
                    <div>
                        <p>Errore generico</p>
                    </div>
                }
                {this.state.order !== null &&
                    <LayoutBackOffice pageTitle="MY MENU">
                        <div className="bo-profile-container bo-single-order">
                            <div className="bo-mymenu-first-row">
                                <div className="bo-mymenu-welcome">
                                    <h2>
                                        {t("backoffice.screens.common_screens.order")}
                                        {" #"}
                                        {this.props.location.state.order_id}
                                    </h2>
                                </div>
                                <BackPageButton
                                    classProp={"bo-mymenu-welcome"}
                                    historyProp={this.props.history}
                                />
                            </div>

                            <section>
                                {this.state.showTimeline && this.state.order_status !== "rejected" && (
                                    <div>
                                        <Timeline
                                            callback={this.handleStatusTimeline}
                                            currentStep={this.state.order_status}
                                        />
                                    </div>
                                )}

                                {!this.state.showTimeline && this.state.order_status !== "rejected" && (
                                    <div className="btn-orders-container">
                                        <Button
                                            className="bo-btn single-order"
                                            value="approve"
                                            text={t("backoffice.screens.single_order.approve")}
                                            callback={this.handleShowTimelineAccept}
                                        />
                                        <Button
                                            className="bo-btn single-order"
                                            value="dontapprove"
                                            text={t("backoffice.screens.single_order.dont_approve")}
                                            callback={this.handleShowTimelineReject}
                                        />
                                    </div>
                                )}

                                {this.state.order_status === "rejected" && (
                                    <div className="bo-mymenu-welcome">
                                        <h2>{t("backoffice.screens.single_order.rejected_title")}</h2>
                                    </div>
                                )}
                            </section>

                            <div className="bo-profile-form">

                                <section>
                                    <div>
                                        <InputBox
                                            className="bo-input-box"
                                            name="customer_address"
                                            disable={true}
                                            type="text"
                                            // value={this.props.location.state.order.customer_address}
                                            value={`${t("backoffice.screens.single_order.date")}: ${this.state.order.date
                                                }`}
                                        />
                                    </div>
                                    <div className="bo-profile-flex-inputs">
                                        <InputBox
                                            className="bo-input-box"
                                            name="customer_name"
                                            disable={true}
                                            value={`${t(
                                                "backoffice.screens.single_order.customer_name"
                                            )}: ${this.state.order.userFirstname + " " + this.state.order.userLastname}`}
                                        />

                                        <InputBox
                                            className="bo-input-box"
                                            name="customer_address"
                                            disable={true}
                                            value={`${t("backoffice.screens.common_screens.address")}: ${this.state.order.shippingAddress
                                                }`}
                                        />
                                    </div>
                                </section>

                                <section>
                                    <h2> {t("backoffice.screens.single_order.ordered_food")}:</h2>

                                    <div className="list-group-item orders" name="foodOrdered">
                                        {
                                            this.state.order.items.map((item, index) => {
                                                return (
                                                    <ul
                                                        key={index}
                                                        className="list-style"
                                                        style={{ width: "100%" }}
                                                    >
                                                        <li>
                                                            {item.name} <br />
                                                            {t("backoffice.screens.single_order.price")}:{" "}{item.price}
                                                            <br />
                                                            {t("backoffice.screens.single_order.description")}:{" "}
                                                            {item.description} <br />
                                                            {t("backoffice.screens.single_order.quantity")}:{" "}
                                                            {item.quantity} <br />
                                                        </li>
                                                    </ul>
                                                );
                                            })}
                                        <div style={{ padding: "10px" }}>
                                            {t("backoffice.screens.single_order.total")}: €
                                            {this.state.total_price}
                                        </div>
                                    </div>
                                </section>

                            </div>
                        </div>
                    </LayoutBackOffice>
                }
            </>
        );
    }
}

const mapStateToProps = state => ({
    tokenDuck: state.tokenDuck,
    restaurantIdDuck: state.restaurantIdDuck
})

export default connect(mapStateToProps)(withTranslation()(RestaurantSingleOrder));
