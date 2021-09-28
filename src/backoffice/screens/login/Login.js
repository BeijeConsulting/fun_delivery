import React, { Component } from 'react'
import './Login.css'
import BannerBackground from '../../components/ui/bannerBackground/BannerBackground'
import Navbar from '../../components/ui/navbar/Navbar'
import InputBox from '../../../common/components/ui/inputBox/InputBox'
import Button from '../../../common/components/ui/button/Button'
import { Link } from 'react-router-dom'

// Utils
import Utils from '../../../common/utils/utils'
class Login extends Component {

    constructor(props) {
        super(props)

        this.email = ''
        this.password = ''

        this.state = {
            worning: false
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

        let error = this.state.worning
        if (!emailChecked || !passwordChecked) {
            error = true
        } else {
            error = false
            this.props.history.push('/restaurant/profile', {
                validation: true
            })
        }
        this.setState({
            worning: error
        })
    }

    render() {
        return (
            <div className="bo-login">
                <Navbar
                    pageTitle='Login'
                />
                <BannerBackground />
                <h1 style={{ marginTop: '60px', marginBottom: '20px' }}>Accedi al tuo ristorante</h1>
                {
                    this.state.worning &&
                    <h3>Email o password errati</h3>
                }
                <div className="bo-login-form">
                    <InputBox
                        type={'email'}
                        inputClass='bo-input-box'
                        placeholder='Email'
                        callback={this.handleInputEmail}
                    />
                    <InputBox
                        type={'password'}
                        inputClass='bo-input-box'
                        placeholder='Password'
                        callback={this.handleInputPassword}
                    />
                    <Link to='/restaurant/forgotPassword' className='bo-link'><b>Password dimenticata?</b></Link>
                    <Button
                        text='ACCEDI'
                        className='bo-btn'
                        callback={this.handelSubmit}
                    />
                    <div style={{ fontSize: '20px' }}>
                        Vuoi diventare un nostro partner?
                    </div>
                    <Link to='/restaurant/registration' className='bo-link'><b>Registrati ora.</b></Link>
                </div>
                <br />
            </div>
        )
    }
}

export default Login
