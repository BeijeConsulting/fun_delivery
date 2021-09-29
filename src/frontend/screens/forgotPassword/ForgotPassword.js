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
            <main className='frontend-outer-container fe-forgot'>
                <div className='frontend-inner-container'>
                    <HtmlTag
                        tag="h1"
                        text="Reset Password"
                        className='frontend-h1'
                    />
                    <InputBox
                        placeholder='Username or Email'
                        callback={this.controlMail}
                        trueorfalse={this.state.mailControl}
                        className='frontend-input'
                    />

                    <InputBox
                        placeholder='Password'
                        callback={this.controlPassword}
                        className='frontend-input'
                    />
                    <InputBox
                        placeholder='Confirm Password'
                        callback={this.controlPassword}
                        className='frontend-input'
                    />
                    <Button
                        text='RESET'
                        callback={this.controlRes}
                        className='frontend-primary-btn'
                    />
                </div>

                <img className='frontend-img' src={delivery} />

            </main>
        )
    }
}
