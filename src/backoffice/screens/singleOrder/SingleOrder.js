import { Component } from "react"
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import LogoBeije from '../../assets/images/logo_beijeRosa.png';
import Button from "../../../common/components/ui/button/Button";
import "./SingleOrder.css"
class RestaurantSingleOrder extends Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     current_order : this.props.location.state.order
        // }
    }

    //Mapping the food ordered by the customer
    componentDidMount() {

    }

    render() {
        console.log(this.props.location.state)
        return (
            <>
                <LayoutBackOffice pageTitle="MY MENU">
                    <div className="bo-profile-container">
                        <div className="bo-mymenu-first-row">

                            <div className="bo-mymenu-welcome">
                                <h2>Ordine {this.props.location.state.titlePage}</h2>
                            </div>
                            <div className="bo-profile-img">
                                <img src={LogoBeije} alt="" />
                            </div>
                        </div>
                        <div className="bo-profile-form">
                            <div className="bo-profile-flex-inputs">
                                <div
                                    // className={`bo-input-box ${this.state.data.firstName[1] ? 'alert' : ''}`}
                                    className="bo-input-box"
                                    name="firstName"
                                >
                                    {this.props.location.state.order.customer_name}
                                </div>
                                <div
                                    className="bo-input-box"
                                    name="lastName"
                                // className={`bo-input-box ${this.state.data.lastName[1] ? 'alert' : ''}`}
                                >
                                    {this.props.location.state.order.customer_address}
                                </div>
                            </div>
                            <div
                                className="bo-input-box"
                                // className={`bo-input-box ${this.state.data.email[1] ? 'alert' : ''}`}
                                name="foodOrdered"
                            >
                                Cibo ordinato:
                                {this.props.location.state.order.ordered.map((item, index) => {
                                    return (
                                        <ul key={index}>
                                            <li>{item.nameFood}</li>
                                        </ul>
                                    )
                                })}

                            </div>

                        </div>
                        <Button className="bo-btn single-order" value="next" text="NEXT"/>
                        <Button className="bo-btn single-order" value="approve" text="Approva"/>
                        <Button className="bo-btn single-order" value="dontapprove" text="Non approvare"/> 
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

export default RestaurantSingleOrder;
