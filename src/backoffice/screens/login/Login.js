import React, { Component } from 'react'
import './Login.css'
import BannerBackground from '../../components/ui/bannerBackground/BannerBackground'
import Navbar from '../../components/ui/navbar/Navbar'
import InputBox from '../../../common/components/ui/inputBox/InputBox'
import Button from '../../../common/components/ui/button/Button'

export class Login extends Component {

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
                    />
                    <InputBox
                        type={'password'}
                        inputClass='bo-input-box'
                        placeholder='Password'
                    />
                    <Button
                    text='ACCEDI'
                    className='bo-btn'/>
                </div>
            </div>
        )
    }
}

export default Login
