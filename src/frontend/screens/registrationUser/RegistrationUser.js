import React from "react";
import { Helmet } from "react-helmet";

//import Button
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import Button from "../../../common/components/ui/button/Button";
import HtmlTag from "../../components/funcComponents/htmlTag/HtmlTag";
import delivery from '../../../common/assets/delivery.png'
import './RegistrationUser.css'

//utils
import utils from "../../../common/utils/utils";

class RegistrationUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            surname: "",
            email: "",
            phone: "",
            password: "",
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
    //Levare alert e mettere i vari messaggi di errori e di login effettuato
    handleSignUp = () => {
        let error = this.state.errormsg
        if (utils.validateName(this.state.userName) === false) {
            error = 'invald name'
        } else if (utils.validateName(this.state.surname) === false) {
            error = 'invalid surname'
        } else if (utils.validateEmail(this.state.email) === false) {
            error = 'invalid email'
        } else if (utils.validatePhone(this.state.phone) === false) {
            error = 'invalid phone'
        } else if (utils.validatePassword(this.state.password) === false) {
            error = 'invalid password'
        } else if (this.state.confpsw !== this.state.password) {
            error = 'password does not match'
        } else {
            error = 'Registration made'
        }

        this.setState({
            errormsg: error
        })

    }

    render() {
        return (

            <div className="frontend-outer-container fe-registration">
                <div className="frontend-inner-container">

                    <head>
                        <Helmet>
                            <meta charSet="utf-8" />
                            <meta name="description" content="This is a registration page" />
                            <title>Registration</title>
                        </Helmet>
                    </head>

                    <HtmlTag
                        tag="h1"
                        text="Register"
                        className='frontend-h1'
                    />
                    <h3 style={{
                        color: "#F24464"
                    }}>{this.state.errormsg}</h3>
                    <InputBox
                        placeholder={"Nome"}
                        name={"userName"}
                        type={"text"}
                        value={this.state.userName}
                        callback={this.handleInputChange}
                        className={"frontend-input"}
                    />
                    <InputBox
                        placeholder={"Cognome"}
                        name={"surname"}
                        type={"text"}
                        value={this.state.surname}
                        callback={this.handleInputChange}
                        className={"frontend-input"}
                    />

                    <InputBox
                        placeholder={"Email"}
                        name={"email"}
                        type={"email"}
                        value={this.state.email}
                        callback={this.handleInputChange}
                        className={"frontend-input"}
                    />

                    <InputBox
                        placeholder={"Numero di Telefono"}
                        name={"phone"}
                        type={"tel"}
                        value={this.state.phone}
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
                    {/* validazione dati e invio dei dati */}
                    <Button
                        text={"SIGN UP"}
                        callback={this.handleSignUp}
                        className={"frontend-primary-btn"}
                    />
                </div>

                <img className='frontend-img' src={delivery} alt='delivery guy' />
            </div>
        );
    }
}

export default RegistrationUser;