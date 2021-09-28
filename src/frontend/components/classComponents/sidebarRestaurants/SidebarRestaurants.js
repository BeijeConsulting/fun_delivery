import React from "react";
import ElementListRadio from "../../../../common/components/ui/elementListRadio/ElementListRadio";
import "./SidebarRestaurants.css";
import Button from "../../../../common/components/ui/button/Button";
import { Slider } from 'antd';
import 'antd/dist/antd.css';

class SidebarRestaurants extends React.Component {
    render() {
        // Marks utili allo slider del range di prezzo. Verranno importati dai ristoranti
        const marks = {
            0: '€3',
            3: '€5',
            6: '€7',
            8: '€7+'
        };

        return (
            <aside className="sideNav" >
                <h3>Tutti i locali</h3>
                <div className="orderBy">
                    <h4>Ordina</h4>
                    {/* <ElementListRadio id={"chosenRadio"} name="chosen" value="chosen for you" for={"chosenRadio"} label={"Chosen for you"} /> Quelli consigliati */}
                    <ElementListRadio id={"popularRadio"} name="order" value="most popular" for={"popularRadio"} label={" Most popular"} />
                    <ElementListRadio id={"ratingRadio"} name="order" value="best rating" for={"ratingRadio"} label={" Best rating"} />
                    <ElementListRadio id={"deliveryTimeRadio"} name="order" value="delivery time" for={"deliveryTimeRadio"} label={" Delivery time"} />
                </div>
                <div className="priceOrder">
                    <h4>Fascia di prezzo</h4>
                    <div>
                        <Button className="orderPriceButton" text={"€"} />
                        <Button className="orderPriceButton" text={"€€"} />
                        <Button className="orderPriceButton" text={"€€€"} />
                        <Button className="orderPriceButton" text={"€€€€"} />
                    </div>
                </div>
                <div className="maxDeliveryPrice">
                    <h4>Costo di consegna massimo</h4>
                    <div className="deliveryRangeContainer">
                        <div className="deliveryRangeSon">
                            <div className="deliveryPriceRange">
                                <Slider handleStyle={{'backgroundColor': '#ffffff', 'border': 'solid 2px #f24464'}} trackStyle={{ 'backgroundColor': '#f24464' }}marks={marks} step={null} defaultValue={8} max={8} />
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        )
    }
}

export default SidebarRestaurants;