import React, {useState} from "react";

import InputBox from "../../../../common/components/ui/inputBox/InputBox";

const UserInformation = (props) =>{
    
    // storageData = JSON.parse(localStorage.getItem('localStorageData'));
    // const [state, setState] = useState({
    //     data: {
    //         firstName: ['', false],
    //         lastName: ['', false],
    //         email: ['', false],
    //         phone_number: ['', false],
    //     },
    //     editData: false
    // })



    return(
        <div className="bo-profile-form">
                            {/* <div className="bo-profile-second-row">
                                <h3>I tuoi dati</h3>
                            </div>
                            <div className="bo-profile-flex-inputs">
                                <InputBox
                                    type="text"
                                    placeholder="Nome"
                                    className={`bo-input-box ${this.state.data.firstName[1] ? 'alert' : ''}`}
                                    name="firstName"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                    callbackOnFocus={this.handleCallBackFocus}
                                />

                                <InputBox
                                    type="text"
                                    placeholder="Cognome"
                                    className={`bo-input-box ${this.state.data.lastName[1] ? 'alert' : ''}`}
                                    name="lastName"
                                    callback={this.handleCallbackInput}
                                    disable={!this.state.editData}
                                    callbackOnFocus={this.handleCallBackFocus}
                                />

                            </div>
                            <InputBox
                                type="email"
                                placeholder="Email"
                                className={`bo-input-box ${this.state.data.email[1] ? 'alert' : ''}`}
                                name="email"
                                callback={this.handleCallbackInput}
                                disable={!this.state.editData}
                                callbackOnFocus={this.handleCallBackFocus}
                            /> */}

                        </div>
    )

}
export default UserInformation