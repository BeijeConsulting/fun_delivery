import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import Button from '../../../common/components/ui/button/Button'
import InputBox from '../../../common/components/ui/inputBox/InputBox'
import BannerBackground from '../../components/ui/bannerBackground/BannerBackground'
import Navbar from '../../components/ui/navbar/Navbar'
import localStorageData from '../../localStorageData/localStorageData'
import utils from '../../../common/utils/utils'
import properties from '../../../common/utils/properties'
import genericServices from '../../../common/utils/genericServices';
import { setToken } from '../../../common/redux/duck/tokenDuck';
import { setRestaurantId } from '../../../common/redux/duck/restaurantIdDuck';
import { setRefreshToken} from '../../../common/redux/duck/refreshTokenDuck'
import { connect } from 'react-redux';
import { get as _get, omit as _omit } from 'lodash';
import './Registration.css'
class Registration extends Component {

    constructor(props) {
        super(props)

        this.objData = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirm_password: '',
            name: '',
            address: '',
            city: '',
            postalCode: null,
            countryCode: '',
            vat: null,
            phoneNumber: null,
            categoryId: '',
        }

        // Al momento prendiamo le categorie e i countries da localStorageData, dovremmo prenderle con le API ma necessitano ancora del token
        this.restaurant_categories = localStorageData.restaurant_categories
        this.countries = localStorageData.countries

