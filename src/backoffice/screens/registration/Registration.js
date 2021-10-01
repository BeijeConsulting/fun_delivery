import React, { Component } from 'react'
import './Registration.css'
import Navbar from '../../components/ui/navbar/Navbar'
import InputBox from '../../../common/components/ui/inputBox/InputBox'
import Button from '../../../common/components/ui/button/Button'
import BannerBackground from '../../components/ui/bannerBackground/BannerBackground'
import utils from '../../../common/utils/utils'
import Select from '../../../common/components/ui/select/Select'
/* import IsEmpty from 'lodash'; */

// import { message, Button as ButtonAnt } from 'antd';
class Registration extends Component {

    constructor(props) {
        super(props)

        this.objData = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirm_password: '',
            restaurant_name: '',
            address: {
                street: '',
                city: '',
                cap: null,
                country: '',
            },
            VAT: null,
            phone_number: null,
            restaurant_category: '',
        }

        this.countries = ['State', 'Italy', 'England']

        this.categories = [
            'Categories',
            'Pizza',
            'Pokè',
            'Sushi',
            'Messicano',
            'Italiano',
            'Hamburger',
            'Altro'
        ]


        this.state = {
            firstName: false,
            lastName: false,
            email: false,
            password: false,
            confirm_password: false,
            restaurant_name: false,
            street: false,
            city: false,
            cap: false,
            country: false,
            VAT: false,
            phone_number: false,
            restaurant_category: false
        }
    }

    handleCallbackInput = (e) => {        
        if (e.target.name === 'street' || e.target.name === 'city' || e.target.name === 'cap' || e.target.name === 'country') {
            this.objData.address[e.target.name] = e.target.value
        } else {
            this.objData[e.target.name] = e.target.value
        }
    }

    handleSubmit = () => {
        this.setState(
            // Calling setState Asyncronously
            () => ({
                firstName: !utils.validateName(this.objData.firstName),
                lastName: !utils.validateName(this.objData.lastName),
                email: !utils.validateEmail(this.objData.email),
                password: !utils.validatePassword(this.objData.password),
                confirm_password: this.objData.password !== this.objData.confirm_password || this.objData.password.length <= 0,
                restaurant_name: this.objData.restaurant_name.length <= 4,
                street: !utils.validateAddress(this.objData.address.street),
                city: !utils.validateCity(this.objData.address.city),
                cap: !utils.validateCap(this.objData.address.cap),
                country: (this.objData.address.country.length <= 0),
                VAT: !utils.validateVAT(this.objData.VAT),
                phone_number: !utils.validatePhone(this.objData.phone_number),
                restaurant_category: (this.objData.restaurant_category.length <= 0)
            }),            
            () => {
                let responseReady = true;
                // If any value on the warnings in the state is true, the response is not ready
                for(let key in this.state) {
                    if(this.state[key] === true) {
                        return responseReady = false;
                    }
                }

                if(responseReady === true) {
                    // Here the validation is good, the registration is allowed!
                    console.log('registered:', this.objData);
                }
            }               
        ) 
        
        
        
    }

    handleCallBackFocus = (e) => {       
        this.setState({            
            [e.target.name]: false
        })                
    }

    render() {
        return (
            <div className="bo-registration">
                <Navbar pageTitle='SING UP' />
                <BannerBackground />

                <div className="bo-reg-form">
                    <h1>Registra il tuo ristorante.</h1>
                    <div className="bo-reg-row">


                        {/* Form Left */}
                        <div className="bo-left-form">
                            <h2>I tuoi dati</h2>
                            <div className="flex-inputs">
                                <InputBox
                                    type="text"
                                    className={`bo-input-box ${this.state.firstName ? 'alert' : ''}`}
                                    placeholder="Nome"
                                    callback={this.handleCallbackInput}
                                    name='firstName'
                                    callbackOnFocus={this.handleCallBackFocus}
                                />
                                <InputBox
                                    type="text"
                                    className={`bo-input-box ${this.state.lastName ? 'alert' : ''}`}
                                    placeholder="Cognome"
                                    callback={this.handleCallbackInput}
                                    name='lastName'
                                    callbackOnFocus={this.handleCallBackFocus}
                                />
                            </div>

                            <InputBox
                                type="email"
                                className={`bo-input-box ${this.state.email ? 'alert' : ''}`}
                                placeholder="Email"
                                callback={this.handleCallbackInput}
                                name='email'
                                callbackOnFocus={this.handleCallBackFocus}
                            />

                            <div className="flex-inputs">
                                <InputBox
                                    type="password"
                                    className={`bo-input-box ${this.state.password ? 'alert' : ''}`}
                                    placeholder="Password"
                                    callback={this.handleCallbackInput}
                                    name='password'
                                    callbackOnFocus={this.handleCallBackFocus}
                                />
                                <InputBox
                                    type="password"
                                    className={`bo-input-box ${this.state.confirm_password ? 'alert' : ''}`}
                                    placeholder="Conferma password"
                                    callback={this.handleCallbackInput}
                                    name='confirm_password'
                                    callbackOnFocus={this.handleCallBackFocus}
                                />
                            </div>

                        </div>

                        {/* Form Right */}
                        <div className="bo-right-form">
                            <h2>Il tuo ristorante</h2>

                            <div className="flex-inputs">
                               
                                <InputBox
                                    type="text"
                                    className={`bo-input-box ${this.state.restaurant_name ? 'alert' : ''}`}
                                    placeholder="Nome ristorante"
                                    callback={this.handleCallbackInput}
                                    name='restaurant_name'
                                    callbackOnFocus={this.handleCallBackFocus}
                                />
                                
                                <Select
                                    data={this.categories}
                                    selectID='categories'
                                    selectName='restaurant_category'
                                    className={`bo-input-box ${this.state.restaurant_category ? 'alert' : ''}`}
                                    callback={this.handleCallbackInput}
                                    callbackOnFocus={this.handleCallBackFocus}
                                />
                            </div>

                            <div className="flex-inputs">
                                <InputBox
                                    type="text"
                                    className={`bo-input-box ${this.state.street ? 'alert' : ''}`}
                                    placeholder="Via"
                                    callback={this.handleCallbackInput}
                                    name='street'
                                    callbackOnFocus={this.handleCallBackFocus}
                                />
                                <InputBox
                                    type="text"
                                    className={`bo-input-box ${this.state.city ? 'alert' : ''}`}
                                    placeholder="Città"
                                    callback={this.handleCallbackInput}
                                    name='city'
                                    callbackOnFocus={this.handleCallBackFocus}
                                />
                            </div>

                            <div className="flex-inputs">
                                <InputBox
                                    type="text"
                                    className={`bo-input-box ${this.state.cap ? 'alert' : ''}`}
                                    placeholder="CAP"
                                    callback={this.handleCallbackInput}
                                    name='cap'
                                    callbackOnFocus={this.handleCallBackFocus}
                                />
                                <Select
                                    data={this.countries}
                                    selectID='countrys'
                                    className={`bo-input-box ${this.state.country ? 'alert' : ''}`}
                                    callback={this.handleCallbackInput}
                                    selectName='country'
                                    callbackOnFocus={this.handleCallBackFocus}
                                />
                            </div>

                            <div className="flex-inputs">
                                <InputBox
                                    type="number"
                                    className={`bo-input-box ${this.state.phone_number ? 'alert' : ''}`}
                                    placeholder="Telefono"
                                    callback={this.handleCallbackInput}
                                    name='phone_number'
                                    callbackOnFocus={this.handleCallBackFocus}
                                />
                                <InputBox
                                    type="text"
                                    className={`bo-input-box ${this.state.VAT ? 'alert' : ''}`}
                                    placeholder="P.IVA"
                                    callback={this.handleCallbackInput}
                                    name='VAT'
                                    callbackOnFocus={this.handleCallBackFocus}
                                />
                            </div>
                            <Button
                                text='REGISTRATI'
                                className='bo-btn'
                                callback={this.handleSubmit} />
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Registration
