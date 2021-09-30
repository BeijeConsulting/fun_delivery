
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
            <main className="frontend-outer-container fe-login">
                <div className='frontend-inner-container'>
                    <HtmlTag
                        tag="h1"
                        text="Login"
                        className='frontend-h1'
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

                <img className='frontend-img' src={delivery} />
            </main>

        )
    }

}

export default LoginUser;