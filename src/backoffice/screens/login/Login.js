import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import i18n from "../../../common/localization/i18n";
import { withTranslation } from 'react-i18next';
import './Login.css'
import BannerBackground from '../../components/ui/bannerBackground/BannerBackground'
import Navbar from '../../components/ui/navbar/Navbar'
import InputBox from '../../../common/components/ui/inputBox/InputBox'
import Button from '../../../common/components/ui/button/Button'
import { get as _get } from 'lodash';
// Utils & Properties
import Utils from '../../../common/utils/utils'
import properties from '../../../common/utils/properties';
import genericServices from '../../../common/utils/genericServices';
import localStorageData from '../../localStorageData/localStorageData';
import localStorageRestaurants from '../../localStorageData/localStorageRestaurants';
import { setToken } from '../../../common/redux/duck/tokenDuck';
import { connect } from 'react-redux';
import { setRestaurantId } from '../../../common/redux/duck/restaurantIdDuck';
class Login extends Component {

    constructor(props) {
        super(props)
        this.email = ''
        this.password = ''
        this.state = {
            warning: false
        }
    }
    componentDidMount = () => {
        // Salvo nel local Storage i Ristoranti
        let foundRestaurant = JSON.parse(localStorage.getItem('localStorageRestaurants'));
        if (!foundRestaurant) {
            localStorage.setItem('localStorageRestaurants', JSON.stringify(localStorageRestaurants));
        }

    }

    handleInputEmail = (e) => {
        this.email = e.target.value
    }
    handleInputPassword = (e) => {
        this.password = e.target.value
    }
    handleSubmit = async () => {
        let emailChecked = Utils.validateEmail(this.email);
        // let passwordChecked = Utils.validatePassword(this.password);
        let passwordChecked = this.password.length >= 2
        let error = this.state.warning
        if (!emailChecked || !passwordChecked) {
            error = true
        } else {
            properties.GENERIC_SERVICE = new genericServices();
            let response = await properties.GENERIC_SERVICE.apiPOST('/signin', { email: this.email, password: this.password })
            let statusCode = _get(response, "status", null)
            let userRole = _get(response, "permission", null)
            let restaurantId = _get(response, "restaurant_id", null)

            if (statusCode === "401" || !userRole === 'restaurant' || restaurantId === null) {
                error = true;
            }
            else {
                // Salvare token nel duck
                this.props.dispatch(setToken(response.token))
                this.props.dispatch(setRestaurantId(restaurantId))
                // andare avanti nella prossima pagina
                this.props.history.push(properties.BO_ROUTING.PROFILE)
            }
        }

        this.setState({
            warning: error
        })
    }

    handleClickButton = (e) => {
        i18n.changeLanguage(e.target.value);
    }

    render() {
        const { t } = this.props

        return (
            <div className="bo-login">
                <Navbar
                    pageTitle='Login'
                />
                <main>
                    <BannerBackground />
                    <h1>{t('backoffice.screens.login.title')}</h1>
                    {
                        this.state.warning &&
                        <h3 className="alert">{t('backoffice.screens.login.error')}</h3>
                    }
                    <section className="bo-login-form">
                        <InputBox
                            type={'email'}
                            className='bo-input-box'
                            placeholder='Email'
                            callback={this.handleInputEmail}
                        />
                        <InputBox
                            type={'password'}
                            className='bo-input-box'
                            placeholder='Password'
                            callback={this.handleInputPassword}
                        />
                        <Link to={properties.BO_ROUTING.FORGOT_PSW} className='bo-link'><b> {t('backoffice.screens.login.forgot_password')}</b></Link>
                        <Button
                            text={t('backoffice.components.button.login')}
                            className='bo-btn'
                            callback={this.handleSubmit}
                        />
                        <div style={{ fontSize: '20px' }}>
                            {t('backoffice.screens.login.partner')}
                        </div>
                        <Link to={properties.BO_ROUTING.REGISTRATION} className='bo-link'><b>{t('backoffice.screens.login.register_now')}</b></Link>
                    </section>
                </main>
                <br />
            </div>
        )
    }
}

export default connect()(withTranslation()(Login));
