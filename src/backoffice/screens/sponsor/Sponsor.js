import { Component } from "react";
import './Sponsor.css';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import 'antd/dist/antd.css';
<<<<<<< HEAD
// import { EditOutlined, EditFilled, DollarCircleOutlined  } from '@ant-design/icons';
// import {HourglassOutlined} from '@ant-design/icons';
// import SingleSponsor from "./singleSponsor/SingleSponsor";
class Profile extends Component {

=======
import coin from '../../../common/assets/BeijeCoin.png'
import {HourglassOutlined} from '@ant-design/icons';
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
>>>>>>> features/gamification/develop_gamification
    render() {
        return (
            <>
                <LayoutBackOffice
                    pageTitle="SPONSOR"
                >
                    <div style={{minHeight: '100%' }} className="bo-sponsor-container">
                        <div className="gm-containersponsor">
                            <SingleSponsor
                                className="gm-singlecontainer"
                                title="sponsor 1"
                                description="one day"
                                durationClass="duration-wrapper"
                                price={"10"}
                                componentFromChild={<HourglassOutlined />}
                                label={'Sponsorizza'}
                                srcCoin={coin}
                                coinClass="gm-sponsor-coin"
                                hourGlass={'green'}
                                classNameBtn={"gm-classNameBtn"}
                                callbacksponsor={this.handleOnClick({ name: 'sponsor 1', id: 1, durata: 5 })}
                            />
                            <SingleSponsor
                                className="gm-singlecontainer"
                                defaultValue={'sponsor1'}
                                title="sponsor 2"
                                description="one week"
                                durationClass="duration-wrapper"
                                price={"50"}
                                label={'Sponsorizza'}
                                srcCoin={coin}
                                coinClass="gm-sponsor-coin"
                                componentFromChild={<HourglassOutlined />}
                                hourGlass={'gold'}
                                classNameBtn={"gm-classNameBtn"}
                                callbacksponsor={this.handleOnClick({ name: 'sponsor 2', id: 2, durata: 5 })}
                            />
                            <SingleSponsor
                                className="gm-singlecontainer"
                                defaultValue={'sponsor1'}
                                title="sponsor 3"
                                description="one month"
                                durationClass="duration-wrapper"
                                price={"100"}
                                label={'Sponsorizza'}
                                srcCoin={coin}
                                coinClass="gm-sponsor-coin"
                                componentFromChild={<HourglassOutlined />}
                                hourGlass={'red'}
                                classNameBtn={"gm-classNameBtn"}
                                callbacksponsor={this.handleOnClick({ name: 'sponsor 3', id: 3, durata: 5 })}
                            />
                        </div>
                        {
                            this.state.choice !== null &&
                            <h1>HAI SCELTO {this.state.choice.name} </h1>
                        }
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

export default Profile