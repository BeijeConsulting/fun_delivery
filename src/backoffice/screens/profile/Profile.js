import { Component } from "react";
import './Profile.css';
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import LayoutBackOffice from "../../components/funcComponents/layoutBackOffice/LayoutBackOffice";
import 'antd/dist/antd.css';
import { message} from 'antd';
import { EditFilled, SaveOutlined } from '@ant-design/icons';
import coin from '../../../common/assets/BeijeCoin.png'
import TextArea from "../../../common/components/ui/textarea/TextArea";
import SwitchProfile from "../../components/ui/switch/SwitchProfile";
import utils from '../../../common/utils/utils'
import SinglePlateCard from '../../components/funcComponents/singlePlateCard/SinglePlateCard'
import properties from "../../../common/utils/properties";
import genericServices from "../../../common/utils/genericServices";
import localStorageData from "../../localStorageData/localStorageData";
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { get } from "lodash";
import logoBeije from '../../assets/images/logo_beijeRosa.png'

class Profile extends Component {
    constructor(props) {
        super(props)

        // DA TOGLIERE QUANDO API FUNZIONANO
        this.storageData = JSON.parse(localStorage.getItem('localStorageData'));
        this.storageRestaurants = JSON.parse(localStorage.getItem('localStorageRestaurants'));
        this.activeRestaurantId = JSON.parse(localStorage.getItem('activeRestaurantId'));

        this.userId = null;

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
                discount_value: [0, false],
                profile_img: ['', false],
                coins: ['', false],
                shipping_price: [0, false],
                restaurant_free_shipping: false
            },
            list_categories: [],
            list_countries: [],
            editData: false,
            firstNameSaved: ''
        }
    }

    componentDidMount = async () => {
        let token = get(this.props, 'tokenDuck.token', null)
        // Controllo se esiste il token quindi se è loggato
        if (!!token) {
            properties.GENERIC_SERVICE = new genericServices;

            // Categories
            let restaurant_categories = await properties.GENERIC_SERVICE.apiGET(`/restaurantcategories`, this.props.tokenDuck.token);

            // Restaurant Info1
            let restaurant = await properties.GENERIC_SERVICE.apiGET(`/restaurant/${this.props.restaurantIdDuck.restaurant_id}`, this.props.tokenDuck.token);

            // User ID
            this.userId = restaurant.userId
            // User Info
            let user = await properties.GENERIC_SERVICE.apiGET(`/user/${this.userId}/info`, this.props.tokenDuck.token);

            let data = {
                firstName: [user.firstName, false],
                lastName: [user.lastName, false],
                email: [user.email, false],
                restaurant_name: [restaurant.name, false],
                street: [restaurant.address, false],
                city: [restaurant.city, false],
                cap: [restaurant.postalCode, false],
                country_id: [restaurant.countryCode, false],
                VAT: [restaurant.vat, false],
                phone_number: [restaurant.phoneNumber, false],
                restaurant_category_id: [restaurant.categoryId, false],
                description: [restaurant.description, false],
                discount_value: [restaurant.discountValue !== null ? restaurant.discountValue : 0, false],
                profile_img: [restaurant.restaurantLogo, false],
                coins: [restaurant.totalCoin, false],
                shipping_price: [restaurant.shippingPrice, false],
                restaurant_free_shipping: restaurant.restaurantFreeShipping
            }

            this.setState({
                list_categories: restaurant_categories,
                list_countries: localStorageData.countries,
                data: {
                    ...this.state.data,
                    ...data
                },
                firstNameSaved: data.firstName[0]
            })
        }
    }

    handleCallbackInput = async (e) => {
        let data = {};
        if (e.target.name === 'restaurant_category_id') {
            data[e.target.name] = [parseInt(e.target.value), false];
        } 
        else if (e.target.name === 'profile_img') {

            let file = e.target.files[0]
            let fileName = utils.snakeCaseString(e.target.files[0].name);

            await utils.getBase64(file)
                .then(async result => {
                    properties.GENERIC_SERVICE = new genericServices()
                    let img = await properties.GENERIC_SERVICE.apiPUT(`restaurant/upload/logo/${this.props.restaurantIdDuck.restaurant_id}`,
                        {
                            file_base64: result,
                            file_name: fileName,
                        },
                        get(this.props, 'tokenDuck.token', null)
                    )                    
                    data[e.target.name] = [img.restaurantLogo, false];
                    message.success('Immagine salvata correttamente',2);  
                })
                .catch(err => {
                    console.log(err);
                });
        }
        else {
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

    handleSubmit = async () => {
        let newData = {
            firstName: [this.state.data.firstName[0], this.state.data.firstName[0].length <= 1],
            lastName: [this.state.data.lastName[0], this.state.data.lastName[0].length <= 1],
            email: [this.state.data.email[0], !utils.validateEmail(this.state.data.email[0])],
            restaurant_name: [this.state.data.restaurant_name[0], this.state.data.restaurant_name[0].length <= 4],
            street: [this.state.data.street[0], !utils.validateAddress(this.state.data.street[0])],
            city: [this.state.data.city[0], !utils.validateCity(this.state.data.city[0])],
            cap: [this.state.data.cap[0], !utils.validateCap(this.state.data.cap[0])],
            country_id: [this.state.data.country_id[0], this.state.data.country_id[0] !== '' ? false : true],
            VAT: [this.state.data.VAT[0], !utils.validateVAT(this.state.data.VAT[0])],
            phone_number: [this.state.data.phone_number[0], !utils.validatePhone(this.state.data.phone_number[0])],
            restaurant_category_id: [this.state.data.restaurant_category_id[0], this.state.data.restaurant_category_id[0] !== '' ? false : true],
            discount_value: [this.state.data.discount_value[0], this.state.data.discount_value[0] > 100 || this.state.data.discount_value[0] < 0],
            description: [this.state.data.description[0], false],
            shipping_price: [this.state.data.shipping_price[0], false],
            profile_img: [this.state.data.profile_img[0], false],
            coins: [this.state.data.coins[0], false],
            restaurant_free_shipping: this.state.data.restaurant_free_shipping
        }
        let correctCheck = !(!!Object.entries(newData).find((value) => value[1][1] === true))
        this.setState({
            data: {
                ...this.state.data,
                ...newData
            },
            editData: correctCheck ? false : true,
            firstNameSaved: newData.firstName[0]
        })


        // New data for backend
        if (correctCheck) {

            let newRestaurantInfo = {
                address: newData.street[0],
                categoryId: newData.restaurant_category_id[0],
                city: newData.city[0],
                countryCode: newData.country_id[0],
                description: newData.description[0],
                name: newData.restaurant_name[0],
                phoneNumber: newData.phone_number[0],
                postalCode: newData.cap[0],
                shippingPrice: newData.shipping_price[0],
                restaurantLogo: newData.profile_img[0],
                vat: newData.VAT[0],
                restaurantFreeShipping: newData.restaurant_free_shipping
            }

            let newUserInfo = {
                firstName: newData.firstName[0],
                lastName: newData.lastName[0],
                email: newData.email[0],
                phoneNumber: newData.phone_number[0]
            }

            let newDiscount = {
                value: newData.discount_value[0] / 100,
            }

            let apiUpdateRestaurant = await properties.GENERIC_SERVICE.apiPUT(`/restaurant/update/${this.props.restaurantIdDuck.restaurant_id}`, newRestaurantInfo, this.props.tokenDuck.token);
            let apiUpdateUser = await properties.GENERIC_SERVICE.apiPUT(`/user/update/${this.userId}`, newUserInfo, this.props.tokenDuck.token);
            let apiUpdateDiscount = await properties.GENERIC_SERVICE.apiPOST(`/discount`, newDiscount, this.props.tokenDuck.token);
        }
    }

    handleEdit = () => { this.setState({ editData: true }) }    

    render() {

        const { t } = this.props;

        return (
            <>
                <LayoutBackOffice pageTitle={t('backoffice.screens.profile.profile')} handleLogout={this}>
                    <div className="bo-profile-container">
                        <div className="bo-profile-first-row">
                            <div className="bo-profile-welcome">
                                <h2>{t('backoffice.screens.profile.welcome')}, {this.state.firstNameSaved}</h2>

                                {
                                    !this.state.editData &&
                                    <span className="bo-icon-edit" title={t('backoffice.screens.profile.edit_data')}><EditFilled onClick={this.handleEdit} /></span>
                                }

                                {
                                    this.state.editData &&
                                    <span className="bo-icon-edit" title={t('backoffice.screens.profile.save_data')}><SaveOutlined onClick={this.handleSubmit} /></span>
                                }

                                <div className="bo-coins-container">
                                    <span className="bo-icon-edit" title="coins"><img src={coin} /></span>
                                    <span className="bo-coin">{this.state.data.coins}</span>
                                </div>

                            </div>

                            <SinglePlateCard
                                img={this.state.data.profile_img[0]?this.state.data.profile_img[0]:logoBeije}
                                callback={this.handleCallbackInput}
                                name={'profile_img'}
                                disable={!this.state.editData}
                                newCss='logo'
                            />
                        </div>

                        <section className="bo-profile-form">
                            <div className="bo-profile-second-row">
                                <h2>{t('backoffice.screens.profile.your_data')}</h2>

                                {
                                    this.state.editData &&
                                    <div className="bo-profile-switch">
                                        <p style={{ fontSize: '16px' }}>
                                            {t('backoffice.screens.profile.free_shipping')}
                                            <span style={{ paddingLeft: '10px' }}>
                                                <SwitchProfile
                                                    handleSwitchCallback={this.handleSwitchCallback}
                                                    value={this.state.data.restaurant_free_shipping}
                                                />
                                            </span>
                                        </p>
                                    </div>
                                }


                                {
                                    !this.state.editData &&
                                    <div className="bo-profile-switch">
                                        <p style={{ fontSize: '16px' }}>
                                            Free Shipping: {this.state.data.restaurant_free_shipping === true ? 'ON' : 'OFF'}
                                        </p>
                                    </div>
                                }
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
                                    title={t('backoffice.screens.profile.first_name')}
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
                                    title={t('backoffice.screens.profile.last_name')}
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
                                title="Email"
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
                                    title={t('backoffice.screens.profile.restaurant_name')}
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
                                    title={t('backoffice.screens.profile.telephone')}
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
                                    title={t('backoffice.screens.profile.address')}
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
                                    title={t('backoffice.screens.profile.cap')}
                                />

                            </div>

                            <div className="bo-profile-flex-inputs">
                                <InputBox
                                    type="text"
                                    placeholder={t('backoffice.screens.profile.state')}
                                    className={`bo-input-box ${this.state.data.country_id[1] ? 'alert' : ''}`} name="country_id"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                    callbackOnFocus={this.handleCallBackFocus}
                                    value={this.state.data.country_id[0]}
                                    title={t('backoffice.screens.profile.state')}
                                />

                                <InputBox
                                    type="text"
                                    placeholder={t('backoffice.screens.profile.city')}
                                    className={`bo-input-box ${this.state.data.city[1] ? 'alert' : ''}`}
                                    name="city"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                    callbackOnFocus={this.handleCallBackFocus}
                                    value={this.state.data.city[0]}
                                    title={t('backoffice.screens.profile.city')}
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
                                    title={t('backoffice.screens.profile.vat')}

                                />

                                <select
                                    id='category'
                                    name='restaurant_category_id'
                                    onChange={this.handleCallbackInput}
                                    onFocus={this.handleCallBackFocus}
                                    className={`bo-input-box ${this.state.data.restaurant_category_id[1] ? 'alert' : ''}`}
                                    value={this.state.data.restaurant_category_id[0]}
                                    disabled={!this.state.editData}
                                    title={t('backoffice.screens.profile.categories')}
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

                            <InputBox
                                type="number"
                                placeholder={"Discount value %"}
                                className={`bo-input-box ${this.state.data.discount_value[1] ? 'alert' : ''}`}
                                name="discount_value"
                                callback={this.handleCallbackInput}
                                disable={!this.state.editData}
                                callbackOnFocus={this.handleCallBackFocus}
                                value={this.state.data.discount_value[0]}
                                step="1"
                                max="100"
                                min="0"
                                title={"Discount value %"}
                            />

                            <InputBox
                                type="number"
                                placeholder={"Shipping price €"}
                                className={`bo-input-box ${this.state.data.shipping_price[1] ? 'alert' : ''}`}
                                name="shipping_price"
                                callback={this.handleCallbackInput}
                                disable={!this.state.editData}
                                callbackOnFocus={this.handleCallBackFocus}
                                value={this.state.data.shipping_price[0]}
                                step="0.1"
                                min="0"
                                title={"Shipping price €"}
                            />


                            <TextArea
                                name="description"
                                className={`bo-input-box ${this.state.data.description[1] ? 'alert' : ''}`}
                                id="description"
                                placeholder={t('backoffice.screens.profile.restaurant_description')}
                                disable={!this.state.editData}
                                callback={this.handleCallbackInput}
                                callbackOnFocus={this.handleCallBackFocus}
                                value={this.state.data.description[0]}
                                title={t('backoffice.screens.profile.restaurant_description')}
                            />
                        </section>
                    </div>
                </LayoutBackOffice>
            </>
        )
    }
}

const mapStateToProps = state => ({
    tokenDuck: state.tokenDuck,
    restaurantIdDuck: state.restaurantIdDuck
})

export default connect(mapStateToProps)(withTranslation()(Profile))