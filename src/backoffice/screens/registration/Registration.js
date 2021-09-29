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
            confirmPsw: '',
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

        this.countrys = ['State', 'Italy', 'England']

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
            warnings: {
                name: false,
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
                restaurant_category: false,
            }
        }
    }



    handleCallbackInput = (e) => {
        const words = e.target.name.split(' ')
        if (words[0] === 'address') {
            this.objData.address[words[1]] = e.target.value
        } else {
            this.objData[e.target.name] = e.target.value
        }
        this.setState({
            data: this.objData
        })
    }

    handleSubmit = () => {
        this.setState({
            warnings: {
                name: !utils.validateName(this.objData.firstName),
                lastName: !utils.validateName(this.objData.lastName),
                email: !utils.validateEmail(this.objData.email),
                password: !utils.validatePassword(this.objData.password), 
                confirm_password: this.objData.password !== this.objData.confirmPsw,                
                restaurant_name: !utils.validateName(this.objData.restaurant_name),
                street: !utils.validateAddress(this.objData.address.street),
                city: !utils.validateCity(this.objData.address.city),
                cap: !utils.validateCap(this.objData.address.cap),
                country: (this.objData.address.country.length <= 0),
                VAT: !utils.validateVAT(this.objData.VAT),
                phone_number: !utils.validatePhone(this.objData.phone_number),
                restaurant_category: (this.objData.restaurant_category.length <= 0)
            }
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
                            {
                                this.state.warning &&
                                <h3>Dati inseriti non validi</h3>
                            }
                            <div className="flex-inputs">
                                <InputBox
                                    type="text"
                                    className={`bo-input-box ${this.state.warnings.name ? 'alert' : ''}`}                                    
                                    placeholder="Nome"
                                    callback={this.handleCallbackInput}
                                    name='firstName'

                                />
                                <InputBox
                                    type="text"
                                    className={`bo-input-box ${this.state.warnings.lastName ? 'alert' : ''}`}
                                    placeholder="Cognome"
                                    callback={this.handleCallbackInput}
                                    name='lastName'
                                />
                            </div>

                            <InputBox
                                type="email"
                                className={`bo-input-box ${this.state.warnings.email ? 'alert' : ''}`}
                                placeholder="Email"
                                callback={this.handleCallbackInput}
                                name='email'
                            />

                            <div className="flex-inputs">
                                <InputBox
                                    type="password"
                                    className={`bo-input-box ${this.state.warnings.password ? 'alert' : ''}`}
                                    placeholder="Password"
                                    callback={this.handleCallbackInput}
                                    name='password'
                                />
                                <InputBox
                                    type="password"
                                    className={`bo-input-box ${this.state.warnings.password ? 'alert' : ''}`}
                                    placeholder="Conferma password"
                                    callback={this.handleCallbackInput}
                                    name='confirmPsw'
                                />
                            </div>

                        </div>

                        {/* Form Right */}
                        <div className="bo-right-form">
                            <h2>Il tuo ristorante</h2>

                            <div className="flex-inputs">
                                {/* <div className="input-flexed"> */}
                                <InputBox
                                    type="text"
                                    className={`bo-input-box ${this.state.warnings.restaurant_name ? 'alert' : ''}`}
                                    placeholder="Nome ristorante"
                                    callback={this.handleCallbackInput}
                                    name='restaurant_name'
                                />
                                {/* </div> */}

                                {/* <div className="input-flexed"> */}

                                {/* </div> */}
                                <Select
                                    data={this.categories}
                                    selectID='categories'
                                    selectName='restaurant_category'
                                    className={`bo-input-box ${this.state.warnings.restaurant_category ? 'alert' : ''}`}
                                    callback={this.handleCallbackInput}
                                />
                            </div>

                            <div className="flex-inputs">
                                <InputBox
                                    type="text"
                                    className={`bo-input-box ${this.state.warnings.street ? 'alert' : ''}`}
                                    placeholder="Via"
                                    callback={this.handleCallbackInput}
                                    name='address street'
                                />
                                <InputBox
                                    type="text"
                                    className={`bo-input-box ${this.state.warnings.city ? 'alert' : ''}`}
                                    placeholder="Città"
                                    callback={this.handleCallbackInput}
                                    name='address city'
                                />
                            </div>

                            <div className="flex-inputs">
                                <InputBox
                                    type="text"
                                    className={`bo-input-box ${this.state.warnings.cap ? 'alert' : ''}`}
                                    placeholder="CAP"
                                    callback={this.handleCallbackInput}
                                    name='address cap'
                                />
                                <Select
                                    data={this.countrys}
                                    selectID='countrys'
                                    className={`bo-input-box ${this.state.warnings.country ? 'alert' : ''}`}
                                    callback={this.handleCallbackInput}
                                    selectName='address country'
                                />
                            </div>

                            <div className="flex-inputs">
                                <InputBox
                                    type="tel"
                                    className={`bo-input-box ${this.state.warnings.phone_number ? 'alert' : ''}`}
                                    placeholder="Telefono"
                                    callback={this.handleCallbackInput}
                                    name='phone_number'
                                />
                                <InputBox
                                    type="text"
                                    className={`bo-input-box ${this.state.warnings.VAT ? 'alert' : ''}`}
                                    placeholder="P.IVA"
                                    callback={this.handleCallbackInput}
                                    name='VAT'
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
