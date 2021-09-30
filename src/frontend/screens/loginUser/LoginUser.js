
import React from "react";
import Button from "../../../common/components/ui/button/Button";
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import HtmlTag from "../../components/funcComponents/htmlTag/HtmlTag";
import delivery from "../../../common/assets/delivery.png"
import "./LoginUser.css"
import { Link } from "react-router-dom";
import utils from "../../../common/utils/utils";
// import utilities from "../../utilities/utilities";




class LoginUser extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            errorMsg: ""
        }
    }




    validateClick = () => {
        let mailControlled = utils.validateEmail(this.state.email);
        let passwordControlled = utils.validatePassword(this.state.password);

        let error = this.state.errorMsg
        if (mailControlled === false) {
            error = "Invalid Email"
        } else if (passwordControlled === false) {
            error = "Invalid password"
        }

        if (mailControlled === false && passwordControlled === false) {
            error = "Invalid email and password "
            // alert(error)
        } else if (mailControlled && passwordControlled) {
            alert('Signed in!')
            //inserire this.props.history.push('/UserPage")
        }

        this.setState({
            errorMsg: error
        })

    }



    onEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }




    render() {

        return (
            <main className="login-container">
                <div className='form-login'>
                    <HtmlTag
                        tag="h1"
                        text="Login"
                    />


                    <h5 style={{ color: "#F24464" }}>{this.state.errorMsg}</h5>


                    <InputBox
                        type='email'
                        placeholder='Username or Email'
                        name={'email'}
                        callback={this.onEmailChange}
                        value={this.state.email}
                        className={'input-login'}

                    />

                    <InputBox
                        type={'password'}
                        placeholder={'Password'}
                        name={'password'}
                        callback={this.onPasswordChange}
                        value={this.state.password}
                        className={'input-login'}

                    />

                    <Button
                        text={'SIGN IN'}
                        callback={this.validateClick}
                        className={'button-login'}
                    />

                </div>


                <Link to="/registrationUser">
                    <HtmlTag
                        tag="span"
                        text="Sign up"

                    />
                </Link>

                <Link to="/forgotPassword">
                    <HtmlTag
                        tag="p"
                        text="Forgot your password?"
                    />
                </Link>
                <div className='logo-style'>
                    <img src={delivery} />
                </div>
            </main>

        )
    }

}

export default LoginUser;