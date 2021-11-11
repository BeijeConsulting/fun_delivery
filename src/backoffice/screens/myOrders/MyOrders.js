import { Component } from "react";
import { withTranslation } from 'react-i18next';
import { cloneDeep as _cloneDeep } from "lodash";
import constantsDictionary from '../../../common/utils/constantsDictionary';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import properties from "../../../common/utils/properties";
import genericServices from "../../../common/utils/genericServices";
import i18n from "../../../common/localization/i18n";
import './MyOrders.css';
import 'antd/dist/antd.css';
import { SearchOutlined } from '@ant-design/icons';
import { Table, Tooltip } from 'antd';
import restaurantIdDuck from "../../../common/redux/duck/restaurantIdDuck";
import { connect } from "react-redux";

class MyOrders extends Component {

    constructor(props) {
        super(props);
        this.status = constantsDictionary.ORDER_STATUS
        // this.all_orders = JSON.parse(localStorage.getItem('localStorageData')).order_list
        this.state = {
            all_orders: [],
            all_ordersModifiedStatus: [],
            statusesOrders: []
        }

        //Orders with modifed status to show emoji's instead of status
        // this.all_ordersModifiedStatus = _cloneDeep(this.all_orders)
        this.columns = [
            {
                title: i18n.t('backoffice.screens.common_screens.order'),
                dataIndex: 'id',
                key: '1',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.id - b.id,
            },
            {
                title: i18n.t('backoffice.screens.my_orders.status'),
                dataIndex: 'status',
                filters: [
                    {
                        text: i18n.t('backoffice.useful_constants.order_status.approved'),
                        value: '🟣',
                    },
                    {
                        text: i18n.t('backoffice.useful_constants.order_status.completed'),
                        value: '🟢',
                    },
                    {
                        text: i18n.t('backoffice.useful_constants.order_status.delivering'),
                        value: '🟡',
                    },
                    {
                        text: i18n.t('backoffice.useful_constants.order_status.preparing'),
                        value: '🟠',
                    },
                    {
                        text: i18n.t('backoffice.useful_constants.order_status.pending'),
                        value: '🔵',
                    },
                    {
                        text: i18n.t('backoffice.useful_constants.order_status.rejected'),
                        value: '🔴',
                    }
                ],
                key: '2',
                onFilter: (value, record) => record.status.indexOf(value) === 0,
            },
            {
                title: i18n.t('backoffice.screens.common_screens.address'),
                dataIndex: 'shippingAddress',
                key: '3',
                ellipsis: {
                    showTitle: false
                },
                render: shippingAddress => (
                    <Tooltip placement="topLeft" color={"#f24364"} title={shippingAddress}>
                        {shippingAddress}
                    </Tooltip>
                ),
            },
            {
                title: i18n.t('backoffice.screens.my_orders.show'),
                dataIndex: 'order_id',
                key: '4',
                render: (order_id) => (
                    <SearchOutlined onClick={this.handleCallbackPageSingleOrder(order_id)} />
                ),
            },
        ];
    }

    componentDidMount = async() => {
        let ordersToSave = await this.getOrders()
        let statusesToSave = await this.getStatuses()
        //converto array in oggetto
        statusesToSave = this.arrayToObject(statusesToSave)
        this.mapObjectForEmojiStatus(ordersToSave, statusesToSave)
        this.setState({
            orders: ordersToSave,
            all_ordersModifiedStatus: ordersToSave,
            statusesOrders: statusesToSave
        })
    }

    getOrders = async() => {
        properties.GENERIC_SERVICE = new genericServices();
        let response = await properties.GENERIC_SERVICE.apiGET(`/order/restaurant/${this.props.restaurantIdDuck.restaurant_id}`, this.props.tokenDuck.token)
        return response
    }

    getStatuses = async() => {
        properties.GENERIC_SERVICE = new genericServices();
        let response = await properties.GENERIC_SERVICE.apiGET('/orderstatuses/', this.props.tokenDuck.token)
        return response
    }

    arrayToObject = (array) => {
        let objToReturn = {}
        for(let element of array){
            objToReturn[element.id] = element.status 
        }
        return objToReturn
    }

    mapObjectForEmojiStatus = (order, statuses) => {
        order.map((item) => item.status = this.handleEmojiStatus(statuses[item.statusId]))
    }

    handleEmojiStatus = (status) => {
        let emojiToShow = ""
        switch (status) {
            case "approved":
                emojiToShow = "🟣"
                break;
            case "completed":
                emojiToShow = "🟢"
                break;
            case "delivering":
                emojiToShow = "🟡"
                break;
            case "preparing":
                emojiToShow = "🟠"
                break;
            case "pending":
                emojiToShow = "🔵"
                break;
            case "rejected":
                emojiToShow = "🔴"
                break;
            default:
                emojiToShow = i18n.t('backoffice.useful_constants.order_status.error');
        }
        return emojiToShow
    }

    handleSelect = (e) => {
        let filtered_orders = []
        filtered_orders = e.target.value === "all" ? this.all_orders : this.all_orders.filter((item) => item.status === e.target.value)
        this.setState({
            orders: filtered_orders
        })
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
                <LayoutBackOffice pageTitle={t('backoffice.screens.my_orders.title')}>
                    <div className="bo-profile-container">
                        <div className="bo-mymenu-first-row align-left">
                            <div className="bo-mymenu-welcome">
                                <h2>{t('backoffice.screens.my_orders.your_orders')}</h2>
                            </div>
                        </div>

                        <section>
                            <div className="bo-mymenu-form">
                                <Table
                                    rowKey={record => record.order_id}
                                    pagination={false}
                                    dataSource={this.state.all_ordersModifiedStatus}
                                    columns={this.columns}
                                    size={'small'}
                                    bordered
                                    scroll={{ x: 450, y: 500 }} />
                            </div>
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

export default connect(mapStateToProps)(withTranslation()(MyOrders))