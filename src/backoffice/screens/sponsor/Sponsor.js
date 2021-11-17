import React, { Component } from "react";
import { connect } from 'react-redux';

//Import style
import './Sponsor.css';
import 'antd/dist/antd.css';

import properties from "../../../common/utils/properties";
import genericServices from "../../../common/utils/genericServices";

//Import icons
import coin from '../../../common/assets/BeijeCoin.png'

//Import component
import SingleSponsor from "./singleSponsor/SingleSponsor";
import CountDownDaysTimer from "../../../gamification/components/funcComponents/CountDownDaysTimer";
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";

class Sponsor extends Component {
    constructor(props) {
        /*let storage = JSON.parse(localStorage.getItem('selectedSponsor'))
        let storageRestaurantSelected = JSON.parse(localStorage.getItem('activeRestaurant')) */
        super(props);
        this.id = this.props.restaurantIdDuck.restaurant_id
        this.state = {
            duration: null,
            difference: null,
            sponsorName: null,
            totalCoin: null

        }
    }


    componentDidMount = async () => {

        properties.GENERIC_SERVICE = new genericServices();

        let allSponsor = await properties.GENERIC_SERVICE.apiGET(`/sponsor/restaurant/${this.props.restaurantIdDuck.restaurant_id}`, this.props.tokenDuck.token)
        let restaurant = await properties.GENERIC_SERVICE.apiGET(`/restaurant/${this.props.restaurantIdDuck.restaurant_id}`, this.props.tokenDuck.token);
        let totalCoin = restaurant.totalCoin
        let noSponsor = null
        let lastSponsor = allSponsor.length > 0 ? allSponsor[allSponsor.length - 1] : noSponsor
        this.newDate = new Date().getTime()
        let expireDate = new Date(lastSponsor.sponsorExpired).getTime()
        let difference = expireDate - this.newDate + 3600000
        let sponsorName = null
        if (lastSponsor.sponsorValuePeriod === 1) {
            sponsorName = "Povero"
        }
        if (lastSponsor.sponsorValuePeriod === 7) {
            sponsorName = "Borghese"
        }
        if (lastSponsor.sponsorValuePeriod === 30) {
            sponsorName = "Milanese imbruttito"
        }

        this.setState({
            difference: difference,
            totalCoin: totalCoin,
            sponsorName: sponsorName
        })
        console.log(lastSponsor);

    }



    handleOnClick = (e) => async () => {
 
        let cost = null
        let sponsorName = null
        let newCoins = this.state.totalCoin
        if (e === 1) {
            cost = 10
        }
        if (e === 7) {
            cost = 50
        }
        if (e === 30) {
            cost = 100
        }
        if (this.state.totalCoin > cost) {
            let obj = {
                restaurantId: this.props.restaurantIdDuck.restaurant_id,
                sponsorValuePeriod: e
            }
            await properties.GENERIC_SERVICE.apiPOST("/sponsor", obj, this.props.tokenDuck.token)
            if (e === 1) {
                sponsorName = "Povero"
                newCoins -= 10
            }
            if (e === 7) {
                sponsorName = "Borghese"
                newCoins -= 50
            }
            if (e === 30) {
                sponsorName = "Milanese imbruttito"
                newCoins -= 100
            }
            this.setState({
                sponsorName: sponsorName,
                totalCoin: newCoins
            })
        }/* else sei povero */


    }

    msToTime = (milliseconds) => {

        let seconds = Math.floor((milliseconds / 1000) % 60)
        let minutes = Math.floor((milliseconds / (1000 * 60)) % 60)
        let hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24)
        let days = Math.floor((milliseconds / (1000 * 60 * 60 * 24) % 365))

        let obj = {
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            days: days
        }

        return obj
    }

    render() {
        return (
            <>

                <LayoutBackOffice
                    pageTitle="SPONSOR"
                >
                    <div className="bo-sponsor-container">
                        <div className="gm-containersponsor"
                        >
                            <div className={"pseudo pseudo-1"}></div>
                            <div className={"pseudo pseudo-2"}></div>
                            <div>


                                <div style={{ marginBottom: '10px' }}>
                                    {/* <span>{this.state.sponsorSelected.coins}</span> */}
                                    <span>{this.state.totalCoin}</span>
                                    <img style={{ width: '20px', height: '20px' }} src={coin} alt="beijecoin" />
                                </div>





                            </div>
                            <SingleSponsor
                                /* className={this.state.choice.id === 1 || this.state.choice === '' ? "gm-singlecontainer" : "gm-singlecontainerBlur gm-singlecontainer"} */
                                className="gm-singlecontainer"
                                defaultValue={"sponsor 24 ore"}
                                title="24 ore"
                                description="Applica lo sponsor al tuo ristorante per salire in cima alle ricerche per 24H!"
                                durationClass="duration-wrapper"
                                price={"10"}
                                label={'Sponsorizza'}
                                coinClass="gm-sponsor-coin"
                                glassClass={'hourglass glass-1'}
                                /* classNameBtn={this.state.choice === '' ? "gm-classNameBtn" : 'gm-classNameBtn gm-classNameBtnDisable'} */
                                classNameBtn={"gm-classNameBtn"}
                                callbacksponsor={this.handleOnClick(1)}
                            />
                            <SingleSponsor
                                /* className={this.state.choice.id === 2 || this.state.choice === '' ? "gm-singlecontainer" : "gm-singlecontainerBlur gm-singlecontainer"} */
                                className="gm-singlecontainer"
                                defaultValue={'sponsor1'}
                                title="7 giorni"
                                description="Applica lo sponsor al tuo ristorante per salire in cima alle ricerche per 7gg!"
                                durationClass="duration-wrapper"
                                price={"50"}
                                label={'Sponsorizza'}
                                coinClass="gm-sponsor-coin"
                                glassClass={'hourglass glass-2'}
                                /* classNameBtn={this.state.choice === '' ? "gm-classNameBtn" : 'gm-classNameBtn gm-classNameBtnDisable'} */
                                classNameBtn={"gm-classNameBtn"}
                                callbacksponsor={this.handleOnClick(7)}
                            />
                            <SingleSponsor
                                /* className={this.state.choice.id === 3 || this.state.choice === '' ? "gm-singlecontainer" : "gm-singlecontainerBlur gm-singlecontainer"} */
                                className="gm-singlecontainer"
                                defaultValue={'sponsor1'}
                                title="30 giorni"
                                description="Applica lo sponsor al tuo ristorante per salire in cima alle ricerche per 30gg!"
                                durationClass="duration-wrapper"
                                price={"100"}
                                label={'Sponsorizza'}
                                coinClass="gm-sponsor-coin"
                                glassClass={'hourglass glass-3'}
                                /* classNameBtn={this.state.choice === '' ? "gm-classNameBtn" : 'gm-classNameBtn gm-classNameBtnDisable'} */
                                classNameBtn={"gm-classNameBtn"}
                                callbacksponsor={this.handleOnClick(30)}
                            />
                        </div>

                        {
                            this.state.difference > 0 &&

                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <h1 style={{ width: "100%", display: "block", marginTop: "100px" }}>Termine sponsorizzazione di {this.state.sponsorName} in: </h1>
                                <CountDownDaysTimer time={this.msToTime(this.state.difference)} />
                            </div>


                        }

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

export default connect(mapStateToProps)(Sponsor)
