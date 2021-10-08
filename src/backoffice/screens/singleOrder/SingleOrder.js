import { Component } from "react"
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import Button from "../../../common/components/ui/button/Button";
import "./SingleOrder.css"
import { LeftOutlined } from '@ant-design/icons'
import Timeline from "../../components/ui/timeline/Timeline";
import InputBox from '../../../common/components/ui/inputBox/InputBox';
import TextArea from '../../../common/components/ui/textarea/TextArea';

class RestaurantSingleOrder extends Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     current_order : this.props.location.state.order
        // }

        this.state = {
            showTimeline: false
        }
    }

    //Mapping the food ordered by the customer
    componentDidMount() {
        console.log(this.props.location.state);
    }

    handleCallbackGoBack = () => {
        this.props.history.goBack()
    }

    handleShowTimeline = () => {
        this.setState({ showTimeline: true })
    }

    render() {
        return (
            <LayoutBackOffice pageTitle="MY MENU">

                <div className="bo-profile-container bo-single-order">

                    <div className="bo-mymenu-first-row">
                        <div className="bo-mymenu-welcome">
                            <h2>Ordine {this.props.location.state.titlePage}</h2>
                        </div>
                        <div
                            className="bo-mymenu-welcome"
                            onClick={this.handleCallbackGoBack}
                        >
                            <h3><LeftOutlined /></h3>
                            <h3>indietro</h3>
                        </div>
                    </div>

                    {
                        this.state.showTimeline &&
                        <div>
                            <Timeline />
                        </div>
                    }

                    {
                        this.state.showTimeline !== true &&
                        <div className="btn-orders-container">
                            <Button className="bo-btn single-order" value="approve" text="Approva" callback={this.handleShowTimeline} />
                            <Button className="bo-btn single-order" value="dontapprove" text="Non approvare" />
                        </div>
                    }

                    <div className="bo-profile-form">
                        <div className="bo-profile-flex-inputs">
                            <InputBox
                                className="bo-input-box"
                                name="customer_name"
                                disable={true}
                                value={this.props.location.state.order.customer_name}
                            />

                            <InputBox
                                className="bo-input-box"
                                name="customer_address"
                                disable={true}
                                value={this.props.location.state.order.customer_address}
                            />
                        </div>

                        <div>
                            <TextArea
                                className="bo-input-box"
                                name="customer_address"
                                disable={true}
                                value={this.props.location.state.order.customer_address}
                            />
                        </div>

                        <h2> Cibo ordinato:</h2>

                        <div
                            className="list-group-item orders"
                            name="foodOrdered"
                        >
                            {this.props.location.state.order.ordered.map((item, index) => {
                                return (
                                    <ul key={index} className='list-style' style={{ width: '100%' }}>
                                        <li>
                                            {item.nameFood} <br />
                                            Prezzo: {item.price} <br />
                                            Quantità: {item.quantity} <br />
                                        </li>
                                    </ul>
                                )
                            })}
                            <div style={{ padding: '10px' }}>TOTALE: 14.5 €</div>
                        </div>

                    </div>

                </div>
            </LayoutBackOffice>
        )
    }
}

export default RestaurantSingleOrder;
