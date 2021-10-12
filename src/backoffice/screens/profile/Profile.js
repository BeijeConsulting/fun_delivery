import { Component } from "react";
import './Profile.css';
import LogoBeije from '../../assets/images/logo_beijeRosa.png';
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import { EditFilled, SaveOutlined } from '@ant-design/icons';
import Select from "../../../common/components/ui/select/Select";
import TextArea from "../../../common/components/ui/textarea/TextArea";
import SwitchProfile from "../../components/ui/switch/SwitchProfile";
import 'antd/dist/antd.css';
import utils from '../../../common/utils/utils'
import SinglePlateCard from '../../components/funcComponents/singlePlateCard/SinglePlateCard'
// const format = 'HH:mm';

class Profile extends Component {
    constructor(props) {
        super(props)

        this.storageData = JSON.parse(localStorage.getItem('localStorageData'));
        this.storageRestaurants = JSON.parse(localStorage.getItem('localStorageRestaurants'));
        this.activeRestaurantId = JSON.parse(localStorage.getItem('activeRestaurantId'));
        
        this.state = {
            data: {
                firstName: ['', false],
                lastName: ['', false],
                email: ['', false],
                restaurant_name: ['', false],
                street: ['', false],
                city: ['', false],
                cap: ['', false],
                country_id: ['', false],
                VAT: ['', false],
                phone_number: ['', false],
                restaurant_category_id: ['', false],
                description: ['', false],
                discount: ['', false],
                profile_img: ['', false],
                coins: ['', false]
            },
            list_categories: [],
            list_countries: [],
            editData: false
        }
        console.log("stato: ", this.state.data)
    }

    componentDidMount() {
        let restaurant_categories = this.storageData.restaurant_categories;  
        
        // Finding the right restaurant info
        let restaurant = this.storageRestaurants.restaurant_list.find(item => {
            return item.id === this.activeRestaurantId;
        }) 

        let data = {
            firstName: [restaurant.firstName, false],            
            lastName: [restaurant.lastName, false],
            email: [restaurant.email, false],
            restaurant_name: [restaurant.firstName, false],
            street: [restaurant.street, false],
            city: [restaurant.city, false],
            cap: [restaurant.cap, false],
            country_id: [restaurant.country_id, false],
            VAT: [restaurant.VAT, false],
            phone_number: [restaurant.phone_number, false],
            restaurant_category_id: [restaurant.restaurant_category_id, false],
            description: [restaurant.description, false],
            discount: [restaurant.discount, false],
            profile_img: [restaurant.profile_img, false],
            coins:[restaurant.coins,false]
        }
        
        // Init list_countries
        let countries = [
            {
                country_name: 'Italy',
                country_id: 1
            },
            {
                country_name: 'England',
                country_id: 2
            }
        ];

        this.setState({
            list_categories: restaurant_categories,
            list_countries: countries,
            data: {
                ...this.state.data,
                ...data
            }
        })
    }

    handleCallbackInput = (e) => {
        let data = {};
        if (e.target.name === 'country_id' || e.target.name === 'restaurant_category_id') {
            data[e.target.name] = [parseInt(e.target.value), false];
        } else {
            data[e.target.name] = [e.target.value, false];
        }

        this.setState(prevState => ({
            data: {
                ...prevState.data,
                ...data
            },
            editData: true
        }))
    }

