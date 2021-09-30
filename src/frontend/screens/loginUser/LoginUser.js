
import React from "react";
import Button from "../../../common/components/ui/button/Button";
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import HtmlTag from "../../components/funcComponents/htmlTag/HtmlTag";
import delivery from "../../../common/assets/delivery.png"
import "./LoginUser.css"
import { Link } from "react-router-dom";
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
            <main className="frontend-outer-container fe-login">
                <div className='frontend-inner-container'>
                    <HtmlTag
                        tag="h1"
                        text="Login"
                        className='frontend-h1'
                    />


                    <InputBox
                        type='email'
                        placeholder='Username or Email'
                        name={'email'}
                        callback={this.onEmailChange}
                        value={this.state.email.text}
                        className={'frontend-input'}
                    />

                    <InputBox
                        type={'password'}
                        placeholder={'Password'}
                        name={'password'}
                        callback={this.onPasswordChange}
                        value={this.state.password.text}
                        className={'frontend-input'}

                    />

                    <Button
                        text={'SIGN IN'}
                        callback={this.validateClick}
                        className={'frontend-primary-btn'}
                    />

                </div>


                <Link to="/registrationUser" style={{ textDecoration: 'none' }}>
                    <HtmlTag
                        tag="span"
                        text="Sign up"
                        className='frontend-link'
                    />
                </Link>

                <Link to="/forgotPassword" style={{ textDecoration: 'none' }}>
                    <HtmlTag
                        tag="span"
                        text="Forgot your password?"
                        className='frontend-link'
                    />
                </Link>

                <img className='frontend-img' src={delivery} alt='delivery guy'/>
            </main>

        )
    }

}

export default LoginUser;