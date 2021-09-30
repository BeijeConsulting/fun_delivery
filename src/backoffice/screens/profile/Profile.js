import { Component } from "react";
import './Profile.css';
import LogoBeije from '../../assets/images/logo_beijeRosa.png';
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import { EditFilled, DollarCircleOutlined  } from '@ant-design/icons';
import Select from "../../../common/components/ui/select/Select";
import TextArea from "../../../common/components/ui/textarea/TextArea";
import SwitchProfile from "../../components/ui/switch/SwitchProfile";
import 'antd/dist/antd.css';
// import utils from "../../../common/utils/utils";

class Profile extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <>
                <LayoutBackOffice pageTitle="PROFILE">
                    <div className="bo-profile-container">

                        <div className="bo-profile-first-row">

                            <div className="bo-profile-welcome">
                                <h2>Benvenuto, Admin</h2>
                                <span className="bo-icon-edit"><EditFilled /></span>
                                <span className="bo-icon-edit"><DollarCircleOutlined /> Beije Coin </span>
                            </div>

                            <div className="bo-profile-img">
                                <img src={LogoBeije} alt="" />
                            </div>
                        </div>

                        <div className="bo-profile-form">
                            <div className="bo-profile-second-row">
                                <h3>I tuoi dati</h3>
                                <div className="bo-profile-switch">
                                    <p>Free Shipping <span><SwitchProfile/> </span></p> 
                                </div>
                            </div>
                            <div className="bo-profile-flex-inputs">
                                <InputBox
                                    type="text"
                                    placeholder="Nome"
                                    className="bo-input-box"
                                />
                                <InputBox
                                    type="text"
                                    placeholder="Cognome"
                                    className="bo-input-box"
                                />
                            </div>
                            <InputBox
                                type="email"
                                placeholder="Email"
                                className="bo-input-box"
                            />
                        </div>

                        <div className="bo-profile-form">
                            <h3>Il tuo ristorante</h3>
                            <div className="bo-profile-flex-inputs">
                                <InputBox
                                    type="text"
                                    placeholder="Nome ristorante"
                                    className="bo-input-box"
                                />
                                <InputBox
                                    type="tel"
                                    placeholder="Telefono"
                                    className="bo-input-box"
                                />
                            </div>
                            <div className="bo-profile-flex-inputs">
                                <InputBox
                                    type="text"
                                    placeholder="Via"
                                    className="bo-input-box"
                                />
                                <InputBox
                                    type="text"
                                    placeholder="CAP"
                                    className="bo-input-box"
                                />
                            </div>
                            <div className="bo-profile-flex-inputs">
                                <Select
                                    selectID="state"
                                    selectName="state"
                                    data={['State1', 'State2', 'State3']}
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
                                    selectID="category"
                                    selectName="category"
                                    data={['Category1', 'Category2', 'Category3']}
                                    className="bo-input-box"
                                />
                            </div>
                            <Select
                                selectID="discount"
                                selectName="discount"
                                data={['Discount1', 'Discount2', 'Discount3']}
                                className="bo-input-box"
                            />
                            <TextArea 
                                name="description"
                                className="bo-input-box"
                                id="description"
                                value="test prova ciao"
                            />
                        </div>
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

export default Profile