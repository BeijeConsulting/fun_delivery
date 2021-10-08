import { Component } from "react";
import { withTranslation } from 'react-i18next';
import { orderBy as _orderBy, cloneDeep as _cloneDeep } from "lodash";
import constantsDictionary from '../../../common/utils/constantsDictionary';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import properties from "../../../common/utils/properties";
import i18n from "../../../common/localization/i18n";
import './MyOrders.css';
import 'antd/dist/antd.css';
import { SearchOutlined } from '@ant-design/icons';
import { Table } from 'antd';


class MyOrders extends Component {

    constructor(props) {
        super(props);

        this.status = constantsDictionary.ORDER_STATUS

        //Order simulated from backend
        this.all_orders = [
            {
                order_id: 0,
                customer_name: "Lorenzo Chiesa",
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
                order_id: 1,
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
                order_id: 2,
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
                        quantity: 1
                    }
                ],
                status: "completed"
            },
            {
                order_id: 3,
                customer_name: "Simone Micalizzi",
                customer_address: "Una via a Milano",
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
                order_id: 4,
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
                status: "preparing"
            },
        ]

        //Orders with modifed status to show emoji's instead of status
        this.all_ordersModifiedStatus = _cloneDeep(this.all_orders)
        this.columns = [
            {
                title: 'Ordine',
                dataIndex: 'order_id',
                key: 'order_id',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.order_id - b.order_id,
            },
            {
                title: 'Stato',
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
                        text: i18n.t('backoffice.useful_constants.order_status.confirmed'),
                        value: '🔵',
                    }
                ],
                key: 'status',
                onFilter: (value, record) => record.status.indexOf(value) === 0,
            },
            {
                title: 'Indirizzo',
                dataIndex: 'customer_address',
                key: 'customer_address',
                ellipsis: true,
            },
            {
                title: 'Visualizza ordine',
                dataIndex: 'order_id',
                key: 'action',
                render: (order_id) => (
                  <SearchOutlined onClick={this.handleCallbackPageSingleOrder(order_id)} />
                ),

            },

        ];
    }

    componentDidMount() {
        this.mapObjectForEmojiStatus(this.all_ordersModifiedStatus)
    //     this.orderByDescOrders(this.all_orders)
    //     this.mapObjectForEmojiStatus(this.all_orders)
    // }

    // orderByDescOrders(orders) {
    //     let desc_orders = _orderBy(orders, ['order_id'], ['desc'])
    //     this.setState({
    //         orders: desc_orders
    //     })
    }

    mapObjectForEmojiStatus = (order) => {
        order.map((item) => {
            item.status = this.handleEmojiStatus(item.status)
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
            case "completed":
                emojiToShow = "🔵"
                break;
            default:
        }
        return emojiToShow
    }

    // handleImageStatus = (status) => {
    //     let imageToShow = ""
    //     switch (status) {
    //         case "confirmed":
    //             imageToShow = confirmed
    //             break;
    //         case "delivering":
    //             imageToShow = delivering
    //             break;
    //         case "preparing":
    //             imageToShow = preparing
    //             break;
    //         case "completed":
    //             imageToShow = completed
    //             break;
    //         default:

    //     }
    //     return imageToShow
    // }


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
        console.log("lo prende")
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
                <LayoutBackOffice pageTitle="MY ORDERS">
                    <div className="bo-order-container">
                        <div className="bo-order-first-row">
                            <div className="bo-order-welcome">
                                <h2>{t('backoffice.screens.my_orders.your_orders')}</h2>
                            </div>
                        </div>
                        <div className="bo-order-form">
                            <Table 
                            tableLayout={undefined} 
                            pagination={false} 
                            dataSource={this.all_ordersModifiedStatus} 
                            columns={this.columns} 
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