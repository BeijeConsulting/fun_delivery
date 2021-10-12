import { Component } from "react";
import './Sponsor.css';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import 'antd/dist/antd.css';
import coin from '../../../common/assets/BeijeCoin.png'
import { HourglassOutlined } from '@ant-design/icons';
import SingleSponsor from "./singleSponsor/SingleSponsor";
class Profile extends Component {
    constructor(props) {
        let storage = JSON.parse(localStorage.getItem('selectedSponsor'))
        super(props);
        this.state = {
            choice: storage === null ? '' : storage
        }
    }
    handleOnClick = (e) => () => {
        let choice = this.state.choice;
        choice = e;
        this.setState({
            choice: choice
        })
        localStorage.setItem('selectedSponsor', JSON.stringify(choice))
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
                                    callbacksponsor={this.handleOnClick({ name: 'sponsor 1', id: 1, durata: 5 })}
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
                                callbacksponsor={this.handleOnClick({ name: 'sponsor 2', id: 2, durata: 5 })}
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
                                callbacksponsor={this.handleOnClick({ name: 'sponsor 3', id: 3, durata: 5 })}
                            />
                        </div>
                        {
                            this.state.choice !== null &&
                            <h1 style={{width: "100%",display:"block", marginTop: "100px"}}>HAI SCELTO {this.state.choice.name} </h1>
                        }
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}
export default Profile