import React from "react";
import Button from "../../../common/components/ui/button/Button";
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import HtmlTag from "../../components/funcComponents/htmlTag/HtmlTag";
import delivery from "../../../common/assets/delivery.png"
import "./LoginUser.css"
import { Link } from "react-router-dom";
import utils from "../../../common/utils/utils";
// import utilities from "../../utilities/utilities";
import { Helmet } from "react-helmet";




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
        let storageUserInfo = JSON.parse(localStorage.getItem('userInfo'))



        let error = ''
        if (!this.state.email) {
            error = "Invalid Email"
        } else if (!this.state.password) {
            error = "Invalid password"
        }

        if (!this.state.email && !this.state.password) {
            error = "Invalid email and password "

        } else if (this.state.email && this.state.password) {
            if (storageUserInfo) {
                if (storageUserInfo.email === this.state.email &&
                    storageUserInfo.password === this.state.password) {
                    alert('Signed in!')
                    this.props.history.push('/userHome');
                }
            }else{
                alert('Register First!')
                this.props.history.push('/registratioUser');
            }
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
            <>

                {/* <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="description" content="This is a login page" />
                    <title>Login</title>
                </Helmet> */}

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
                            className={'frontend-input'}

                        />

                        <InputBox
                            type={'password'}
                            placeholder={'Password'}
                            name={'password'}
                            callback={this.onPasswordChange}
                            value={this.state.password}
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

                    <img className='frontend-img' src={delivery} alt='delivery guy' />
                </main>
            </>
        )
    }

}

export default LoginUser;
