import React, { Component } from 'react'
import './Registration.css'
import Navbar from '../../components/ui/navbar/Navbar'
import InputBox from '../../../common/components/ui/inputBox/InputBox'
import Button from '../../../common/components/ui/button/Button'
import BannerBackground from '../../components/ui/bannerBackground/BannerBackground'

export class Registration extends Component {
    render() {
        return (
            <div className="bo-registration">
                <Navbar
                    pageTitle='SING UP'
                />
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
                                    inputClass="bo-input-box"
                                    placeholder="Nome"
                                />
                                <InputBox
                                    type="text"
                                    inputClass="bo-input-box"
                                    placeholder="Cognome"
                                />
                            </div>

                            <InputBox
                                type="email"
                                inputClass="bo-input-box"
                                placeholder="Email"
                            />

                            <div className="flex-inputs">
                                <InputBox
                                    type="password"
                                    inputClass="bo-input-box"
                                    placeholder="Password"
                                />
                                <InputBox
                                    type="password"
                                    inputClass="bo-input-box"
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
                                        inputClass="bo-input-box"
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
                                        
                                        <option style={{fontWeight: 'bold'}}>Altro</option>
                                    </select>
                                {/* </div> */}

                            </div>

                            <div className="flex-inputs">
                                <InputBox
                                    type="text"
                                    inputClass="bo-input-box"
                                    placeholder="Via"
                                />
                                <InputBox
                                    type="text"
                                    inputClass="bo-input-box"
                                    placeholder="Città"
                                />
                            </div>

                            <div className="flex-inputs">
                                <InputBox
                                    type="text"
                                    inputClass="bo-input-box"
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
                                    inputClass="bo-input-box"
                                    placeholder="Telefono"
                                />
                                <InputBox
                                    type="text"
                                    inputClass="bo-input-box"
                                    placeholder="P.IVA"
                                />
                            </div>
                            <Button
                                text='REGISTRATI'
                                className='bo-btn' />
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Registration
