import { Component } from "react";
import './Profile.css';
import LogoBeije from '../../assets/images/logo_beijeRosa.png';
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import { EditOutlined, EditFilled } from '@ant-design/icons';
import Select from "../../../common/components/ui/select/Select";
import 'antd/dist/antd.css';

class Profile extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>

                <LayoutBackOffice
                    pageTitle="PROFILE"
                >
                    <div className="bo-profile-container">

                        <div className="bo-profile-first-row">

                            <div className="bo-profile-welcome">
                                <h2>Benvenuto, Admin</h2>
                                <span className="bo-icon-edit"><EditFilled /></span>
                            </div>

                            <div className="bo-profile-img">
                                <img src={LogoBeije} alt="" />
                            </div>

                        </div>


                        <div className="bo-profile-form">
                            <div className="bo-profile-second-row">
                                <h3>I tuoi dati</h3>
                                <div className="bo-profile-switch">
                                    <p>Free Shipping <span>Switch</span></p>
                                </div>
                            </div>
                            <div className="bo-profile-flex-inputs">
                                <InputBox
                                    type="text"
                                    placeholder="Nome ristorante"
                                    className="bo-input-box"
                                />
                                <InputBox
                                    type="text"
                                    placeholder="Via"
                                    className="bo-input-box"
                                />
                            </div>
                            <InputBox
                                type="email"
                                placeholder="CAP"
                                className="bo-input-box"
                            />
                        </div>

                        <div className="bo-profile-form">
                            <h3>Il tuo ristorante</h3>
                            <div className="bo-profile-flex-inputs">
                                <Select
                                    selectID="state"
                                    selectName="state"
                                    data={['cat1', 'cat2', 'cat3']}
                                    className="bo-input-box"
                                />
                                <InputBox
                                    type="text"
                                    placeholder="Città"
                                    className="bo-input-box"
                                />
                            </div>
                            <div className="bo-profile-flex-inputs">

                                <InputBox
                                    type="text"
                                    placeholder="P.IVA"
                                    className="bo-input-box"
                                />
                                <Select
                                    selectID="state"
                                    selectName="state"
                                    data={['cat1', 'cat2', 'cat3']}
                                    className="bo-input-box"
                                />
                            </div>
                                <InputBox
                                    type="email"
                                    placeholder="Email"
                                    className="bo-input-box"
                                />
                            </div>

                        </div>

                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

export default Profile