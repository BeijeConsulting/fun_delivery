import React, { Component } from 'react'
import './Registration.css'
import Navbar from '../../components/ui/navbar/Navbar'
import InputBox from '../../../common/components/ui/inputBox/InputBox'
import Button from '../../../common/components/ui/button/Button'
import BannerBackground from '../../components/ui/bannerBackground/BannerBackground'
import Utils from '../../../common/utils/utils'
import { message, Button as ButtonAnt } from 'antd';
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

        this.state = {
            warning: false
        }
    }

    handleCallbackName = (param) => {
        this.objData.firstName = param
        console.log('first name', this.objData)
        // this.setState({ warning: !Utils.validateName(param) })
    }

    handleCallbackSurname = (param) => {
        this.objData.lastName = param
    }

    handleCallbackEmail = (param) => {
        this.objData.email = param
    }

    handleSubmit = () => {
        let error = this.state.warning
        /* Controllo sul nome e cognome  */
        if (!Utils.validateName(this.objData.firstName) || !Utils.validateName(this.objData.lastName)) { error = true }
        /* Controllo email */
        if (!Utils.validateEmail(this.objData.email)) { error = true }
        /* Controllo password */
        //if(!Utils.validatePassword(this.))
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
                            <div className="flex-inputs">

                                {
                                    this.state.warning &&
                                    <ButtonAnt onClick={() => { message.error('Nome non valido!') }}>Error</ButtonAnt>
                                }
                                <InputBox
                                    type="text"
                                    className="bo-input-box"
                                    placeholder="Nome"
                                    callback={this.handleCallbackName}

                                />
                                <InputBox
                                    type="text"
                                    className="bo-input-box"
                                    placeholder="Cognome"
                                    callback={this.handleCallbackSurname}
                                />
                            </div>

                            <InputBox
                                type="email"
                                className="bo-input-box"
                                placeholder="Email"
                                callback={this.handleCallbackEmail}
                            />

                            <div className="flex-inputs">
                                <InputBox
                                    type="password"
                                    className="bo-input-box"
                                    placeholder="Password"
                                />
                                <InputBox
                                    type="password"
                                    className="bo-input-box"
                                    placeholder="Conferma password"
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
                                />
                                {/* </div> */}

                                {/* <div className="input-flexed"> */}
                                <select className="bo-input-box">
                                    <option>- Seleziona Categoria -</option>
                                    <optgroup label='Ristoranti'>
                                        <option>Ristorante tradizionale</option>
                                        <option>Ristorante a tema</option>
                                        <option>Ristorante - pizzeria</option>
                                        <option>Ristorante etnico</option>
                                        <option>Ristorante gourmet</option>
                                        <option>Ristorante di intrattenimento</option>
                                    </optgroup>
                                    <optgroup label='Cucina Italiana Locale - Regionale'>
                                        <option>Trattoria</option>
                                        <option>Agriturismo</option>
                                        <option>Osteria</option>
                                        <option>Tavola calda</option>
                                        <option>Spaghetterie</option>
                                    </optgroup>
                                    <optgroup label='Cucina statunitense - Fast Food'>
                                        <option>Pizzeria</option>
                                        <option>Paninoteca</option>
                                        <option>Hamburgeria</option>
                                        <option>Burger King</option>
                                        <option>McDonald's</option>
                                        <option>KFC</option>
                                        <option>Domino's Pizza</option>
                                        <option>El Pollo Loco</option>
                                        <option>In-N-Out Burger</option>
                                        <option>Old Wild West</option>
                                        <option>Pizza Hut</option>
                                        <option>Roadhouse Grill</option>
                                        <option>Steak 'n Shake</option>
                                        <option>Subway</option>
                                        <option>Taco Bell</option>
                                        <option>Wendy's</option>
                                    </optgroup>
                                    <optgroup label='Cucina orientale'>
                                        <option>Cinese</option>
                                        <option>Giapponese</option>
                                        <option>Thailandese</option>
                                        <option>Indiano</option>
                                        <option>Greca</option>
                                        <option>Turca</option>
                                    </optgroup>
                                    <optgroup label='Cucina occidentale'>
                                        <option>Francese</option>
                                        <option>Tedesca</option>
                                        <option>Inglese</option>
                                        <option>Spagnola</option>
                                        <option>Belga</option>
                                    </optgroup>

                                    <option style={{ fontWeight: 'bold' }}>Altro</option>
                                </select>
                                {/* </div> */}

                            </div>

                            <div className="flex-inputs">
                                <InputBox
                                    type="text"
                                    className="bo-input-box"
                                    placeholder="Via"
                                />
                                <InputBox
                                    type="text"
                                    className="bo-input-box"
                                    placeholder="Città"
                                />
                            </div>

                            <div className="flex-inputs">
                                <InputBox
                                    type="text"
                                    className="bo-input-box"
                                    placeholder="CAP"
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
                                />
                                <InputBox
                                    type="text"
                                    className="bo-input-box"
                                    placeholder="P.IVA"
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
