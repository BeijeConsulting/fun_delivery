import { Component } from "react";
import './Profile.css';
import LogoBeije from '../../assets/images/logo_beijeRosa.png';
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import { EditFilled} from '@ant-design/icons';
import Select from "../../../common/components/ui/select/Select";
import TextArea from "../../../common/components/ui/textarea/TextArea";
import SwitchProfile from "../../components/ui/switch/SwitchProfile";
import Button from "../../../common/components/ui/button/Button";
import 'antd/dist/antd.css';
import utils from '../../../common/utils/utils'

const format = 'HH:mm';

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                firstName: [undefined, false],
                lastName: [undefined, false],
                email: [undefined, false],
                restaurant_name: [undefined, false],
                street: [undefined, false],
                city: [undefined, false],
                cap: [undefined, false],
                country: [undefined, false],
                VAT: [undefined, false],
                phone_number: [undefined, false],
                restaurant_category: [undefined, false],
                description: [undefined, false],
                discount: [undefined, false]
            },
            editData: false
        }
    }

    handleCallbackInput = (e) => {
        this.setState(prevState => ({
            data: {
                ...prevState.data,
                [`${e.target.name}`]: [e.target.value, false]
            },
            editData: true
        }))
    }

    // TODO Sistemare questa function
    handleSubmit = () => {
        let newData = {
            firstName: [this.state.data.firstName[0], !utils.validateName(this.state.data.firstName[0]) || this.state.data.firstName[0] === undefined],
            lastName: [this.state.data.lastName[0], !utils.validateName(this.state.data.lastName[0]) || this.state.data.lastName[0] === undefined],
            email: [this.state.data.email[0], !utils.validateEmail(this.state.data.email[0])],
            restaurant_name: [this.state.data.restaurant_name[0], this.state.data.restaurant_name[0] === undefined ? true : this.state.data.restaurant_name[0].length >= 4 ? false : true],
            street: [this.state.data.street[0], !utils.validateAddress(this.state.data.street[0])],
            city: [this.state.data.city[0], !utils.validateCity(this.state.data.city[0]) || this.state.data.city[0] === undefined],
            cap: [this.state.data.cap[0], !utils.validateCap(this.state.data.cap[0])],
            country: [this.state.data.country[0], this.state.data.country[0] === undefined],
            VAT: [this.state.data.VAT[0], !utils.validateVAT(this.state.data.VAT[0])],
            phone_number: [this.state.data.phone_number[0], !utils.validatePhone(this.state.data.phone_number[0])],
            restaurant_category: [this.state.data.restaurant_category[0], this.state.data.restaurant_category[0] === undefined],
            discount: [this.state.data.discount[0], this.state.data.discount[0] === undefined],
            description: [this.state.data.description[0], false]
        }

        if (!!Object.entries(newData).find((value) => value[1][1] === true) && !!Object.entries(newData).find((value) => value[1][0] === "")) {
            this.setState({
                data: newData,
                editData: false
            })
            console.log(this.state)
        } else {
            this.setState({
                data: newData,
                editData: true
            })
        }
    }

    handleEdit = () => { this.setState({ editData: true }) }

    render() {
        return (
            <>
                <LayoutBackOffice pageTitle="PROFILE">
                    <div className="bo-profile-container">
                        <div className="bo-profile-first-row">
                            <div className="bo-profile-welcome">
                                <h2>Benvenuto, Admin</h2>
                                <span className="bo-icon-edit"><EditFilled onClick={this.handleEdit} /></span>
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
                            {
                                this.state.editData &&
                                <Button
                                    text='SALVA'
                                    className='bo-btn'
                                    callback={this.handleSubmit}
                                />
                            }

                            <div className="bo-profile-flex-inputs">
                                <InputBox
                                    type="text"
                                    placeholder="Nome"
                                    className={`bo-input-box ${this.state.data.firstName[1] ? 'alert' : ''}`}
                                    name="firstName"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                />

                                <InputBox
                                    type="text"
                                    placeholder="Cognome"
                                    className={`bo-input-box ${this.state.data.lastName[1] ? 'alert' : ''}`}
                                    name="lastName"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                />

                            </div>
                            <InputBox
                                type="email"
                                placeholder="Email"
                                className={`bo-input-box ${this.state.data.email[1] ? 'alert' : ''}`}
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
                                    className={`bo-input-box ${this.state.data.restaurant_name[1] ? 'alert' : ''}`}
                                    name="restaurant_name"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                />

                                <InputBox
                                    type="tel"
                                    placeholder="Telefono"
                                    className={`bo-input-box ${this.state.data.phone_number[1] ? 'alert' : ''}`}
                                    name="phone_number"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                />

                            </div>
                            <div className="bo-profile-flex-inputs">

                                <InputBox
                                    type="text"
                                    placeholder="Via"
                                    className={`bo-input-box ${this.state.data.street[1] ? 'alert' : ''}`}
                                    name="street"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                />

                                <InputBox
                                    type="text"
                                    placeholder="CAP"
                                    className={`bo-input-box ${this.state.data.cap[1] ? 'alert' : ''}`}
                                    name="cap"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                />

                            </div>
                            <div className="bo-profile-flex-inputs">

                                <Select
                                    selectID="country"
                                    selectName="country"
                                    data={['Stato', 'Italy', 'England']}
                                    className={`bo-input-box ${this.state.data.country[1] ? 'alert' : ''}`}
                                    disable={!this.state.editData}
                                    callback={this.handleCallbackInput}
                                />

                                <InputBox
                                    type="text"
                                    placeholder="Città"
                                    className={`bo-input-box ${this.state.data.city[1] ? 'alert' : ''}`}
                                    name="city"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                />

                            </div>
                            <div className="bo-profile-flex-inputs">

                                <InputBox
                                    type="text"
                                    placeholder="P.IVA"
                                    className={`bo-input-box ${this.state.data.VAT[1] ? 'alert' : ''}`}
                                    name="VAT"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                />

                                <Select
                                    selectID="category"
                                    selectName="restaurant_category"
                                    data={[
                                        'Categoria',
                                        'Pizza',
                                        'Pokè',
                                        'Sushi',
                                        'Messicano',
                                        'Italiano',
                                        'Hamburger',
                                        'Altro'
                                    ]}
                                    className={`bo-input-box ${this.state.data.restaurant_category[1] ? 'alert' : ''}`}
                                    disable={!this.state.editData}
                                    callback={this.handleCallbackInput}
                                />

                            </div>

                            <Select
                                selectID="discount"
                                selectName="discount"
                                data={['Discount1', 'Discount2', 'Discount3']}
                                className={`bo-input-box ${this.state.data.discount[1] ? 'alert' : ''}`}
                                disable={!this.state.editData}
                                callback={this.handleCallbackInput}
                            />

                            <TextArea
                                name="description"
                                className={`bo-input-box ${this.state.data.description[1] ? 'alert' : ''}`}
                                id="description"
                                value="test prova ciao"
                                disable={!this.state.editData}
                                callback={this.handleCallbackInput}
                            />
                        </div>
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

export default Profile