    handleCallBackFocus = (e) => {
        let field = this.state.data[e.target.name];
        field[1] = false;

        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: field
            }
        })
    }

    handleSubmit = () => {
        let newData = {
            firstName: [this.state.data.firstName[0], this.state.data.firstName[0].length <= 4],
            lastName: [this.state.data.lastName[0], this.state.data.lastName[0].length <= 4],
            email: [this.state.data.email[0], !utils.validateEmail(this.state.data.email[0])],
            restaurant_name: [this.state.data.restaurant_name[0], this.state.data.restaurant_name[0].length <= 4],
            street: [this.state.data.street[0], !utils.validateAddress(this.state.data.street[0])],
            city: [this.state.data.city[0], !utils.validateCity(this.state.data.city[0])],
            cap: [this.state.data.cap[0], !utils.validateCap(this.state.data.cap[0])],
            country_id: [this.state.data.country_id[0], this.state.data.country_id[0] !== '' ? false : true],
            VAT: [this.state.data.VAT[0], !utils.validateVAT(this.state.data.VAT[0])],
            phone_number: [this.state.data.phone_number[0], !utils.validatePhone(this.state.data.phone_number[0])],
            restaurant_category_id: [this.state.data.restaurant_category_id[0], this.state.data.restaurant_category_id[0] !== '' ? false : true],
            discount: [this.state.data.discount[0], !this.state.data.discount[0]],
            description: [this.state.data.description[0], this.state.data.description[0].length <= 4]
        }
        let correctCheck = !(!!Object.entries(newData).find((value) => value[1][1] === true))
        this.setState({
            data: newData,
            editData: correctCheck ? false : true
        })

        // New data for backend
        if (correctCheck) {
            console.log(newData);
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

                                {
                                    !this.state.editData &&
                                    <span className="bo-icon-edit" title="Modifica dati profilo"><EditFilled onClick={this.handleEdit} /></span>
                                }

                                {
                                    this.state.editData &&
                                    <span className="bo-icon-edit" title="Salva dati profilo"><SaveOutlined onClick={this.handleSubmit} /></span>
                                }

                                {/* <span className="bo-icon-edit"><DollarCircleOutlined /> Beije Coin </span> */}

                            </div>
                            {/* <img src={LogoBeije} alt="" /> */}
                            <SinglePlateCard
                                img={LogoBeije}
                                callback={this.handleCallbackInput}
                                name={'profile_img'}
                                disable={!this.state.editData}
                                newCss='logo'
                            />
                        </div>
                        <div className="bo-profile-form">
                            <div className="bo-profile-second-row">
                                <h3>I tuoi dati</h3>
                                <div className="bo-profile-switch">
                                    <p>Free Shipping <span><SwitchProfile /> </span></p>
                                </div>
                            </div>
                            <div className="bo-profile-flex-inputs">
                                <InputBox
                                    type="text"
                                    placeholder="Nome"
                                    className={`bo-input-box ${this.state.data.firstName[1] ? 'alert' : ''}`}
                                    name="firstName"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                    callbackOnFocus={this.handleCallBackFocus}
                                    value={this.state.data.firstName[0]}
                                />

                                <InputBox
                                    type="text"
                                    placeholder="Cognome"
                                    className={`bo-input-box ${this.state.data.lastName[1] ? 'alert' : ''}`}
                                    name="lastName"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                    callbackOnFocus={this.handleCallBackFocus}
                                    value={this.state.data.lastName[0]}
                                />

                            </div>
                            <InputBox
                                type="email"
                                placeholder="Email"
                                className={`bo-input-box ${this.state.data.email[1] ? 'alert' : ''}`}
                                name="email"
                                callback={this.handleCallbackInput}
                                disable={!this.state.editData}
                                callbackOnFocus={this.handleCallBackFocus}
                                value={this.state.data.email[0]}
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
                                    callbackOnFocus={this.handleCallBackFocus}
                                    value={this.state.data.restaurant_name[0]}
                                />

                                <InputBox
                                    type="tel"
                                    placeholder="Telefono"
                                    className={`bo-input-box ${this.state.data.phone_number[1] ? 'alert' : ''}`}
                                    name="phone_number"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                    callbackOnFocus={this.handleCallBackFocus}
                                    value={this.state.data.phone_number[0]}
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
                                    callbackOnFocus={this.handleCallBackFocus}
                                    value={this.state.data.street[0]}
                                />

                                <InputBox
                                    type="text"
                                    placeholder="CAP"
                                    className={`bo-input-box ${this.state.data.cap[1] ? 'alert' : ''}`}
                                    name="cap"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                    callbackOnFocus={this.handleCallBackFocus}
                                    value={this.state.data.cap[0]}
                                />

                            </div>
                            <div className="bo-profile-flex-inputs">

                                <select
                                    id='country'
                                    name='country_id'
                                    className={`bo-input-box ${this.state.data.country_id[1] ? 'alert' : ''}`}
                                    onChange={this.handleCallbackInput}
                                    onFocus={this.handleCallBackFocus}
                                    value={this.state.data.country_id[0]}
                                    disabled={!this.state.editData}
                                >
                                    <option disabled value="">Stato</option>

                                    {
                                        this.state.list_countries.map((category, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={category.country_id}
                                                >
                                                    {category.country_name}
                                                </option>
                                            )
                                        })
                                    }

                                </select>

                                <InputBox
                                    type="text"
                                    placeholder="Città"
                                    className={`bo-input-box ${this.state.data.city[1] ? 'alert' : ''}`}
                                    name="city"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                    callbackOnFocus={this.handleCallBackFocus}
                                />

                            </div>
                            <div className="bo-profile-flex-inputs">

                                <InputBox
                                    type="text"
                                    placeholder="P.IVA"
                                    className={`bo-input-box ${this.state.data.VAT[1] ? 'alert' : ''}`}
                                    name="VAT"
                                    callbackOnFocus={this.handleCallBackFocus}
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                    value={this.state.data.VAT[0]}

                                />

                                <select
                                    id='category'
                                    name='restaurant_category_id'
                                    onChange={this.handleCallbackInput}
                                    onFocus={this.handleCallBackFocus}
                                    className={`bo-input-box ${this.state.data.restaurant_category_id[1] ? 'alert' : ''}`}
                                    value={this.state.data.restaurant_category_id[0]}
                                    disabled={!this.state.editData}
                                >
                                    <option disabled value="">Categorie</option>

                                    {
                                        this.state.list_categories.map((category, index) => {
                                            return (
                                                <option
                                                    key={index}
                                                    value={category.id}
                                                >
                                                    {category.name}
                                                </option>
                                            )
                                        })
                                    }

                                </select>
                            </div>

                            <Select
                                selectID="discount"
                                selectName="discount"
                                data={['Discount1', 'Discount2', 'Discount3']}
                                className={`bo-input-box ${this.state.data.discount[1] ? 'alert' : ''}`}
                                disable={!this.state.editData}
                                callback={this.handleCallbackInput}
                                callbackOnFocus={this.handleCallBackFocus}
                                value={this.state.data.discount[0]}
                            />

                            <TextArea
                                name="description"
                                className={`bo-input-box ${this.state.data.description[1] ? 'alert' : ''}`}
                                id="description"
                                placeholder="Descrizione ristorante"
                                disable={!this.state.editData}
                                callback={this.handleCallbackInput}
                                callbackOnFocus={this.handleCallBackFocus}
                                value={this.state.data.description[0]}
                            />
                        </div>
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

export default Profile