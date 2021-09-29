import React from 'react'
import InputBox from '../../../common/components/ui/inputBox/InputBox'
import Button from '../../../common/components/ui/button/Button'
import './ForgotPassword.css'
import { Component } from 'react/cjs/react.production.min'
import HtmlTag from '../../components/funcComponents/htmlTag/HtmlTag'
import { Link } from "react-router-dom";
import delivery from '../../../common/assets/delivery.png'
export default class ForgotPassword extends Component {

    constructor(props) {
        super(props)
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

    render() {
        return (
            <main className='container'>
                <div className='form'>
                    <HtmlTag
                        tag="h1"
                        text="Reset Password"
                    />
                    <InputBox
                        className='inputBoxPass'
                        placeholder='Username or Email'
                        callback={this.controlMail}
                        trueorfalse={this.state.mailControl}
                    />

                    <InputBox
                        className='inputBoxPass'
                        placeholder='Password'
                        callback={this.controlPassword}
                    />
                    <InputBox
                        className='inputBoxPass'
                        placeholder='Confirm Password'
                        callback={this.controlPassword}
                    />
                    <Button
                        className='buttonForgot'
                        text='SIGN IN'
                        callback={this.controlRes}
                    />


                </div>


                <Link to="/registrationUser">
                    <HtmlTag
                        tag="span"
                        text="Sign up"

                    />
                </Link>

                <div className='logo-forgot-style'>
                    <img src={delivery} />
                </div>

            </main>
        )
    }
}
