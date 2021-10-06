import React from "react";

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
            userInfo: {
                userName: "",
                surname: "",
                email: "",
                phone: "",
                password: "",
                confpsw: "",
                beijeCoin: 10,
                experience: 0,
                avatar: {
                    userAvatars: [0],
                    selectedAvatar: 0,
                },
                badge: {
                    userBadges: [0],
                    selectedBadge: 0,
                },
                mission: [],
                freeDelivery: false,
                discount: false
            },
            errormsg: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [e.target.name]: e.target.value
            }
        });


    };

    //TEST TEMP
    //Levare alert e mettere i vari messaggi di errori e di login effettuato
    handleSignUp = () => {
        let error = this.state.errormsg

        if (utils.validateName(this.state.userInfo.userName) === false) {
            error = 'invald name'
        } else if (utils.validateName(this.state.userInfo.surname) === false) {
            error = 'invalid surname'
        } else if (utils.validateEmail(this.state.userInfo.email) === false) {
            error = 'invalid email'
        } /* else if (utils.validatePhone(this.state.userInfo.phone) === false) {
            error = 'invalid phone' 
        }*/ else if (utils.validatePassword(this.state.userInfo.password) === false) {
            error = 'invalid password'
        } else if (this.state.userInfo.confpsw !== this.state.userInfo.password) {
            error = 'password does not match'
        } else {
            error = 'Registration made'
            this.props.history.push('/userHome')
        }

        this.setState({
            errormsg: error
        })

        localStorage.setItem('userInfo', JSON.stringify(this.state))

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