import React, { Component } from 'react'
import './Login.css'
import BannerBackground from '../../components/ui/bannerBackground/BannerBackground'
import Navbar from '../../components/ui/navbar/Navbar'
import InputBox from '../../../common/components/ui/inputBox/InputBox'
import Button from '../../../common/components/ui/button/Button'
import { Link } from 'react-router-dom';

// Utils & Properties
import Utils from '../../../common/utils/utils'
import properties from '../../../common/utils/properties';
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
        console.log('emailChecked = ', emailChecked);
        let passwordChecked = Utils.validatePassword(this.password);
        console.log('passwordChecked = ', passwordChecked);

        let error = this.state.warning
        if (!emailChecked || !passwordChecked) {
            error = true
        } else {
            error = false
            this.props.history.push(properties.BO_ROUTING.PROFILE, {
                validation: true
            })
        }
        this.setState({
            warning: error
        })
    }

    render() {
        return (
            <div className="bo-login">
                <Navbar
                    pageTitle='Login'
                />
                <BannerBackground />
                <h1>Accedi al tuo ristorante</h1>
                {
                    this.state.warning &&
                    <h3 className="alert">Email o password errati</h3>
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
                    <Link to={properties.BO_ROUTING.FORGOT_PSW} className='bo-link'><b>Password dimenticata?</b></Link>
                    <Button
                        text='ACCEDI'
                        className='bo-btn'
                        callback={this.handelSubmit}
                    />
                    <div style={{ fontSize: '20px' }}>
                        Vuoi diventare un nostro partner?
                    </div>
                    <Link to={properties.BO_ROUTING.REGISTRATION} className='bo-link'><b>Registrati ora.</b></Link>
                </div>
                <br />
            </div>
        )
    }
}

export default Login
