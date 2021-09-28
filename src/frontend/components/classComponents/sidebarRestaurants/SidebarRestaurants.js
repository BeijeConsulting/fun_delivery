import React from "react";
import ElementListRadio from "../../../../common/components/ui/elementListRadio/ElementListRadio";
import "./SidebarRestaurants.css";
import Button from "../../../../common/components/ui/button/Button";
class SidebarRestaurants extends React.Component {
    render() {
        return (
            <aside className="sideNav" >
                <h3>Tutti i locali</h3>
                <div className="orderBy">
                    <h4>Ordina</h4>
                    {/* <ElementListRadio id={"chosenRadio"} name="chosen" value="chosen for you" for={"chosenRadio"} label={"Chosen for you"} /> Quelli consigliati */}
                    <ElementListRadio id={"popularRadio"} name="order" value="most popular" for={"popularRadio"} label={"Most popular"} />
                    <ElementListRadio id={"ratingRadio"} name="order" value="best rating" for={"ratingRadio"} label={"Best rating"} />
                    <ElementListRadio id={"deliveryTimeRadio"} name="order" value="delivery time" for={"deliveryTimeRadio"} label={"Delivery time"} />
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
                                <div className="deliveryPrice">
                                    $3
                                </div>
                                <input type="range" id="vol" name="vol" min="0" max="3" />
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        )
    }
}

export default SidebarRestaurants;