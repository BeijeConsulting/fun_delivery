import { Component } from "react";
import './Sponsor.css';
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import 'antd/dist/antd.css';
// import { EditOutlined, EditFilled, DollarCircleOutlined  } from '@ant-design/icons';
// import {HourglassOutlined} from '@ant-design/icons';
// import SingleSponsor from "./singleSponsor/SingleSponsor";
class Profile extends Component {

    render() {
        return (
            <>
                <LayoutBackOffice
                    pageTitle="SPONSOR"
                >
                    {/* <div className="gm-sponsor-container">

                         <div className="bo-profile-first-row">

                            <div className="bo-profile-welcome">
                                <h2>Benvenuto, Admin</h2>
                                <span className="bo-icon-edit"><EditFilled /></span>
                                <span className="bo-icon-edit"><DollarCircleOutlined /> Beije Coin </span>
                            </div>

                            <SingleSponsor
                                className="gm-singlecontainer"
                                title="sponsor 1"
                                description="one day"
                                price={"10"}
                                componentFromChild={<HourglassOutlined />}
                                label={'Sponsorizza'}
                                hourGlass={'red'}
                                classNameBtn={"gm-classNameBtn"}
                                callbacksponsor={this.handleOnClick({ name: 'sponsor 1', id: 1, durata: 5 })}
                            />
                            <SingleSponsor
                                className="gm-singlecontainer"
                                defaultValue={'sponsor1'}
                                title="sponsor 2"
                                description="one week"
                                price={"50"}
                                label={'Sponsorizza'}
                                componentFromChild={<HourglassOutlined />}
                                hourGlass={'red'}
                                classNameBtn={"gm-classNameBtn"}
                                callbacksponsor={this.handleOnClick({ name: 'sponsor 2', id: 2, durata: 5 })}
                            />
                            <SingleSponsor
                                className="gm-singlecontainer"
                                defaultValue={'sponsor1'}
                                title="sponsor 3"
                                description="one month"
                                price={"100"}
                                label={'Sponsorizza'}
                                componentFromChild={<HourglassOutlined />}
                                hourGlass={'gold'}
                                classNameBtn={"gm-classNameBtn"}
                                callbacksponsor={this.handleOnClick({ name: 'sponsor 3', id: 3, durata: 5 })}
                            />
                        </div>
                        {
                            this.state.choice !== null &&
                            <h1>HAI SCELTO {this.state.choice.name} </h1>
                        }

                    </div> */}
                </LayoutBackOffice>
            </>
        )
    }
}

export default Profile