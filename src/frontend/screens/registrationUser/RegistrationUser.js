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
        console.log(e.target.name);
        this.setState({ 
            [e.target.name] : e.target.value 
        });
    };

    //TEMP
    handleSignUp = () => {
        return true
    }

    render() {
        return (
            <>
                <h1 style={{ textAlign: 'center' }}>Logo Beije</h1>
                <h2 style={{ textAlign: 'center' }}>Registration</h2>
                <form className="container">
                    <div className="form">
                    <InputBox
                        placeholder={"Nome"}
                        name={"userName"}
                        type={"text"}
                        value={this.state.name}
                        callback={this.handleInputChange}
                        inputClass={"inputBox"}
                    />
                    <InputBox
                        placeholder={"Cognome"}
                        name={"surname"}
                        type={"text"}
                        value={this.state.surname}
                        callback={this.handleInputChange}
                        inputClass={"inputBox"}
                    />

                    <InputBox
                        placeholder={"Email"}
                        name={"email"}
                        type={"email"}
                        value={this.state.email}
                        callback={this.handleInputChange}
                        inputClass={"inputBox"}
                    />

                    <InputBox
                        placeholder={"Numero di Telefono"}
                        name={"phone"}
                        type={"tel"}
                        value={this.state.phone}
                        callback={this.handleInputChange}
                        inputClass={"inputBox"}
                    />

                    <InputBox
                        placeholder={"Password"}
                        name={"password"}
                        type={"password"}
                        value={this.state.password}
                        callback={this.handleInputChange}
                        inputClass={"inputBox"}
                    />

                    <InputBox
                        placeholder={"Confirm password"}
                        name={"confpsw"}
                        type={"password"}
                        value={this.state.confpsw}
                        callback={this.handleInputChange}
                        inputClass={"inputBox"}
                    />
                    {/* validazione dati e invio dei dati */}
                    <Button
                        text={"SIGN IN"}
                        className={"buttonBox"}
                        callback={this.handleSignUp}
                    />
                    </div>
                </form>
            </>
        );
    }
}

export default RegistrationUser;