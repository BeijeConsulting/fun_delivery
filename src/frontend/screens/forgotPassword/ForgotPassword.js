import React from 'react'
import InputBox from '../../../common/components/ui/inputBox/InputBox'
import Button from '../../../common/components/ui/button/Button'
import './ForgotPassword.css'
import { Component } from 'react/cjs/react.production.min'
import HtmlTag from '../../components/funcComponents/htmlTag/HtmlTag'
import delivery from '../../../common/assets/delivery.png'
import utils from '../../../common/utils/utils'
export default class ForgotPassword extends Component {

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
            error = 'invalid email'
        } else if (utils.validatePassword(this.state.password) === false) {
            error = 'invalid password'
        } else if (this.state.confpsw !== this.state.password) {
            error = 'password does not match'
        } else {
            error = "Password changed"
        }

        this.setState({
            errormsg: error
        })
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
                    <h3 style={{
                        color:"#F24464"
                    }}>{this.state.errormsg}</h3>
                    <InputBox
                        placeholder={"Email"}
                        name={"email"}
                        type={"email"}
                        value={this.state.email}
                        callback={this.handleInputChange}
                        className={"frontend-input"}
                    />

                    <InputBox
                        placeholder={"Password"}
                        name={"password"}
                        type={"password"}
                        value={this.state.password}
                        callback={this.handleInputChange}
                        className={"frontend-input"}
                    />

                    <InputBox
                        placeholder={"Confirm password"}
                        name={"confpsw"}
                        type={"password"}
                        value={this.state.confpsw}
                        callback={this.handleInputChange}
                        className={"frontend-input"}
                    />

                    <Button
                        text={"RESET"}
                        callback={this.handleSignUp}
                        className={"frontend-primary-btn"}
                    />

                </div>

                <img className='frontend-img' src={delivery} alt='delivery guy' />

            </main>
        )
    }
}
