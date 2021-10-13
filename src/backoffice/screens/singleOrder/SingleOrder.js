import { Component } from "react";
import { withTranslation } from "react-i18next";
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import Button from "../../../common/components/ui/button/Button";
import Timeline from "../../components/ui/timeline/Timeline";
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import "./SingleOrder.css";
import BackPageButton from "../../components/ui/backPageButton/BackPageButton";
class RestaurantSingleOrder extends Component {
    constructor(props) {
        super(props);
        // this.orderList = JSON.parse(localStorage.getItem('localStorageData')).order_list.filter(item => item.order_id===this.props.location.state.order.order_id);
        this.ordersLocalStorage = JSON.parse(localStorage.getItem('localStorageData'))
        this.foundOrder = this.ordersLocalStorage.order_list.find(item => item.order_id === this.props.location.state.order_id)
        this.state = {
            order: this.foundOrder,
            showTimeline: this.foundOrder.status !== "pending",
            total_price: this.totalPriceOrder(),
        };
    }

    //Mapping the food ordered by the customer
    componentDidMount() {
        this.totalPriceOrder();
        console.log(this.props.location.state);
    }

    handleCallbackGoBack = () => {
        this.props.history.goBack();
    };

    handleShowTimeline = () => {
        this.setState({ showTimeline: true });
    };

    totalPriceOrder = () => {
        let sum = 0;
        // Far funzionare questa funzione
        this.foundOrder.ordered.map((item) => (sum += item.price));
        return sum;
    };

    render() {
        const { t } = this.props;
        return (
            <LayoutBackOffice pageTitle="MY MENU">
                <div className="bo-profile-container bo-single-order">
                    <div className="bo-mymenu-first-row">
                        <div className="bo-mymenu-welcome">
                            <h2>
                                {t("backoffice.screens.common_screens.order")}{" #"}
                                {this.props.location.state.order_id}
                            </h2>
                        </div>
                        <BackPageButton classProp={"bo-mymenu-welcome"} callback={this.handleCallbackGoBack} />
                        {/* <div
                            className="bo-mymenu-welcome"
                            onClick={this.handleCallbackGoBack}
                        >
                            <h3>
                                <LeftOutlined />
                            </h3>
                            <h3>{t("backoffice.screens.single_order.back")}</h3>
                        </div> */}
                    </div>

                    {this.state.showTimeline && (
                        <div>
                            <Timeline />
                        </div>
                    )}

                    {this.state.showTimeline !== true && (
                        <div className="btn-orders-container">
                            <Button
                                className="bo-btn single-order"
                                value="approve"
                                text={t("backoffice.screens.single_order.approve")}
                                callback={this.handleShowTimeline}
                            />
                            <Button
                                className="bo-btn single-order"
                                value="dontapprove"
                                text={t("backoffice.screens.single_order.dont_approve")}
                            />
                        </div>
                    )}

                    <div className="bo-profile-form">
                        <div>
                            <InputBox
                                className="bo-input-box"
                                name="customer_address"
                                disable={true}
                                type="text"
                                // value={this.props.location.state.order.customer_address}
                                value={`${t(
                                    "backoffice.screens.single_order.date"
                                )}: ${this.state.order.date}`}
                            />
                        </div>
                        <div className="bo-profile-flex-inputs">
                            <InputBox
                                className="bo-input-box"
                                name="customer_name"
                                disable={true}
                                value={`${t(
                                    "backoffice.screens.single_order.customer_name"
                                )}: ${this.state.order.customer_name}`}
                            />

                            <InputBox
                                className="bo-input-box"
                                name="customer_address"
                                disable={true}
                                value={`${t("backoffice.screens.common_screens.address")}: ${this.state.order.customer_address
                                    }`}
                            />
                        </div>

                        <h2> {t("backoffice.screens.single_order.ordered_food")}:</h2>

                        <div className="list-group-item orders" name="foodOrdered">
                            {this.state.order.ordered.map((item, index) => {
                                return (
                                    <ul
                                        key={index}
                                        className="list-style"
                                        style={{ width: "100%" }}
                                    >
                                        <li>
                                            {item.nameFood} <br />
                                            {t("backoffice.screens.single_order.price")}: {item.price}{" "}
                                            <br />
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
                    </div>
                </div>
            </LayoutBackOffice>
        );
    }
}

export default withTranslation()(RestaurantSingleOrder);
