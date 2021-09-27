import { logRoles } from "@testing-library/dom";
import React from "react";
import Button from "../../../common/components/ui/button/Button";
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import HtmlTag from "../../components/funcComponents/htmlTag/HtmlTag";
import LogoRosa from "../../../common/assets/LogoSvgRosa.svg"
import "./LoginUser.css"
// import utilities from "../../utilities/utilities";




class LoginUser extends React.Component {
    constructor(props) {
        super(props)

        this.state = {


            // buttonClick: false,

            email: {
                text: "",
                isValid: false,

            },
            password: {
                text: "",
                isValid: false,

            }

        }
    }



    validateClick = (e) => {

        return true

    }


    onEmailChange = (e) => {
        this.setState({
            email: {
                text: e.target.value,
                isValid: false
            }
        })
    }

    onPasswordChange = (e) => {
        this.setState({
            password: {
                text: e.target.value,
                isValid: false
            }
        })
    }




    render() {

        return (
            <main className="login-container">
                <img className='logo-style' src={LogoRosa} />
                <div className='form-login'>
                    <HtmlTag
                        tag="h1"
                        text="Login"
                    />


                    <InputBox
                        type='email'
                        placeholder='Email'
                        name={'email'}
                        callback={this.onEmailChange}
                        value={this.state.email.text}
                        className={'input'}
                    />

                    <InputBox
                        type={'password'}
                        placeholder={'Password'}
                        name={'password'}
                        callback={this.onPasswordChange}
                        value={this.state.password.text}
                       className={'input'}

                    />

                    <Button
                        text={'Sign in'}
                        callback={this.validateClick}
                        className={'button'}
                    />
                </div>

            </main>

        )
    }

}

export default LoginUser;