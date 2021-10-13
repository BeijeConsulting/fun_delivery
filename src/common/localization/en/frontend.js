export const TRANSLATIONS_FRONTEND = {
    screens: {
        order_confirmed: {
            title: 'Your order is coming!',
            step_one: 'In preparation',
            step_one_description: 'We are preparing your order',
            step_two: 'Sent',
            step_two_description: 'The rider will arrive shortly',
            step_three: 'Delivered',
            step_three_description: 'The order has been delivered'
        },
        loginUser: {
            title: "Login",
            forgot_password: "Forgot password?",
            register_now: "Register now",
        },
        registrationUser: {
            title: "Register"
        },
        forgot_password: {
            title: "Reset your password"
        }

    },

    components: {
        order_confirmed: {
            button: 'Play with us'
        },

        login_page: {
            button: {
                login: "SIGN IN",
                register: "SIGN UP",
                forgot_psw: "RESET"
            },
            login_placeholder: {
                username: 'Username or Email',
                password: 'Password',
            },
            register_placeholder: {
                userName: "Username",
                surname: "Surname",
                email: "Email",
                phone: "Phone",
                password: "Password",
                confpsw: "Confirm password",
            },
            forgot_placeholder: {
                email: 'email',
                password: 'password',
                confpsw: 'confirm password',
            },
            error_login: {
                email: 'Invalid Email',
                password: 'Invalid password',
                email_password: 'Invalid email and password'
            },
            error_registration: {
                userName: 'Invalid name',
                surname: 'Invalid surname',
                email: 'Invalid email',
                phone: 'Invalid phone',
                password: 'Invalid password',
                confirm_password: 'Password does not match',
                registration_accept: 'Registration made'
            },
            error_forgot: {
                email: 'Invalid Email',
                password: 'Invalid password',
                confirm_password: 'Password does not match',
                forgot_accept: "Password changed"
            }
        }
    }
}

