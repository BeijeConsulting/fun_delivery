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
            statuses: null,
            showTimeline: false,
            //this.foundOrder.status !== "pending",
        };
        console.log("props: ", props)
    }

    //Mapping the food ordered by the customer
    componentDidMount = async () => {
        this.getSingleOrder()
        this.getStatusesForTimeline()
    }

    getSingleOrder = async () => {
        let errorToSave = false
        properties.GENERIC_SERVICE = new genericServices();
        let response = await properties.GENERIC_SERVICE.apiGET(`order/${this.props.location.state.order_id}/restaurant`, this.props.tokenDuck.token)
        let statusCode = _get(response, "status", null)
        if (statusCode === "401") {
            errorToSave = true; //deve dare un errore
        }

        console.log("riposta single order: ", response)
        this.setState({
            order: response,
            error: errorToSave
        })
    }

    getStatusesForTimeline = async () => {
        let errorToSave = false
        properties.GENERIC_SERVICE = new genericServices();
        let response = await properties.GENERIC_SERVICE.apiGET('/orderstatuses', this.props.tokenDuck.token)
        let statusCode = _get(response, "status", null)
        if (statusCode === "401") {
            errorToSave = true; //deve dare un errore
        }

        console.log("riposta stati response: ", response)

        this.setState({
            statuses: response,
            error: errorToSave
        })
    }

    handleShowTimelineAccept = () => {
        this.setState({
            showTimeline: true,
        });
        this.handleStatusTimeline(2) //2 è id stato approvato
    };

    handleShowTimelineReject = () => {
        this.handleStatusTimeline(3) //3 è id stato rifiutato
    };

    //Callback di timeline per aggiornare lo stato dell'ordine
    handleStatusTimeline = async (e) => {
        let errorToSave = false
        properties.GENERIC_SERVICE = new genericServices();
        let response = await properties.GENERIC_SERVICE.apiPUT(`/order/update/${this.props.location.state.order_id}/status/${e}`, {}, this.props.tokenDuck.token)
        let statusCode = _get(response, "status", null)
        console.log("risposta handleStatus: ", response)
        if (statusCode === "401") {
            errorToSave = true;
        }
        this.setState({
            order: response,
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
                                {this.state.order.statusId !== 3 && this.state.order.statusId !== 1 && (
                                    <div>
                                        <Timeline
                                            callback={this.handleStatusTimeline}
                                            currentStep={this.state.order.statusId}
                                            statuses={this.state.statuses}
                                        />
                                    </div>
                                )}

                                {this.state.order.statusId === 1 && (
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

                                {this.state.order.statusId === 3 && (
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
                                                            {t("backoffice.screens.single_order.price")}:{" €"}{item.price}
                                                            <br />
                                                            {t("backoffice.screens.single_order.description")}:{" "}
                                                            {item.description} <br />
                                                            {t("backoffice.screens.single_order.quantity")}:{" "}
                                                            {item.quantity} <br />
                                                        </li>
                                                    </ul>
                                                );
                                            })}
                                        <div className="list-style" style={{ width: "100%" }}>
                                            {t("backoffice.screens.single_order.total_before_discount")}: €
                                            {this.state.order.total}<br />
                                            {t("backoffice.screens.single_order.discount")}: €
                                            {this.state.order.discountValue}
                                        </div>
                                        <div style={{ padding: "10px" }}>
                                            {t("backoffice.screens.single_order.total")}: €
                                            {this.state.order.total - this.state.order.discountValue}
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
