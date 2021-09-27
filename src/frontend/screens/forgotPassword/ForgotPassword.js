import React from 'react'
import InputBox from '../../../common/components/ui/inputBox/InputBox'
import Button from '../../../common/components/ui/button/Button'
import './ForgotPassword.css'
import LogoRosa from '../../../common/assets/LogoSvgRosa.svg'
import { Component } from 'react/cjs/react.production.min'
// import Motoretta from '../../../common/assets/images/gifDelivery.gif'
export default class ForgotPassword extends Component
{

    constructor ( props )
    {
        super( props )
        this.state = {
            mailInput: '',
            passInput: '',
            mailControlInput: '',
            passwordControlInput: ''
        }
    }


    // EFFETTUO CONTROLLO SU MAIL 
    // TEMP
    controlMail = (e) => {
        return true
    }

    controlPassword = (e) => {
        return true
    }
    
    render ()
    {
        return (
            <main className='container'>
                <img className='logo' src={ LogoRosa } />
                <div className='form'>

                    <h1 className='title'>Reset Password</h1>
                    <InputBox
                        inputClass='inputBoxPass'
                        placeholder='Inserisci mail'
                        callback = {this.controlMail}
                        trueorfalse={ this.state.mailControl }
                    />

                    <InputBox
                        inputClass='inputBoxPass'
                        placeholder='Inserisci password'
                        callback = {this.controlPassword} 
                    />
                    <InputBox
                        inputClass='inputBoxPass'
                        placeholder='Conferma Password'
                        callback = {this.controlPassword} 
                    />
                    <Button
                        className=
                        'buttonForgot'
                        text='SIGN IN'
                        callback={ this.controlRes }
                    />
                    <p className='signUp'>Sign Up</p>
                </div>

            </main>
        )
    }
}
