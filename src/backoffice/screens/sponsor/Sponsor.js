import React, { Component } from "react";
import { connect } from 'react-redux';

//Import style
import './Sponsor.css';
import 'antd/dist/antd.css';

//Import icons
import coin from '../../../common/assets/BeijeCoin.png'

//Import component
import SingleSponsor from "./singleSponsor/SingleSponsor";
import CountDownDaysTimer from "../../../gamification/components/funcComponents/CountDownDaysTimer";
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";

class Profile extends Component {
    constructor(props) {
        let storage = JSON.parse(localStorage.getItem('selectedSponsor'))
        let storageRestaurantSelected = JSON.parse(localStorage.getItem('activeRestaurant'))

        super(props);
        this.state = {
            choice: storage === null ? '' : storage,
            expireData: null,
            sponsorAvailable: true,
            sponsorSelected: storageRestaurantSelected === null ? '' : storageRestaurantSelected,
            objRestaurant: null
        }
    }


    componentDidMount() {
        this.totalRestaurant = JSON.parse(localStorage.getItem('localStorageRestaurants'));
        this.restaurantId = JSON.parse(localStorage.getItem('activeRestaurantId'));
        this.activeRestaurant = this.totalRestaurant.restaurant_list.find(el => {
            return el.id === this.restaurantId
        })
        // this.qualcosa = localStorage.setItem('activeRestaurant', JSON.stringify(this.activeRestaurant))

        this.newDate = new Date().getTime()


        // localStorage.setItem('activeRestaurant', JSON.stringify(this.activeRestaurant))

    }

    handleOnClick = (e) => () => {
        if (this.state.choice === '') {

            let choice = this.state.choice;
            choice = e;

            this.totalRestaurant.restaurant_list.map(element => {
                if (element.id === this.restaurantId) {
                    if (this.activeRestaurant.coins >= choice.price) {

                        let result = this.activeRestaurant.coins - choice.price;
                        this.activeRestaurant.coins = result;

                        localStorage.setItem('activeRestaurant', JSON.stringify(this.activeRestaurant))
                        //*IN LOCAL STORAGE BACKOFFICE SPONSOR DIVENTA DA NULL A TRUE 
                        element.sponsor = true;
                        element = this.activeRestaurant;
                        localStorage.setItem('localStorageRestaurants', JSON.stringify(this.totalRestaurant))
                        let newChoice = e.durata + this.newDate;
                        for (let key in e) {
                            if (key === 'durata') {
                                e[key] = newChoice;
                            }
                        }
                        this.setState({
                            choice: e,
                            sponsorSelected: this.activeRestaurant
                        })
                        localStorage.setItem('selectedSponsor', JSON.stringify(this.state.choice))
                    }
                    else {
                        console.log('sei povero!')
                    }
                }
            })
        }

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
                                    <span>Inutile da fixare</span>
                                    <img style={{ width: '20px', height: '20px' }} src={coin} alt="beijecoin" />
                                </div>





                            </div>
                            <SingleSponsor
                                className={this.state.choice.id === 1 || this.state.choice === '' ? "gm-singlecontainer" : "gm-singlecontainerBlur gm-singlecontainer"}
                                defaultValue={"sponsor 24 ore"}
                                title="24 ore"
                                description="Applica lo sponsor al tuo ristorante per salire in cima alle ricerche per 24H!"
                                durationClass="duration-wrapper"
                                price={"10"}
                                label={'Sponsorizza'}
                                coinClass="gm-sponsor-coin"
                                glassClass={'hourglass glass-1'}
                                classNameBtn={this.state.choice === '' ? "gm-classNameBtn" : 'gm-classNameBtn gm-classNameBtnDisable'}
                                callbacksponsor={this.handleOnClick({ name: 'Povero', id: 1, durata: 86400000, price: 10 })}
                            />
                            <SingleSponsor
                                className={this.state.choice.id === 2 || this.state.choice === '' ? "gm-singlecontainer" : "gm-singlecontainerBlur gm-singlecontainer"}
                                defaultValue={'sponsor1'}
                                title="7 giorni"
                                description="Applica lo sponsor al tuo ristorante per salire in cima alle ricerche per 7gg!"
                                durationClass="duration-wrapper"
                                price={"50"}
                                label={'Sponsorizza'}
                                coinClass="gm-sponsor-coin"
                                glassClass={'hourglass glass-2'}
                                classNameBtn={this.state.choice === '' ? "gm-classNameBtn" : 'gm-classNameBtn gm-classNameBtnDisable'}
                                callbacksponsor={this.handleOnClick({ name: 'Borghese', id: 2, durata: 604800000, price: 50 })}
                            />
                            <SingleSponsor
                                className={this.state.choice.id === 3 || this.state.choice === '' ? "gm-singlecontainer" : "gm-singlecontainerBlur gm-singlecontainer"}
                                defaultValue={'sponsor1'}
                                title="30 giorni"
                                description="Applica lo sponsor al tuo ristorante per salire in cima alle ricerche per 30gg!"
                                durationClass="duration-wrapper"
                                price={"100"}
                                label={'Sponsorizza'}
                                coinClass="gm-sponsor-coin"
                                glassClass={'hourglass glass-3'}
                                classNameBtn={this.state.choice === '' ? "gm-classNameBtn" : 'gm-classNameBtn gm-classNameBtnDisable'}
                                callbacksponsor={this.handleOnClick({ name: 'Milanese imbruttito', id: 3, durata: 2592000000, price: 100 })}
                            />
                        </div>

                        {
                            this.state.choice !== '' &&
                            <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center' }}>
                                <h1 style={{ width: "100%", display: "block", marginTop: "100px" }}>Termine sponsorizzazione di {this.state.choice.name} in: </h1>
                                <h3 style={{ color: 'red' }}> {this.state.expireData}</h3>


                                {this.state.choice.durata !== null &&
                                    <div>

                                        <CountDownDaysTimer time={this.msToTime(this.state.choice.durata - new Date().getTime())} />

                                    </div>

                                }

                            </div>

                        }

                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

const mapStateToProps = state =>({
    tokenDuck: state.tokenDuck
})

export default connect(mapStateToProps)(Profile)
