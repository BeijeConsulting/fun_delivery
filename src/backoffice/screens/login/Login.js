import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import i18n from "../../../common/localization/i18n";
import { withTranslation } from 'react-i18next';
import './Login.css'
import BannerBackground from '../../components/ui/bannerBackground/BannerBackground'
import Navbar from '../../components/ui/navbar/Navbar'
import InputBox from '../../../common/components/ui/inputBox/InputBox'
import Button from '../../../common/components/ui/button/Button'

// Utils & Properties
import Utils from '../../../common/utils/utils'
import properties from '../../../common/utils/properties';
import localStorageData from '../../localStorageData/localStorageData';

class Login extends Component {

    constructor(props) {
        super(props)

        this.email = ''
        this.password = ''

        this.state = {
            warning: false
        }
    }

    handleInputEmail = (e) => {
        this.email = e.target.value
    }

    handleInputPassword = (e) => {
        this.password = e.target.value
    }

    handelSubmit = () => {
        let emailChecked = Utils.validateEmail(this.email);       
        let passwordChecked = Utils.validatePassword(this.password);        

        let error = this.state.warning
        if (!emailChecked || !passwordChecked) {
            error = true
        } else {

            // SAVE DATA on localStorage
            let storageExists = localStorage.getItem('localStorageData');
            if(!storageExists) {
                localStorage.setItem('localStorageData', JSON.stringify(localStorageData));
            }
                        
            error = false
            this.props.history.push(properties.BO_ROUTING.PROFILE, {
                validation: true
            })
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
                <BannerBackground />
                <h1>{t('backoffice.screens.login.title')}</h1>
                {
                    this.state.warning &&
                    <h3 className="alert">{t('backoffice.screens.login.error')}</h3>
                }
                <div className="bo-login-form">
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
                </div>
                <br />
                <button value="it" onClick={this.handleClickButton}>it</button>
                <button value="en" onClick={this.handleClickButton}>en</button>
            </div>
        )
    }
}

export default withTranslation()(Login);