        this.state = {
            error: false,
            firstName: false,
            lastName: false,
            email: false,
            password: false,
            confirm_password: false,
            name: false,
            address: false,
            city: false,
            postalCode: false,
            countryCode: false,
            vat: false,
            phoneNumber: false,
            categoryId: false
        }
    }

    componentDidMount = async () => {
        //Prende le categorie
        // properties.GENERIC_SERVICE = new genericServices();
        // let categoriesAPI = await properties.GENERIC_SERVICE.apiGET("/restaurantcategories")
        // this.restaurant_categories = categoriesAPI
    }

    handleCallbackInput = (e) => {
        this.objData[e.target.name] = e.target.value
    }

    handleSubmit = () => {
        this.setState(
            {
                firstName: this.objData.firstName.length <= 4,
                lastName: this.objData.lastName.length <= 4,
                email: !utils.validateEmail(this.objData.email),
                password: !utils.validatePassword(this.objData.password),
                confirm_password: this.objData.password !== this.objData.confirm_password || this.objData.password.length <= 0,
                name: this.objData.name.length <= 4,
                address: !utils.validateAddress(this.objData.address),
                city: !utils.validateCity(this.objData.city),
                postalCode: !utils.validateCap(this.objData.postalCode),
                countryCode: (this.objData.countryCode.length <= 0),
                vat: !utils.validateVAT(this.objData.vat),
                phoneNumber: !utils.validatePhone(this.objData.phoneNumber),
                categoryId: (this.objData.categoryId.length <= 0)
            },
            async () => {
                let responseReady = true;
                // If any value on the warnings in the state is true, the response is not ready
                for (let key in this.state) {
                    if (this.state[key] === true && key !== "error") {
                        return responseReady = false;
                    }
                }
                if (responseReady === true) {
                    let errorToSave = false
                    properties.GENERIC_SERVICE = new genericServices();
                    let registrationAPI = await properties.GENERIC_SERVICE.apiPOST("/restaurant", _omit(this.objData, 'confirm_password'))
                    let statusCode = _get(registrationAPI, "status", null)
                    if (statusCode!==200 && statusCode!== null) {
                        errorToSave = true; //deve dare un errore
                    }
                    if (!errorToSave){
                        this.props.dispatch(setToken(registrationAPI.token))
                        this.props.dispatch(setRestaurantId(registrationAPI.restaurantId))
                        this.props.dispatch(setRefreshToken(registrationAPI.refreshToken))
                        this.props.history.push(properties.BO_ROUTING.PROFILE)
                    }
                    this.setState({
                        error: errorToSave
                    })
                }
            }
        )
    }

    handleCallBackFocus = (e) => {
        this.setState({
            [e.target.name]: false
        })
    }

    render() {
        const { t } = this.props
        return (
            <div className="bo-registration">
                <Navbar pageTitle='SIGN UP' />
                <BannerBackground />
                <main>
                    <div className="bo-reg-form">
                        <h1>{t('backoffice.screens.registration.title')}</h1>
                        <section className="bo-reg-row">


                            {/* Form Left */}
                            <section className="bo-left-form">
                                <h2>{t('backoffice.screens.registration.your_data')}</h2>
                                <div className="flex-inputs">
                                    <InputBox
                                        type="text"
                                        className={`bo-input-box ${this.state.firstName ? 'alert' : ''}`}
                                        placeholder={t('common.components.inputbox.name')}
                                        callback={this.handleCallbackInput}
                                        name='firstName'
                                        callbackOnFocus={this.handleCallBackFocus}
                                    />
                                    <InputBox
                                        type="text"
                                        className={`bo-input-box ${this.state.lastName ? 'alert' : ''}`}
                                        placeholder={t('common.components.inputbox.last_name')}
                                        callback={this.handleCallbackInput}
                                        name='lastName'
                                        callbackOnFocus={this.handleCallBackFocus}
                                    />
                                </div>

                                <InputBox
                                    type="email"
                                    className={`bo-input-box ${this.state.email ? 'alert' : ''}`}
                                    placeholder="Email"
                                    callback={this.handleCallbackInput}
                                    name='email'
                                    callbackOnFocus={this.handleCallBackFocus}
                                />

                                <div className="flex-inputs">
                                    <InputBox
                                        type="password"
                                        className={`bo-input-box ${this.state.password ? 'alert' : ''}`}
                                        placeholder="Password"
                                        callback={this.handleCallbackInput}
                                        name='password'
                                        callbackOnFocus={this.handleCallBackFocus}
                                    />
                                    <InputBox
                                        type="password"
                                        className={`bo-input-box ${this.state.confirm_password ? 'alert' : ''}`}
                                        placeholder={t('common.components.inputbox.confirm_password')}
                                        callback={this.handleCallbackInput}
                                        name='confirm_password'
                                        callbackOnFocus={this.handleCallBackFocus}
                                    />
                                </div>
                                <p style={{fontSize:'14px',marginTop:'10px'}}>*{t('frontend.components.login_page.error_registration.passwordGenerality')}</p>
                                <div>
                                    {this.state.error &&
                                        <h3>❌ {t('backoffice.screens.registration.error')}</h3>
                                    }
                                </div>
                            </section>



                            {/* Form Right */}
                            <section className="bo-right-form">
                                <h2>{t('backoffice.screens.registration.your_restaurant')}</h2>

                                <div className="flex-inputs">

                                    <InputBox
                                        type="text"
                                        className={`bo-input-box ${this.state.name ? 'alert' : ''}`}
                                        placeholder={t('backoffice.components.inputbox.restaurant_name')}
                                        callback={this.handleCallbackInput}
                                        name='name'
                                        callbackOnFocus={this.handleCallBackFocus}
                                    />

                                    <select
                                        id='category'
                                        name='categoryId'
                                        onChange={this.handleCallbackInput}
                                        onFocus={this.handleCallBackFocus}
                                        className={`bo-input-box ${this.state.categoryId ? 'alert' : ''}`}
                                        defaultValue=""
                                    >
                                        <option disabled value="">{t('backoffice.useful_constants.restaurant_categories.title_component')}</option>

                                        {
                                            this.restaurant_categories.map((category, index) => {
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

                                <div className="flex-inputs">
                                    <InputBox
                                        type="text"
                                        className={`bo-input-box ${this.state.address ? 'alert' : ''}`}
                                        placeholder={t('common.components.inputbox.address')}
                                        callback={this.handleCallbackInput}
                                        name='address'
                                        callbackOnFocus={this.handleCallBackFocus}
                                    />
                                    <InputBox
                                        type="text"
                                        className={`bo-input-box ${this.state.city ? 'alert' : ''}`}
                                        placeholder={t('common.components.inputbox.city')}
                                        callback={this.handleCallbackInput}
                                        name='city'
                                        callbackOnFocus={this.handleCallBackFocus}
                                    />
                                </div>

                                <div className="flex-inputs">
                                    <InputBox
                                        type="text"
                                        className={`bo-input-box ${this.state.postalCode ? 'alert' : ''}`}
                                        placeholder={t('common.components.inputbox.zip')}
                                        callback={this.handleCallbackInput}
                                        name='postalCode'
                                        callbackOnFocus={this.handleCallBackFocus}
                                    />

                                    <select
                                        id='country_id'
                                        name='countryCode'
                                        className={`bo-input-box ${this.state.countryCode ? 'alert' : ''}`}
                                        onChange={this.handleCallbackInput}
                                        onFocus={this.handleCallBackFocus}
                                        defaultValue=""
                                    >
                                        <option disabled value="">{t('backoffice.useful_constants.countries.titleComponent')}</option>

                                        {
                                            this.countries.map((category, index) => {
                                                return (
                                                    <option
                                                        key={index}
                                                        value={category.country_code} //questo sarà il codice da prendere dalla API, quindi avrà un nome diverso
                                                    >
                                                        {category.country_name}
                                                    </option>
                                                )
                                            })
                                        }

                                    </select>
                                </div>

                                <div className="flex-inputs">
                                    <InputBox
                                        type="tel"
                                        className={`bo-input-box ${this.state.phoneNumber ? 'alert' : ''}`}
                                        placeholder={t('common.components.inputbox.number')}
                                        callback={this.handleCallbackInput}
                                        name='phoneNumber'
                                        callbackOnFocus={this.handleCallBackFocus}
                                    />
                                    <InputBox
                                        type="text"
                                        className={`bo-input-box ${this.state.vat ? 'alert' : ''}`}
                                        placeholder={t('backoffice.components.inputbox.vat')}
                                        callback={this.handleCallbackInput}
                                        name='vat'
                                        callbackOnFocus={this.handleCallBackFocus}
                                    />
                                </div>
                                <Button
                                    text={t('backoffice.components.button.register')}
                                    className='bo-btn'
                                    callback={this.handleSubmit} />
                            </section>
                        </section>
                    </div>
                </main>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tokenDuck: state.tokenDuck,
    restaurantIdDuck: state.restaurantIdDuck
})

export default connect(mapStateToProps)(withTranslation()(Registration))
