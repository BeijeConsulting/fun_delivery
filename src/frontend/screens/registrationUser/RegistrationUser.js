import React from "react";

//import Button
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import Button from "../../../common/components/ui/button/Button";

import { Link } from "react-router-dom";
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
            <>
                <h2 style={{ textAlign: 'center' }}>Registrazione</h2>
                <div className='container'>
                        <div className="grid-container">
                            <div className="grid-item">
                                <InputBox
                                    placeholder={"Nome"}
                                    name={"userName"}
                                    type={"text"}
                                    value={this.state.userName}
                                    callback={this.handleInputChange}
                                    className={"inputBox_registration"}
                                />
                            </div>
                            <div className="grid-item">
                                <InputBox
                                    placeholder={"Cognome"}
                                    name={"surname"}
                                    type={"text"}
                                    value={this.state.surname}
                                    callback={this.handleInputChange}
                                    className={"inputBox_registration"}
                                />
                            </div>

                            <div className="grid-item">
                                <InputBox
                                    placeholder={"Email"}
                                    name={"email"}
                                    type={"email"}
                                    value={this.state.email}
                                    callback={this.handleInputChange}
                                    className={"inputBox_registration"}
                                />
                            </div>

                            <div className="grid-item">
                                <InputBox
                                    placeholder={"Numero di Telefono"}
                                    name={"phone"}
                                    type={"tel"}
                                    value={this.state.phone}
                                    callback={this.handleInputChange}
                                    className={"inputBox_registration"}
                                />
                            </div>

                            <div className="grid-item">
                                <InputBox
                                    placeholder={"Password"}
                                    name={"password"}
                                    type={"password"}
                                    value={this.state.password}
                                    callback={this.handleInputChange}
                                    className={"inputBox_registration"}
                                />
                            </div>

                            <div className="grid-item">
                                <InputBox
                                    placeholder={"Confirm password"}
                                    name={"confpsw"}
                                    type={"password"}
                                    value={this.state.confpsw}
                                    callback={this.handleInputChange}
                                    className={"inputBox_registration"}
                                />
                            </div>
                            {/* validazione dati e invio dei dati */}
                        </div>
                    <div className="wrapper-button">
                        <Button
                            text={"SIGN IN"}
                            className={"buttonBox"}
                            callback={this.handleSignUp}
                        />
                    </div>
                
             </div>
            </>
        );
    }
}

export default RegistrationUser;