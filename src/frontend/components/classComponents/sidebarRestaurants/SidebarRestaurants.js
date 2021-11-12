import React from "react";
import ElementListRadio from "../../../../common/components/ui/elementListRadio/ElementListRadio";
import "./SidebarRestaurants.css";
import Button from "../../../../common/components/ui/button/Button";
import 'antd/dist/antd.css';

class SidebarRestaurants extends React.Component {

    constructor(props) {
        super(props)

        this.state={
            navOptionRightLeft: 'selected',
            selectedDelivery: 'white-txt',
            selectedPickup: '',
        }
    }
    

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
        return this.props.callbackElementRadioDelivery(e.target),
        console.log(e.target, 'ratio')
    }
    navOptionSlide = (e) => {
    //    this.props.callbackToggle(e)
        this.setState({
            navOptionRightLeft: this.state.navOptionRightLeft === 'selected' ? 'delivery' : 'selected',
            selectedDelivery: this.state.navOptionRightLeft === 'delivery' ? 'white-txt' : '',
            selectedPickup: this.state.navOptionRightLeft === 'selected' ? 'white-txt' : ''
        });
    }

    render() {
        return (
            <aside className={this.props.className} >
                <div className='rowLocal'>
                    <h2 className="titleSideNav">Tutti i locali</h2>
                    <Button className="orderFilterButton" text={"Pulisci filtri"} callback={this.handleChangeClearButton} />
                </div>
                <div className="orderBy pushBottom">
                    <h3 className="titleSideNav">Ordina</h3>
                    {/* <ElementListRadio id={"chosenRadio"} name="chosen" value="chosen for you" for={"chosenRadio"} label={"Chosen for you"} /> Quelli consigliati */}
                    <ElementListRadio id={"popularRadio"} name="order" value="number_orders" for={"popularRadio"} label={" Più popolari"} callback={this.handleChangeElementRadio} />
                    <ElementListRadio id={"ratingRadio"} name="order" value="rating" for={"ratingRadio"} label={" Valutazione migliore"} callback={this.handleChangeElementRadio} />
                    <ElementListRadio id={"deliveryTimeRadio"} name="order" value="delivery_time" for={"deliveryTimeRadio"} label={" Tempo di consegna"} callback={this.handleChangeElementRadio} />
                </div>
                <div className="priceOrder pushBottom">
                    <h3 className="titleSideNav">Costo di consegna</h3>
                    
                                <div className='outer-btn' onClick={this.navOptionSlide}>
                                    <button value={1} name="delivery" onClick={this.handleChangeElementRadioDelivery} className={`left-inner-text ${this.state.selectedPickup}`}>Tutti</button>
                                    <button value={0} name="delivery" onClick={this.handleChangeElementRadioDelivery} className={`right-inner-text ${this.state.selectedDelivery}` }>Gratuita</button>
                                    <div className={`inner-btn ${this.state.navOptionRightLeft}`}></div>
                                </div>
                            
                </div>

                {/* <div className="deliveryPrice pushBottom">
                    <h3 className="titleSideNav">Costo di consegna</h3>
                        <ElementListRadio id={"freeRadio"} name="delivery" value={0} for={"freeRadio"} label={" Consegna gratuita"} callback={this.handleChangeElementRadioDelivery} />
                        <ElementListRadio id={"paidRadio"} name="delivery" value={1} for={"paidRadio"} label={" Consegna a pagamento"} callback={this.handleChangeElementRadioDelivery} />
                        <ElementListRadio id={"bothRadio"} name="delivery" value="delivery_time" for={"bothRadio"} label={" Entrambi"} callback={this.handleChangeElementRadioDelivery} />
                </div> */}
            </aside>
        )
    }
}

export default SidebarRestaurants;