import React from "react";
import ElementListRadio from "../../../../common/components/ui/elementListRadio/ElementListRadio";
import "./SidebarRestaurants.css";
import Button from "../../../../common/components/ui/button/Button";
import { Slider } from 'antd';
import 'antd/dist/antd.css';

class SidebarRestaurants extends React.Component {
    constructor(props){
        super(props)
    }

    handleChangeElementRadio = (e) => {
        return this.props.callbackElementRadio(e)
    } 

    handleChangeButton = (e) => {
        return this.props.callbackButton(e)
    }

    render() {        
        return (
            <aside className="sideNav" >
                <h3>Tutti i locali</h3>
                <div className="orderBy">
                    <h4>Ordina</h4>
                    {/* <ElementListRadio id={"chosenRadio"} name="chosen" value="chosen for you" for={"chosenRadio"} label={"Chosen for you"} /> Quelli consigliati */}
                    <ElementListRadio id={"popularRadio"} name="order" value="number_orders" for={"popularRadio"} label={" Most popular"} callback={this.handleChangeElementRadio}/>
                    <ElementListRadio id={"ratingRadio"} name="order" value="rating" for={"ratingRadio"} label={" Best rating"} callback={this.handleChangeElementRadio}/>
                    <ElementListRadio id={"deliveryTimeRadio"} name="order" value="delivery_time" for={"deliveryTimeRadio"} label={" Delivery time"} callback={this.handleChangeElementRadio}/>
                </div>
                <div className="priceOrder">
                    <h4>Fascia di prezzo</h4>
                    <div>
                        <Button className="orderPriceButton" text={"€"} value={1} callback={this.handleChangeButton}/>
                        <Button className="orderPriceButton" text={"€€"} value={2} callback={this.handleChangeButton}/>
                        <Button className="orderPriceButton" text={"€€€"} value={3} callback={this.handleChangeButton}/>
                        <Button className="orderPriceButton" text={"€€€€"} value={4} callback={this.handleChangeButton}/>
                    </div>
                </div>
            </aside>
        )
    }
}

export default SidebarRestaurants;