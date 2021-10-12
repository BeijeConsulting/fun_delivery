import { Component } from "react";
import { withTranslation } from 'react-i18next';
import { cloneDeep as _cloneDeep } from "lodash";
import constantsDictionary from '../../../common/utils/constantsDictionary';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import properties from "../../../common/utils/properties";
import i18n from "../../../common/localization/i18n";
import './MyOrders.css';
import 'antd/dist/antd.css';
import { SearchOutlined } from '@ant-design/icons';
import { Table, Tooltip } from 'antd';


class MyOrders extends Component {

    constructor(props) {
        super(props);
        this.status = constantsDictionary.ORDER_STATUS
        //Order simulated from backend
        this.all_orders = [
            {
                order_id: 34221,
                customer_name: "Marco Brambilla",
                customer_address: "Una via a Milano",
                ordered: [
                    {
                        nameFood: "Margherita",
                        price: 6,
                        quantity: 1
                    },
                    {
                        nameFood: "Napoli",
                        price: 6,
                        quantity: 2
                    },
                    {
                        nameFood: "Coca cola",
                        price: 2.5,
                        quantity: 2
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
                        price: 6,
                        quantity: 1
                    },
                    {
                        nameFood: "Napoli",
                        price: 6,
                        quantity: 2
                    },
                    {
                        nameFood: "Coca cola",
                        price: 2.5,
                        quantity: 2
                    }
                ],
                status: "pending"
            },
            {
                order_id: 34224,
                customer_name: "Simone Micalizzi",
                customer_address: "Una via a Palermo",
                ordered: [
                    {
                        nameFood: "Margherita",
                        price: 6,
                        quantity: 1
                    },
                    {
                        nameFood: "Napoli",
                        price: 6,
                        quantity: 2
                    },
                    {
                        nameFood: "Coca cola",
                        price: 2.5,
                        quantity: 1
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
                        price: 6,
                        quantity: 1
                    },
                    {
                        nameFood: "Napoli",
                        price: 10,
                        quantity: 2
                    },
                    {
                        nameFood: "Coca cola",
                        price: 2,
                        quantity: 5
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
                        price: 6,
                        quantity: 1
                    },
                    {
                        nameFood: "Napoli",
                        price: 6,
                        quantity: 2
                    },
                    {
                        nameFood: "Coca cola",
                        price: 2.5,
                        quantity: 2
                    }
                ],
                status: "preparing"
            },
        ]
        //Orders with modifed status to show emoji's instead of status
        this.all_ordersModifiedStatus = _cloneDeep(this.all_orders)
        this.columns = [
            {
                title: i18n.t('backoffice.screens.common_screens.order'),
                dataIndex: 'order_id',
                key: '1',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.order_id - b.order_id,
            },
            {
                title: i18n.t('backoffice.screens.my_orders.status'),
                dataIndex: 'status',
                filters: [
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
                dataIndex: 'customer_address',
                key: '3',
                ellipsis: {
                    showTitle: false
                },
                render: customer_address => (
                    <Tooltip placement="topLeft" color={"#f24364"} title={customer_address}>
                        {customer_address}
                    </Tooltip>
                ),
            },
            {
                title: 'Visualizza',
                dataIndex: 'order_id',
                key: '4',
                render: (order_id) => (
                    <SearchOutlined onClick={this.handleCallbackPageSingleOrder(order_id)} />
                ),
            },
        ];
    }

    componentDidMount() {
        this.mapObjectForEmojiStatus(this.all_ordersModifiedStatus)
    }

    mapObjectForEmojiStatus = (order) => {
        order.map((item) => {
            return (
                item.status = this.handleEmojiStatus(item.status)
            )
        })
    }

    handleEmojiStatus = (status) => {
        let emojiToShow = ""
        switch (status) {
            case "confirmed":
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
        let foundOrder = {}
        foundOrder = this.all_orders.find((order) => order.order_id === orderID)
        this.props.history.push(properties.BO_ROUTING.SINGLE_ORDER, {
            // order: foundOrder,
            // titlePage: "#" + orderID,
            order_id: orderID,
        })
    }

    handleClickButton = (e) => {
        i18n.changeLanguage(e.target.value);
    }

    render() {
        const { t } = this.props
        return (
            <>
                <LayoutBackOffice pageTitle="MY ORDERS">
                    <div className="bo-profile-container">
                        <div className="bo-mymenu-first-row align-left">
                            <div className="bo-mymenu-welcome">
                                <h2>{t('backoffice.screens.my_orders.your_orders')}</h2>
                            </div>
                        </div>
                        <div className="bo-mymenu-form">
                            <Table
                                rowKey={record => record.order_id}
                                pagination={false}
                                dataSource={this.all_ordersModifiedStatus}
                                columns={this.columns}
                                size={'small'}
                                bordered
                                scroll={{ x: 450, y: 500 }} />
                        </div>
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

export default withTranslation()(MyOrders)