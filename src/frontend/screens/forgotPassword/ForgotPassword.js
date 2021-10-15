import React from 'react'
import InputBox from '../../../common/components/ui/inputBox/InputBox'
import Button from '../../../common/components/ui/button/Button'
import './ForgotPassword.css'
import { Component } from 'react/cjs/react.production.min'
import HtmlTag from '../../components/funcComponents/htmlTag/HtmlTag'
import delivery from '../../../common/assets/delivery.png'
import utils from '../../../common/utils/utils'
import i18n from "../../../common/localization/i18n";
import { withTranslation } from 'react-i18next';
import Navbar from '../../components/ui/navbar/Navbar'

class ForgotPassword extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            confpsw: "",
            errormsg: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    //TEST TEMP
    //Levare alert e mettere i vari messaggi di errori e di reset password effettuato
    handleSignUp = () => {
        let error = this.state.errormsg
        if (utils.validateEmail(this.state.email) === false) {
            error = i18n.t('frontend.components.error_forgot.email')
        } else if (utils.validatePassword(this.state.password) === false) {
            error = i18n.t('frontend.components.error_forgot.password')
        } else if (this.state.confpsw !== this.state.password) {
            error = i18n.t('frontend.components.error_forgot.confirm_password')
        } else {
            error = i18n.t('frontend.components.error_forgot.forgot_accept')
        }

        this.setState({
            errormsg: error
        })
    }

    handleClickButton = (e) => {
        i18n.changeLanguage(e.target.value);
    }

    render() {

        const { t } = this.props

        return (

            <>
                <Navbar />
                <main className='frontend-outer-container fe-forgot'>
                    <div className='frontend-inner-container'>
                        <HtmlTag
                            tag="h1"
                            text={t('frontend.screens.forgot_password.title')}
                            className='frontend-h1'
                        />
                        <h3 style={{
                            color: "#F24464"
                        }}>{this.state.errormsg}</h3>
                        <InputBox
                            placeholder={t('frontend.components.login_page.forgot_placeholder.email')}
                            name={"email"}
                            type={"email"}
                            value={this.state.email}
                            callback={this.handleInputChange}
                            className={"frontend-input"}
                        />

                        <InputBox
                            placeholder={t('frontend.components.login_page.forgot_placeholder.password')}
                            name={"password"}
                            type={"password"}
                            value={this.state.password}
                            callback={this.handleInputChange}
                            className={"frontend-input"}
                        />

                        <InputBox
                            placeholder={t('frontend.components.login_page.forgot_placeholder.confpsw')}
                            name={"confpsw"}
                            type={"password"}
                            value={this.state.confpsw}
                            callback={this.handleInputChange}
                            className={"frontend-input"}
                        />

                        <Button
                            text={t('frontend.components.login_page.button.forgot_psw')}
                            callback={this.handleSignUp}
                            className={"frontend-primary-btn"}
                        />

                    </div>

                    <button value="it" onClick={this.handleClickButton}>it</button>
                    <button value="en" onClick={this.handleClickButton}>en</button>

                    <img className='frontend-img' src={delivery} alt='delivery guy' />

                </main>
            </>
        )
    }
}
export default withTranslation()(ForgotPassword);

