import React, { Component } from 'react'
import './Registration.css'
import Navbar from '../../components/ui/navbar/Navbar'
import InputBox from '../../../common/components/ui/inputBox/InputBox'
import Button from '../../../common/components/ui/button/Button'
import BannerBackground from '../../components/ui/bannerBackground/BannerBackground'
import utils from '../../../common/utils/utils'
// import constantsDictionary from '../../../common/utils/constantsDictionary'
// import Select from '../../../common/components/ui/select/Select'
import { withTranslation } from 'react-i18next';
// import { map as _map } from "lodash";
/* import IsEmpty from 'lodash'; */
// import { message, Button as ButtonAnt } from 'antd';
import localStorageRestaurants from '../../localStorageData/localStorageRestaurants';
import properties from '../../../common/utils/properties'
import localStorageData from '../../localStorageData/localStorageData'
class Registration extends Component {

    constructor(props) {
        super(props)

        this.objData = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirm_password: '',
            restaurant_name: '',
            address: {
                street: '',
                city: '',
                cap: null,
                country_id: '',
            },
            VAT: null,
            phone_number: null,
            restaurant_category_id: '',
        }

        // this.countries = _map(constantsDictionary.COUNTRIES)
        // this.categories = _map(constantsDictionary.RESTAURANT_CATEGORIES)
        this.localStorageData = JSON.parse(localStorage.getItem('localStorageData'))
        // this.localStorageRestaurants = JSON.parse(localStorage.getItem('localStorageRestaurants'))

        if(!this.localStorageData){
            this.localStorageData = localStorageData
            localStorage.setItem('localStorageData',JSON.stringify(localStorageData))
        }
        this.state = {
            firstName: false,
            lastName: false,
            email: false,
            password: false,
            confirm_password: false,
            restaurant_name: false,
            street: false,
            city: false,
            cap: false,
            country_id: false,
            VAT: false,
            phone_number: false,
            restaurant_category_id: false
        }
    }
    handleCallbackInput = (e) => {
        if (e.target.name === 'street' || e.target.name === 'city' || e.target.name === 'cap' || e.target.name === 'country_id') {
            this.objData.address[e.target.name] = e.target.value
        } else {
            this.objData[e.target.name] = e.target.value
        }
    }

    handleSubmit = () => {
        this.setState(
            {
                firstName: this.objData.firstName.length <= 4,
                lastName: this.objData.lastName.length <= 4,
                email: !utils.validateEmail(this.objData.email),
                password: !utils.validatePassword(this.objData.password),
                confirm_password: this.objData.password !== this.objData.confirm_password || this.objData.password.length <= 0,
                restaurant_name: this.objData.restaurant_name.length <= 4,
                street: !utils.validateAddress(this.objData.address.street),
                city: !utils.validateCity(this.objData.address.city),
                cap: !utils.validateCap(this.objData.address.cap),
                country_id: (this.objData.address.country_id.length <= 0),
                VAT: !utils.validateVAT(this.objData.VAT),
                phone_number: !utils.validatePhone(this.objData.phone_number),
                restaurant_category_id: (this.objData.restaurant_category_id.length <= 0)
            },
            () => {
                let responseReady = true;
                // If any value on the warnings in the state is true, the response is not ready
                for (let key in this.state) {
                    if (this.state[key] === true) {
                        return responseReady = false;
                    }
                }

                if (responseReady === true) {
                    // Here the validation is good, the registration is allowed!
                    console.log('registered:', this.objData);
                    let gamificationData = {
                        coins: 300,
                        sponsor: null,
                    };

                    let localStorageRestaurantsData = JSON.parse(localStorage.getItem('localStorageRestaurants'));

                    localStorageRestaurantsData.restaurant_list.push({
                        ...this.objData,
                        ...gamificationData,
                        id: localStorageRestaurantsData.restaurant_list.length + 1
                    });

                    localStorage.setItem('localStorageRestaurants', JSON.stringify(localStorageRestaurantsData));
                    localStorage.setItem('activeRestaurantId', JSON.stringify(localStorageRestaurantsData.restaurant_list.length));
                    this.props.history.push(properties.BO_ROUTING.PROFILE, {
                        validation: true
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

                <div className="bo-reg-form">
                    <h1>{t('backoffice.screens.registration.title')}</h1>
                    <div className="bo-reg-row">


                        {/* Form Left */}
                        <div className="bo-left-form">
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

                        </div>

                        {/* Form Right */}
                        <div className="bo-right-form">
                            <h2>{t('backoffice.screens.registration.your_restaurant')}</h2>

                            <div className="flex-inputs">

                                <InputBox
                                    type="text"
                                    className={`bo-input-box ${this.state.restaurant_name ? 'alert' : ''}`}
                                    placeholder={t('backoffice.components.inputbox.restaurant_name')}
                                    callback={this.handleCallbackInput}
                                    name='restaurant_name'
                                    callbackOnFocus={this.handleCallBackFocus}
                                />

                                <select
                                    id='category'
                                    name='restaurant_category_id'
                                    onChange={this.handleCallbackInput}
                                    onFocus={this.handleCallBackFocus}
                                    className={`bo-input-box ${this.state.restaurant_category_id ? 'alert' : ''}`}
                                    default=""
                                >
                                    <option disabled value="">Categorie</option>

                                    {
                                        this.localStorageData.restaurant_categories.map((category, index) => {
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
                                    className={`bo-input-box ${this.state.street ? 'alert' : ''}`}
                                    placeholder={t('common.components.inputbox.address')}
                                    callback={this.handleCallbackInput}
                                    name='street'
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
                                    className={`bo-input-box ${this.state.cap ? 'alert' : ''}`}
                                    placeholder={t('common.components.inputbox.zip')}
                                    callback={this.handleCallbackInput}
                                    name='cap'
                                    callbackOnFocus={this.handleCallBackFocus}
                                />

                                <select
                                    id='country_id'
                                    name='country_id'
                                    className={`bo-input-box ${this.state.country_id ? 'alert' : ''}`}
                                    onChange={this.handleCallbackInput}
                                    onFocus={this.handleCallBackFocus}
                                    defaultValue=""
                                >
                                    <option disabled value="">Stato</option>

                                    {
                                        this.localStorageData.countries.map((category, index) => {
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
                            </div>

                            <div className="flex-inputs">
                                <InputBox
                                    type="tel"
                                    className={`bo-input-box ${this.state.phone_number ? 'alert' : ''}`}
                                    placeholder={t('common.components.inputbox.number')}
                                    callback={this.handleCallbackInput}
                                    name='phone_number'
                                    callbackOnFocus={this.handleCallBackFocus}
                                />
                                <InputBox
                                    type="text"
                                    className={`bo-input-box ${this.state.VAT ? 'alert' : ''}`}
                                    placeholder={t('backoffice.components.inputbox.vat')}
                                    callback={this.handleCallbackInput}
                                    name='VAT'
                                    callbackOnFocus={this.handleCallBackFocus}
                                />
                            </div>
                            <Button
                                text={t('backoffice.components.button.register')}
                                className='bo-btn'
                                callback={this.handleSubmit} />
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default withTranslation()(Registration)
