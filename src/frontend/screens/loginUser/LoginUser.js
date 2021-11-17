import React from "react";
import Button from "../../../common/components/ui/button/Button";
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import HtmlTag from "../../components/funcComponents/htmlTag/HtmlTag";
import delivery from "../../../common/assets/delivery.png"
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
// import utils from "../../../common/utils/utils";
// import utilities from "../../utilities/utilities";
import { Helmet } from "react-helmet";
import i18n from "../../../common/localization/i18n";
import { withTranslation } from 'react-i18next';
import Navbar from "../../components/ui/navbar/Navbar";
import genericServices from "../../../common/utils/genericServices";
import properties from "../../../common/utils/properties";
import { setToken } from '../../../common/redux/duck/tokenDuck'
import { setRefreshToken} from '../../../common/redux/duck/refreshTokenDuck'
import { get as _get } from 'lodash';
import { setUserInfo } from "../../redux/infoDuck";
import { setUserId } from "../../redux/userIdDuck";
import "./LoginUser.css"
class LoginUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            errorMsg: ""
        }
    }


    validateClick = async () => {
        // let storageUserInfo = JSON.parse(localStorage.getItem('userInfo'))
        let error = ''
        if (!this.state.email) {
            error = i18n.t('frontend.components.login_page.error_login.email')
        } else if (!this.state.password) {
            error = i18n.t('frontend.components.login_page.error_login.password')
        }
        else if (!this.state.email && !this.state.password) {
            error = i18n.t('frontend.components.login_page.error_login.email_password')
            // } else if (this.state.email && this.state.password) {
            //     if (storageUserInfo) {
            //         if (storageUserInfo.email === this.state.email &&
            //             storageUserInfo.password === this.state.password) {
            //             alert('Signed in!')
            //             this.props.history.push('/userHome');
            //         }
            //     } else {
            //         alert('Register First!')
            //         this.props.history.push('/registrationUser');
            //     }
            //inserire this.props.history.push('/UserPage")
        }
        else {
            properties.GENERIC_SERVICE = new genericServices();
            let response = await properties.GENERIC_SERVICE.apiPOST('/signin', { email: this.state.email, password: this.state.password })
            let statusCode = _get(response, "status", null)
            let userRole = _get(response, "permission", null)
            if (statusCode === 401 || userRole === "restaurant") {
                error = true;
            }
            else {
                // Salvare token nel duck
                this.props.dispatch(setToken(response.token))
                this.props.dispatch(setUserId(response.id))
                this.props.dispatch(setRefreshToken(response.refreshToken))
                // let getId = await properties.GENERIC_SERVICE.apiGET('/user' + {token})
                // console.log(getId, 'getId')

                // andare avanti nella prossima pagina
                // localStorage.setItem('token', response.token)
                let id = response.id
                console.log(id)
                let getId = await properties.GENERIC_SERVICE.apiGET(`/user/${id}`, response.token)
                this.props.dispatch(setUserInfo(getId.firstName))
                this.props.history.push('/userHome')
            }
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

    render() {
        const { t } = this.props
        return (
            <>
                {/* <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="description" content="This is a login page" />
                    <title>Login</title>
                </Helmet> */}
                <Navbar />
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
                            placeholder={t('frontend.components.login_page.login_placeholder.username')}
                            name={'email'}
                            callback={this.onEmailChange}
                            value={this.state.email}
                            className={'frontend-input'}
                        />
                        <InputBox
                            type={'password'}
                            placeholder={t('frontend.components.login_page.login_placeholder.password')}
                            name={'password'}
                            callback={this.onPasswordChange}
                            value={this.state.password}
                            className={'frontend-input'}
                        />
                        <Button
                            text={t('frontend.components.login_page.button.login')}
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
                    <img className='frontend-img' src={delivery} alt='delivery guy' />
                </main>
            </>
        )
    }
}
const mapStateToProps = state => ({
    infoDuck: state.infoDuck,
    userIdDuck: state.userIdDuck
})

export default connect(mapStateToProps)(withTranslation()(LoginUser));



















