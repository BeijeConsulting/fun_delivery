import React from "react";

//import Button
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import Button from "../../../common/components/ui/button/Button";
import HtmlTag from "../../components/funcComponents/htmlTag/HtmlTag";
import delivery from '../../../common/assets/delivery.png'
import './RegistrationUser.css'

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
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    //TEMP
    handleSignUp = () => {
        return true
    }

    render() {
        return (

            <div className="frontend-outer-container fe-registration">
                <div className="frontend-inner-container">
                    <HtmlTag
                        tag="h1"
                        text="Register"
                        className='frontend-h1'
                    />
                    <InputBox
                        placeholder={"Nome"}
                        name={"userName"}
                        type={"text"}
                        value={this.state.name}
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

                <img className='frontend-img' src={delivery} alt='img'/>
            </div>
        );
    }
}

export default RegistrationUser;