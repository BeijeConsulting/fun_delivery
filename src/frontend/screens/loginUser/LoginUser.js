import React from "react";
import Button from "../../../common/components/ui/button/Button";
import InputBox from "../../../common/components/ui/inputBox/InputBox";
import HtmlTag from "../../components/funcComponents/htmlTag/HtmlTag";
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
            <div className="login-container">

                <header className='logo-container'>
                    <div className='logo-style'>

                    </div>

                    <div>
                        <HtmlTag
                            tag="h1"
                            text="Login"
                        />
                    </div>
                </header>

                <main>
                    <div className="input-container">
                        <InputBox
                            type='email'
                            placeholder='Email'
                            name={'email'}
                            callback={this.onEmailChange}
                            value={this.state.email.text}
                        // className={'da definire'}
                        />

                        <InputBox
                            type={'password'}
                            placeholder={'Password'}
                            name={'password'}
                            callback={this.onPasswordChange}
                            value={this.state.password.text}
                        // className={'da definire'}

                        />

                        <Button
                            text={'Sign in'}
                            callback={this.validateClick}
                        // className={'da definire'}
                        />

                    </div>
                </main>
            </div>

        )
    }

}

export default LoginUser;