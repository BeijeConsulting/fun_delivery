import { Component } from "react";
import './Profile.css';
import LogoBeije from '../../assets/images/logo_beijeRosa.png';
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import { EditFilled, DollarCircleOutlined } from '@ant-design/icons';
import Select from "../../../common/components/ui/select/Select";
import TextArea from "../../../common/components/ui/textarea/TextArea";
import SwitchProfile from "../../components/ui/switch/SwitchProfile";
import Button from "../../../common/components/ui/button/Button"
import 'antd/dist/antd.css';
import utils from "../../../common/utils/utils";

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: [undefined, false],
            lastName: [undefined, false],
            email: [undefined, false],
            password: [undefined, false],
            restaurant_name: [undefined, false],
            street: [undefined, false],
            city: [undefined, false],
            cap: [undefined, false],
            country: [undefined, false],
            VAT: [undefined, false],
            phone_number: [undefined, false],
            restaurant_category: [undefined, false],
            description: [undefined, true],
            editData: false
        }
    }

    handleCallbackInput = (e) => { this.setState({ ...this.state, [`${e.target.name}`]: [e.target.value, false] }) }

    // TODO button per salvare le modifiche
    handleSubmit = () => {
        this.setState({
            firstName: [this.state.firstName[0], !utils.validateName(this.objData.firstName)],
            lastName: [this.state.lastName[0], !utils.validateName(this.objData.lastName)],
            email: [this.state.email[0], !utils.validateEmail(this.objData.email)],
            password: [this.state.password[0], !utils.validatePassword(this.objData.password)],
            restaurant_name: [this.state.restaurant_name[0], !utils.validateName(this.objData.restaurant_name)],
            street: [this.state.street[0], !utils.validateAddress(this.objData.address.street)],
            city: [this.state.city[0], !utils.validateCity(this.objData.address.city)],
            cap: [this.state.cap[0], !utils.validateCap(this.objData.address.cap)],
            country: [this.state.country[0], (this.objData.address.country.length <= 0)],
            VAT: [this.state.VAT[0], !utils.validateVAT(this.objData.VAT)],
            phone_number: [this.state.phone_number[0], !utils.validatePhone(this.objData.phone_number)],
            restaurant_category: [this.state.restaurant_category[0], (this.objData.restaurant_category.length <= 0)],
            description: [this.state.description[0], true]
        })
    }

    handelEdit = () => { this.setState({ editData: true }) }

    render() {
        return (
            <>
                <LayoutBackOffice pageTitle="PROFILE">
                    <div className="bo-profile-container">
                        <div className="bo-profile-first-row">
                            <div className="bo-profile-welcome">
                                <h2>Benvenuto, Admin</h2>
                                <span className="bo-icon-edit"><EditFilled onClick={this.handelEdit} /></span>
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
                                    <p>Free Shipping <span><SwitchProfile /> </span></p>
                                </div>
                            </div>
                            <div className="bo-profile-flex-inputs">
                                {
                                    this.state.editData &&
                                    <Button
                                        text='SALVA'
                                        className='bo-btn'
                                    />
                                }
                                <InputBox
                                    type="text"
                                    placeholder="Nome"
                                    className="bo-input-box"
                                    name="firstName"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}

                                />

                                <InputBox
                                    type="text"
                                    placeholder="Cognome"
                                    className="bo-input-box"
                                    name="lastName"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                />

                            </div>
                            <InputBox
                                type="email"
                                placeholder="Email"
                                className="bo-input-box"
                                name="email"
                                callback={this.handleCallbackInput}
                                disable={!this.state.editData}
                            />

                        </div>
                        <div className="bo-profile-form">
                            <h3>Il tuo ristorante</h3>
                            <div className="bo-profile-flex-inputs">

                                <InputBox
                                    type="text"
                                    placeholder="Nome ristorante"
                                    className="bo-input-box"
                                    name="restaurant_name"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                />

                                <InputBox
                                    type="tel"
                                    placeholder="Telefono"
                                    className="bo-input-box"
                                    name="phone_number"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                />

                            </div>
                            <div className="bo-profile-flex-inputs">

                                <InputBox
                                    type="text"
                                    placeholder="Via"
                                    className="bo-input-box"
                                    name="street"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                />

                                <InputBox
                                    type="text"
                                    placeholder="CAP"
                                    className="bo-input-box"
                                    name="cap"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                />

                            </div>
                            <div className="bo-profile-flex-inputs">

                                <Select
                                    selectID="state"
                                    selectName="state"
                                    data={['State1', 'State2', 'State3']}
                                    className="bo-input-box"
                                    disable={!this.state.editData}
                                />

                                <InputBox
                                    type="text"
                                    placeholder="Città"
                                    className="bo-input-box"
                                    name="city"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                />

                            </div>
                            <div className="bo-profile-flex-inputs">

                                <InputBox
                                    type="text"
                                    placeholder="P.IVA"
                                    className="bo-input-box"
                                    name="VAT"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                />

                                <Select
                                    selectID="category"
                                    selectName="category"
                                    data={['Category1', 'Category2', 'Category3']}
                                    className="bo-input-box"
                                    disable={!this.state.editData}
                                />

                            </div>

                            <Select
                                selectID="discount"
                                selectName="discount"
                                data={['Discount1', 'Discount2', 'Discount3']}
                                className="bo-input-box"
                                disable={!this.state.editData}
                            />

                            <TextArea
                                name="description"
                                className="bo-input-box"
                                id="description"
                                value="test prova ciao"
                                disable={!this.state.editData}
                            />
                        </div>
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

export default Profile