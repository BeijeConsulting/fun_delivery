import React, { Component } from 'react'
import './Login.css'
import BannerBackground from '../../components/ui/bannerBackground/BannerBackground'
import Navbar from '../../components/ui/navbar/Navbar'
import InputBox from '../../../common/components/ui/inputBox/InputBox'
import Button from '../../../common/components/ui/button/Button'
import { Link } from 'react-router-dom'

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }

    handleInputEmail = (e) => {
        this.setState({
            email:e.target.value
        })
    }

    handleInputPassword = (e) => {
        this.setState({
            password:e.target.value
        })
    }

    handelSubmit = () => {

    }

    render() {
        return (
            <div className="bo-login">
                <Navbar
                    pageTitle='Login'
                />
                <BannerBackground />
                <h1 style={{ marginTop: '60px', marginBottom: '20px' }}>Accedi al tuo ristorante</h1>
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
                        callback = {this.handleInputPassword}
                    />
                    <Link to='/restaurant/forgotPassword' className='bo-link'><b>Password dimenticata?</b></Link>
                    <Button
                        text='ACCEDI'
                        className='bo-btn'
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
