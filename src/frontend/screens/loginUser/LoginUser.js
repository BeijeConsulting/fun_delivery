import React from "react";
import Button from "../../../common/components/ui/button/Button";
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import HtmlTag from "../../components/funcComponents/htmlTag/HtmlTag";
import delivery from "../../../common/assets/delivery.png"
import "./LoginUser.css"
import { Link } from "react-router-dom";
import utils from "../../../common/utils/utils";
// import utilities from "../../utilities/utilities";
import { Helmet } from "react-helmet";
import i18n from "../../../common/localization/i18n";
import { withTranslation } from 'react-i18next';




class LoginUser extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            errorMsg: ""
        }
    }




    validateClick = () => {
        let storageUserInfo = JSON.parse(localStorage.getItem('userInfo'))



        let error = ''
        if (!this.state.email) {
            error = i18n.t('frontend.components.error_login.email')
        } else if (!this.state.password) {
            error = i18n.t('frontend.components.error_login.password')
        }

        if (!this.state.email && !this.state.password) {
            error = i18n.t('frontend.components.error_login.email_password')

        } else if (this.state.email && this.state.password) {
            if (storageUserInfo) {
                if (storageUserInfo.userInfo.email === this.state.email &&
                    storageUserInfo.userInfo.password === this.state.password) {
                    alert('Signed in!')
                    this.props.history.push('/userHome');
                }
            } else {
                alert('Register First!')
                this.props.history.push('/registratioUser');
            }
            //inserire this.props.history.push('/UserPage")
        }

        this.setState({
            errorMsg: error
        })
    }



    onEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    handleClickButton = (e) => {
        i18n.changeLanguage(e.target.value);
    }

    render() {

        const { t } = this.props

        return (
            <>

                {/* <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="description" content="This is a login page" />
                    <title>Login</title>
                </Helmet> */}

                <main className="frontend-outer-container fe-login">
                    <div className='frontend-inner-container'>


                        <HtmlTag
                            tag="h1"
                            text={t('frontend.screens.loginUser.title')}
                            className='frontend-h1'
                        />


                        <h5 style={{ color: "#F24464" }}>{this.state.errorMsg}</h5>


                        <InputBox
                            type='email'
                            placeholder={t('frontend.components.login_placeholder.username')}
                            name={'email'}
                            callback={this.onEmailChange}
                            value={this.state.email}
                            className={'frontend-input'}

                        />

                        <InputBox
                            type={'password'}
                            placeholder={t('frontend.components.login_placeholder.password')}
                            name={'password'}
                            callback={this.onPasswordChange}
                            value={this.state.password}
                            className={'frontend-input'}

                        />

                        <Button
                            text={t('frontend.components.button.login')}
                            callback={this.validateClick}
                            className={'frontend-primary-btn'}
                        />

                    </div>


                    <Link to="/registrationUser" style={{ textDecoration: 'none' }}>
                        <HtmlTag
                            tag="span"
                            text={t('frontend.screens.loginUser.register_now')}
                            className='frontend-link'
                        />
                    </Link>

                    <Link to="/forgotPassword" style={{ textDecoration: 'none' }}>
                        <HtmlTag
                            tag="span"
                            text={t('frontend.screens.loginUser.forgot_password')}
                            className='frontend-link'
                        />
                    </Link>

                    <button value="it" onClick={this.handleClickButton}>it</button>
                    <button value="en" onClick={this.handleClickButton}>en</button>

                    <img className='frontend-img' src={delivery} alt='delivery guy' />
                </main>
            </>
        )
    }

}

export default withTranslation()(LoginUser);
