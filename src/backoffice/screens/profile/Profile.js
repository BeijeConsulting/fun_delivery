import { Component } from "react";
import './Profile.css';
import LogoBeije from '../../assets/images/logo_beijeRosa.png';
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import { EditFilled, SaveOutlined, DollarCircleOutlined } from '@ant-design/icons';
import TextArea from "../../../common/components/ui/textarea/TextArea";
import SwitchProfile from "../../components/ui/switch/SwitchProfile";
import 'antd/dist/antd.css';
import utils from '../../../common/utils/utils'
import SinglePlateCard from '../../components/funcComponents/singlePlateCard/SinglePlateCard'
import localStorageData from "../../localStorageData/localStorageData";
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

// const format = 'HH:mm';

class Profile extends Component {
    constructor(props) {
        super(props)
        console.log(props)
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
                discount_id: ['', false],
                profile_img: ['', false],
                coins: ['', false],
                restaurant_free_shipping:true
            },
            list_categories: [],
            discounts: [],
            list_countries: [],
            editData: false
        }
    }

    componentDidMount() {
        let restaurant_categories = this.storageData.restaurant_categories;
        let discounts = this.storageRestaurants.discounts;

        // Finding the right restaurant info
        let restaurant = this.storageRestaurants.restaurant_list.find(item => {
            return item.id === this.activeRestaurantId;
        })

        let data = {
            firstName: [restaurant.firstName, false],
            lastName: [restaurant.lastName, false],
            email: [restaurant.email, false],
            restaurant_name: [restaurant.restaurant_name, false],
            street: [restaurant.address.street, false],
            city: [restaurant.address.city, false],
            cap: [restaurant.address.cap, false],
            country_id: [restaurant.address.country_id, false],
            VAT: [restaurant.VAT, false],
            phone_number: [restaurant.phone_number, false],
            restaurant_category_id: [restaurant.restaurant_category_id, false],
            description: [restaurant.description, false],
            discount_id: [restaurant.discount_id, false],
            profile_img: [restaurant.profile_img, false],
            coins: [restaurant.coins, false],
            restaurant_free_shipping: restaurant.restaurant_free_shipping
        }

        this.setState({
            list_categories: restaurant_categories,
            list_countries: localStorageData.countries,
            discounts: discounts,
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

    handleSwitchCallback = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                restaurant_free_shipping: e
            }
        })
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
            discount_id: [this.state.data.discount_id[0], !this.state.data.discount_id[0]],
            description: [this.state.data.description[0], this.state.data.description[0].length <= 4]
        }
        let correctCheck = !(!!Object.entries(newData).find((value) => value[1][1] === true))
        this.setState({
            data: {
                ...this.state.data,
                ...newData
            },
            editData: correctCheck ? false : true
        })

        // New data for backend
        if (correctCheck) {
            console.log(newData);
        }
    }

    handleEdit = () => { this.setState({ editData: true }) }

    render() {

        const { t } = this.props;

        return (
            <>
                <LayoutBackOffice pageTitle={t('backoffice.screens.profile.profile')} handleLogout = {this}>
                    <div className="bo-profile-container">
                        <div className="bo-profile-first-row">
                            <div className="bo-profile-welcome">
                                <h2>{t('backoffice.screens.profile.welcome')}, {this.state.data.firstName}</h2>

                                {
                                    !this.state.editData &&
                                    <span className="bo-icon-edit" title={t('backoffice.screens.profile.edit_data')}><EditFilled onClick={this.handleEdit} /></span>
                                }

                                {
                                    this.state.editData &&
                                    <span className="bo-icon-edit" title={t('backoffice.screens.profile.save_data')}><SaveOutlined onClick={this.handleSubmit} /></span>
                                }

                                <div className="bo-coins-container">
                                    <span className="bo-icon-edit" title="coins"><DollarCircleOutlined /></span>
                                    <span className="bo-coin">{this.state.data.coins}</span>
                                </div>

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

                        <section className="bo-profile-form">
                            <div className="bo-profile-second-row">
                                <h2>{t('backoffice.screens.profile.your_data')}</h2>
                                <div className="bo-profile-switch">
                                    <p style={{fontSize:'16px'}}>
                                        {t('backoffice.screens.profile.free_shipping')}
                                        <span style={{paddingLeft:'10px'}}>
                                            <SwitchProfile
                                                handleSwitchCallback={this.handleSwitchCallback}
                                                value={this.state.data.restaurant_free_shipping}
                                            />
                                        </span></p>
                                </div>
                            </div>
                            <div className="bo-profile-flex-inputs">
                                <InputBox
                                    type="text"
                                    placeholder={t('backoffice.screens.profile.first_name')}
                                    className={`bo-input-box ${this.state.data.firstName[1] ? 'alert' : ''}`}
                                    name="firstName"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                    callbackOnFocus={this.handleCallBackFocus}
                                    value={this.state.data.firstName[0]}
                                />

                                <InputBox
                                    type="text"
                                    placeholder={t('backoffice.screens.profile.last_name')}
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

                        </section>
                        <section className="bo-profile-form">
                            <h2>{t('backoffice.screens.profile.your_restaurant')}</h2>

                            <div className="bo-profile-flex-inputs">

                                <InputBox
                                    type="text"
                                    placeholder={t('backoffice.screens.profile.restaurant_name')}
                                    className={`bo-input-box ${this.state.data.restaurant_name[1] ? 'alert' : ''}`}
                                    name="restaurant_name"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                    callbackOnFocus={this.handleCallBackFocus}
                                    value={this.state.data.restaurant_name[0]}
                                />

                                <InputBox
                                    type="tel"
                                    placeholder={t('backoffice.screens.profile.telephone')}
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
                                    placeholder={t('backoffice.screens.profile.address')}
                                    className={`bo-input-box ${this.state.data.street[1] ? 'alert' : ''}`}
                                    name="street"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                    callbackOnFocus={this.handleCallBackFocus}
                                    value={this.state.data.street[0]}
                                />

                                <InputBox
                                    type="text"
                                    placeholder={t('backoffice.screens.profile.cap')}
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
                                    <option disabled value="">{t('backoffice.screens.profile.state')}</option>

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
                                    placeholder={t('backoffice.screens.profile.city')}
                                    className={`bo-input-box ${this.state.data.city[1] ? 'alert' : ''}`}
                                    name="city"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                    callbackOnFocus={this.handleCallBackFocus}
                                    value={this.state.data.city[0]}
                                />

                            </div>
                            <div className="bo-profile-flex-inputs">

                                <InputBox
                                    type="text"
                                    placeholder={t('backoffice.screens.profile.vat')}
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
                                    <option disabled value="">{t('backoffice.screens.profile.categories')}</option>

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

                            <select
                                id='discount_id'
                                name='discount_id'
                                onChange={this.handleCallbackInput}
                                onFocus={this.handleCallBackFocus}
                                className={`bo-input-box ${this.state.data.discount_id[1] ? 'alert' : ''}`}
                                value={this.state.data.discount_id[0]}
                                disabled={!this.state.editData}
                            >
                                <option disabled value="">{t('backoffice.screens.profile.discounts')}</option>

                                {
                                    this.state.discounts.map((discount, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={discount.id}
                                            >
                                                {discount.label}
                                            </option>
                                        )
                                    })
                                }

                            </select>


                            <TextArea
                                name="description"
                                className={`bo-input-box ${this.state.data.description[1] ? 'alert' : ''}`}
                                id="description"
                                placeholder={t('backoffice.screens.profile.restaurant_description')}
                                disable={!this.state.editData}
                                callback={this.handleCallbackInput}
                                callbackOnFocus={this.handleCallBackFocus}
                                value={this.state.data.description[0]}
                            />
                        </section>
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

const mapStateToProps = state =>({
    tokenDuck: state.tokenDuck
})

export default connect(mapStateToProps)(withTranslation()(Profile))