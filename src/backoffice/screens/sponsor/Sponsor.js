import React, { Component } from "react";
import './Sponsor.css';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import 'antd/dist/antd.css';
// import coin from '../../../common/assets/BeijeCoin.png'
// import { HourglassOutlined } from '@ant-design/icons';
import SingleSponsor from "./singleSponsor/SingleSponsor";
class Profile extends Component {
    constructor(props) {
        let storage = JSON.parse(localStorage.getItem('selectedSponsor'))
        super(props);
        this.state = {
            choice: storage === null ? '' : storage,
            expireData: null,
            timer: null,
            sponsorAvailable: true


        }
    }

    handleOnClick = (e) => () => {
        let choice = this.state.choice;
        choice = e;
        this.setState({
            choice: choice
        })
        if (this.activeRestaurant.coins >= choice.price) {
            // console.log('COINS: ' , activeRestaurant.coins)
            let result = this.activeRestaurant.coins - choice.price;
            this.activeRestaurant.coins = result;
            console.log('ACTIVErESTUANT: ', this.activeRestaurant)
            localStorage.setItem('activeRestaurant', JSON.stringify(this.activeRestaurant))
            this.totalRestaurant.restaurant_list.map(element => {
                if (element.id === this.restaurantId) {
                    element = this.activeRestaurant
                    localStorage.setItem('localStorageRestaurants', JSON.stringify(this.totalRestaurant))
                }
            })
        }
        else {
            console.log('sei povero!')
        }
    }

    componentDidMount() {
        this.totalRestaurant = JSON.parse(localStorage.getItem('localStorageRestaurants'));
        this.restaurantId = JSON.parse(localStorage.getItem('activeRestaurantId'));
        this.activeRestaurant = this.totalRestaurant.restaurant_list.find(el => {
            return el.id === this.restaurantId
        })
        console.log('risto attivo> : ', this.activeRestaurant)
    }
    // localStorage.setItem('sponsorTimer', JSON.stringify(new Date().getTime()));
    // let get = JSON.parse(localStorage.getItem('sponsorTimer'));
    // console.log('GET: ', get)
    // console.log('CHOICE', choice.durata)
    // let duration = choice.durata + get;
    // console.log('Durata: ', duration)
    // let date = new Date(duration);
    // this.setState({
    //     expireData: date.toString()
    // })
    // localStorage.setItem('selectedSponsor', JSON.stringify(choice))


    render() {
        return (
            <>
                <LayoutBackOffice
                    pageTitle="SPONSOR"
                >
                    <div className="bo-sponsor-container">
                        
                        <section className="gm-containersponsor"
                        >
                            <div className={"pseudo pseudo-1"}></div>
                            <div className={"pseudo pseudo-2"}></div>
                            <SingleSponsor
                                className="gm-singlecontainer"
                                defaultValue={"sponsor 24 ore"}
                                title="24 ore"
                                description="Applica lo sponsor al tuo ristorante per salire in cima alle ricerche per 24H!"
                                durationClass="duration-wrapper"
                                price={"10"}
                                label={'Sponsorizza'}
                                coinClass="gm-sponsor-coin"
                                glassClass={'hourglass glass-1'}
                                classNameBtn={"gm-classNameBtn"}
                                callbacksponsor={this.handleOnClick({ name: 'sponsor 1', id: 1, durata: 86400000, price: 10 })}
                            />
                            <SingleSponsor
                                className="gm-singlecontainer"
                                defaultValue={'sponsor1'}
                                title="7 giorni"
                                description="Applica lo sponsor al tuo ristorante per salire in cima alle ricerche per 7gg!"
                                durationClass="duration-wrapper"
                                price={"50"}
                                label={'Sponsorizza'}
                                coinClass="gm-sponsor-coin"
                                glassClass={'hourglass glass-2'}
                                classNameBtn={"gm-classNameBtn"}
                                callbacksponsor={this.handleOnClick({ name: 'sponsor 2', id: 2, durata: 604800000, price: 50 })}
                            />
                            <SingleSponsor
                                className="gm-singlecontainer"
                                defaultValue={'sponsor1'}
                                title="30 giorni"
                                description="Applica lo sponsor al tuo ristorante per salire in cima alle ricerche per 30gg!"
                                durationClass="duration-wrapper"
                                price={"100"}
                                label={'Sponsorizza'}
                                coinClass="gm-sponsor-coin"
                                glassClass={'hourglass glass-3'}
                                classNameBtn={"gm-classNameBtn"}
                                callbacksponsor={this.handleOnClick({ name: 'sponsor 3', id: 3, durata: 2592000000, price: 100 })}
                            />
                        </section>

                        <footer>
                            {
                                this.state.choice !== null &&
                                <div>
                                    <h1 style={{ width: "100%", display: "block", marginTop: "100px" }}>HAI SCELTO {this.state.choice.name} </h1>
                                    <h3 style={{ color: 'red' }}> {this.state.expireData}</h3>
                                </div>
                            }
                        </footer>

                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}
export default Profile


