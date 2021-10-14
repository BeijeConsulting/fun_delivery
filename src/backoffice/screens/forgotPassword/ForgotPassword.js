import React, { Component } from 'react'
import './ForgotPassword.css'
import BannerBackground from '../../components/ui/bannerBackground/BannerBackground'
import Navbar from '../../components/ui/navbar/Navbar'
import InputBox from '../../../common/components/ui/inputBox/InputBox'
import Button from '../../../common/components/ui/button/Button'
import { Link } from 'react-router-dom'
import Utils from '../../../common/utils/utils'
import properties from '../../../common/utils/properties'
import { withTranslation } from 'react-i18next';
class ForgotPassword extends Component {

    constructor(props) {
        super(props)

        this.email = ''
        this.password = ''
        this.confirmPsw = ''
        this.state = {
            warning:false
        }
    }

    handleInputEmail = (e) => {
        this.email = e.target.value
    }

    handleInputPassword = (e) => {
        this.password = e.target.value
    }

    handleInputConfirmPsw = (e) => {
        this.confirmPsw = e.target.value
    }

    handelSubmit = () => {

        let emailChecked = Utils.validateEmail(this.email);
        console.log('emailChecked = ', emailChecked);
        let passwordChecked = Utils.validatePassword(this.password);
        console.log('passwordChecked = ', passwordChecked);

        let error = this.state.warning
        if (!emailChecked || !passwordChecked || (this.password !== this.confirmPsw)) {
            error = true
        } else {
            error = false
            this.props.history.goBack()
        }
        this.setState({
            warning: error
        })
    }
    render() {
        const { t } = this.props
        return (
            <div className="bo-login">
                <Navbar
                    pageTitle='Reset Password'
                />
                <BannerBackground />
                <h1 style={{ marginTop: '60px', marginBottom: '20px' }}>{t('backoffice.screens.forgot_password.title')}</h1>
                {
                    this.state.warning &&
                    <h3 class="alert">{t('backoffice.screens.forgot_password.error')}</h3>
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
                    <InputBox
                        type={'password'}
                        className='bo-input-box'
                        placeholder={t('backoffice.components.inputbox.confirm_password')}
                        callback={this.handleInputConfirmPsw}
                    />
                    <Button
                        text='RESET PASSWORD'
                        className='bo-btn'
                        callback = {this.handelSubmit}
                    />
                    <div style={{ fontSize: '20px' }}>
                    {t('backoffice.screens.forgot_password.partner')}
                    </div>
                    <Link to={properties.BO_ROUTING.LOGIN} className='bo-link'><b>{t('backoffice.screens.forgot_password.login')}</b></Link>
                </div>
                <br />
            </div>
        )
    }
}

export default  withTranslation()(ForgotPassword)