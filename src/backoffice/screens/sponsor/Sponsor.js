import React, { Component } from "react";
import './Sponsor.css';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import 'antd/dist/antd.css';
import CountDownDaysTimer from "../../../gamification/components/funcComponents/CountDownDaysTimer";
// import CountDownTimer from "../../../gamification/components/funcComponents/CountDownTimer";
import coin from '../../../common/assets/BeijeCoin.png'
// import { HourglassOutlined } from '@ant-design/icons';
import SingleSponsor from "./singleSponsor/SingleSponsor";
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


    handleOnClick = (e) => () => {
        let choice = this.state.choice;
        choice = e;

        this.totalRestaurant.restaurant_list.map(element => {
            if (element.id === this.restaurantId) {
                if (this.activeRestaurant.coins >= choice.price) {

                    let result = this.activeRestaurant.coins - choice.price;
                    console.log(result)
                    this.activeRestaurant.coins = result;
                    console.log('ACTIVErESTUANT: ', this.activeRestaurant)

                    localStorage.setItem('activeRestaurant', JSON.stringify(this.activeRestaurant))
                }
                else {
                    console.log('sei povero!')
                }
                //*IN LOCAL STORAGE BACKOFFICE SPONSOR DIVENTA DA NULL A TRUE 
                element.sponsor = true;
                element = this.activeRestaurant;
                localStorage.setItem('localStorageRestaurants', JSON.stringify(this.totalRestaurant))
                console.log(this.state.choice)
                console.log('EEEEEEEEE: ', e)
                let newChoice = e.durata
                for (let key in e) {
                    if (key === 'durata') {
                        e[key] = newChoice;
                    }
                }


                this.setState({
                    choice: e,
                    sponsorSelected: this.activeRestaurant
                })
                console.log('choice post set state ', choice)
                localStorage.setItem('selectedSponsor', JSON.stringify(this.state.choice))
            }
        })


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

    componentDidMount() {
        this.totalRestaurant = JSON.parse(localStorage.getItem('localStorageRestaurants'));
        this.restaurantId = JSON.parse(localStorage.getItem('activeRestaurantId'));
        this.activeRestaurant = this.totalRestaurant.restaurant_list.find(el => {
            return el.id === this.restaurantId
        })


        // localStorage.setItem('activeRestaurant', JSON.stringify(this.activeRestaurant))
        console.log('risto attivo : ', this.activeRestaurant)

    }








    render() {
        console.log(this.state.sponsorSelected)
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
                                COINS:


                                <div>
                                    <div>{this.state.sponsorSelected.coins}</div>
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
                                classNameBtn={this.state.choice === '' ? "gm-classNameBtn" : 'gm-classNameBtnDisable'}
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
                                classNameBtn={this.state.choice === '' ? "gm-classNameBtn" : 'gm-classNameBtnDisable'}
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
                                classNameBtn={this.state.choice === '' ? "gm-classNameBtn" : 'gm-classNameBtnDisable'}
                                callbacksponsor={this.handleOnClick({ name: 'Milanese imbruttito', id: 3, durata: 2592000000, price: 100 })}
                            />
                        </div>

                        {
                            this.state.choice !== '' &&
                            <div>
                                <h1 style={{ width: "100%", display: "block", marginTop: "100px" }}>La durata di {this.state.choice.name} é: </h1>
                                <h3 style={{ color: 'red' }}> {this.state.expireData}</h3>


                                {this.state.choice.durata !== null &&
                                    <div>

                                        <CountDownDaysTimer time={this.msToTime(this.state.choice.durata)} />

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
export default Profile


