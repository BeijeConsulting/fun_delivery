import React from "react";
import ElementListRadio from "../../../../common/components/ui/elementListRadio/ElementListRadio";
import "./SidebarRestaurants.css";
import Button from "../../../../common/components/ui/button/Button";
import 'antd/dist/antd.css';

class SidebarRestaurants extends React.Component {

    handleChangeElementRadio = (e) => {
        return this.props.callbackElementRadio(e)
    }

    handleChangeButton = (e) => {
        return this.props.callbackButton(e)
    }

    handleChangeClearButton = (e) => {
        return this.props.callbackClearButton(e)
    }

    handleChangeElementRadioDelivery = (e) => {
        return this.props.callbackElementRadioDelivery(e)
    }

    render() {
        return (
            <aside className="sideNav" >
                <div className='rowLocal'>
                    <h3>Tutti i locali</h3>
                    <Button className="orderFilterButton" text={"Pulisci filtri"} callback={this.handleChangeClearButton} />
                </div>
                <div className="orderBy">
                    <h4>Ordina</h4>
                    {/* <ElementListRadio id={"chosenRadio"} name="chosen" value="chosen for you" for={"chosenRadio"} label={"Chosen for you"} /> Quelli consigliati */}
                    <ElementListRadio id={"popularRadio"} name="order" value="number_orders" for={"popularRadio"} label={" Più popolari"} callback={this.handleChangeElementRadio} />
                    <ElementListRadio id={"ratingRadio"} name="order" value="rating" for={"ratingRadio"} label={" Valutazione migliore"} callback={this.handleChangeElementRadio} />
                    <ElementListRadio id={"deliveryTimeRadio"} name="order" value="delivery_time" for={"deliveryTimeRadio"} label={" Tempo di consegna"} callback={this.handleChangeElementRadio} />
                </div>
                <div className="priceOrder">
                    <h4>Fascia di prezzo</h4>
                    <div>
                        <Button className="orderPriceButton" text={"€"} value={1} callback={this.handleChangeButton} />
                        <Button className="orderPriceButton" text={"€€"} value={2} callback={this.handleChangeButton} />
                        <Button className="orderPriceButton" text={"€€€"} value={3} callback={this.handleChangeButton} />
                        <Button className="orderPriceButton" text={"€€€€"} value={4} callback={this.handleChangeButton} />
                    </div>
                </div>

                <div className="deliveryPrice">
                    <h4>Costo di consegna</h4>
                        <ElementListRadio id={"freeRadio"} name="delivery" value={0} for={"freeRadio"} label={" Consegna gratuita"} callback={this.handleChangeElementRadioDelivery} />
                        <ElementListRadio id={"paidRadio"} name="delivery" value={1} for={"paidRadio"} label={" Consegna a pagamento"} callback={this.handleChangeElementRadioDelivery} />
                        <ElementListRadio id={"bothRadio"} name="delivery" value="delivery_time" for={"bothRadio"} label={" Entrambi"} callback={this.handleChangeElementRadioDelivery} />
                </div>
            </aside>
        )
    }
}

export default SidebarRestaurants;