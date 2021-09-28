import React, { Component } from 'react'
import './Registration.css'
import Navbar from '../../components/ui/navbar/Navbar'
import InputBox from '../../../common/components/ui/inputBox/InputBox'
import Button from '../../../common/components/ui/button/Button'
import BannerBackground from '../../components/ui/bannerBackground/BannerBackground'
import Utils from '../../../common/utils/utils'
import Select from '../../../common/components/ui/select/Select'
// import { message, Button as ButtonAnt } from 'antd';
class Registration extends Component {

    constructor(props) {
        super(props)

        this.objData = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
            confirmPsw: null,
            restaurant_name: null,
            address: {
                street: null,
                city: null,
                cap: null,
                state: null,
            },
            VAT: null,
            phone_number: null,
            restaurant_category: null,
        }

        this.country = ['Italy', 'England']

        this.categories = [
            'Ristoranti',
            'Cucina Italiana Locale - Regionale',
            'Cucina statunitense - Fast Food',
            'Cucina orientale',
            'Cucina occidentale',
            'Altro'
        ]

        this.state = {
            data:this.objData,
            warning: false
        }
    }

    componentDidMount = () => {
        this.categories = [
            'Ristoranti',
            'Cucina Italiana Locale - Regionale',
            'Cucina statunitense - Fast Food',
            'Cucina orientale',
            'Cucina occidentale',
            'Altro'
        ]
    }

    handleCallbackInput = (e) => {
        const words = e.target.name.split(' ')
        if (words[0] === 'address') {
            this.objData.address[words[1]] = e.target.value
        } else {
            this.objData[e.target.name] = e.target.value
        }
        console.log('objData', this.objData);
        this.setState({
            data:this.objData
        })
    }

    // Manca Stato e Categoria 

    handleSubmit = () => {
        let error = this.state.warning
        console.log('arrObj', this.objData);
        /* Controllo sul Nome Ristoratore*/
        if (!Utils.validateName(this.objData.firstName)) { error = true }

        /* Controllo Cognome Ristoratore */
        if (!Utils.validateName(this.objData.lastName)) { error = true }

        /* Controllo Nome Ristorante */
        if (!Utils.validateName(this.objData.restaurant_name)) { error = true }

        /* Controllo email */
        if (!Utils.validateEmail(this.objData.email)) { error = true }

        /* Controllo password e conferma password */
        if (!Utils.validatePassword(this.objData.password) || !Utils.validatePassword(this.objData.confirmPsw) || !Utils.checkPassword(this.objData.password, this.objData.confirmPsw)) {
            error = true
        }

        /* Controllo Via */

        /* Controllo  Città */

        /* Controllo CAP */
        if (!Utils.validateCap(this.objData.address.cap)) { error = true }
        /* Controllo Telefono */
        if (!Utils.validatePhone(this.objData.phone_number)) { error = true }
        /* Controllo P.IVA */
        if (!Utils.validateVAT(this.objData.VAT)) { error = true }

        this.setState({
            warning: error
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
                                    className="bo-input-box"
                                    placeholder="Nome"
                                    callback={this.handleCallbackInput}
                                    name='firstName'

                                />
                                <InputBox
                                    type="text"
                                    className="bo-input-box"
                                    placeholder="Cognome"
                                    callback={this.handleCallbackInput}
                                    name='lastName'
                                />
                            </div>

                            <InputBox
                                type="email"
                                className="bo-input-box"
                                placeholder="Email"
                                callback={this.handleCallbackInput}
                                name = 'email'
                            />

                            <div className="flex-inputs">
                                <InputBox
                                    type="password"
                                    className="bo-input-box"
                                    placeholder="Password"
                                    callback={this.handleCallbackInput}
                                    name = 'password'
                                />
                                <InputBox
                                    type="password"
                                    className="bo-input-box"
                                    placeholder="Conferma password"
                                    callback={this.handleCallbackInput}
                                    name = 'confirmPsw'
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
                                    className="bo-input-box"
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
                                    name='categories'
                                    className = 'bo-input-box'
                                    callback = {this.handleCallbackInput}
                                />
                            </div>

                            <div className="flex-inputs">
                                <InputBox
                                    type="text"
                                    className="bo-input-box"
                                    placeholder="Via"
                                    callback={this.handleCallbackInput}
                                    name='address street'
                                />
                                <InputBox
                                    type="text"
                                    className="bo-input-box"
                                    placeholder="Città"
                                    callback={this.handleCallbackInput}
                                    name='address city'
                                />
                            </div>

                            <div className="flex-inputs">
                                <InputBox
                                    type="text"
                                    className="bo-input-box"
                                    placeholder="CAP"
                                    callback={this.handleCallbackInput}
                                    name = 'address cap'
                                />
                                <select className="bo-input-box">
                                    <option>Stato</option>
                                    <option>Mex</option>
                                    <option>blabla</option>
                                </select>
                            </div>

                            <div className="flex-inputs">
                                <InputBox
                                    type="tel"
                                    className="bo-input-box"
                                    placeholder="Telefono"
                                    callback={this.handleCallbackInput}
                                    name = 'phone_number'
                                />
                                <InputBox
                                    type="text"
                                    className="bo-input-box"
                                    placeholder="P.IVA"
                                    callback={this.handleCallbackInput}
                                    name = 'VAT'
                                />
                            </div>
                            <Button
                                text='REGISTRATI'
                                className='bo-btn'
                                callback={this.handleCallbackInput} />
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Registration
