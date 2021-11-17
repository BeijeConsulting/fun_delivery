import React, { useEffect, useState } from "react";
import { EditFilled, SaveOutlined } from "@ant-design/icons";
import { get as _get } from 'lodash';

import './UserInformation.css'
import utils from "../../../../common/utils/utils";
import properties from "../../../../common/utils/properties";
import { connect } from "react-redux";
import genericServices from "../../../../common/utils/genericServices";

import InputBox from "../../../../common/components/ui/inputBox/InputBox";

const UserInformation = (props) => {

    const [state, setState] = useState({
        dataUser: null,
        editData: false,
        loadingRender: false,
        data: null
    })

    useEffect(() => {
        getDataApi()
    }, [])

    const getDataApi = async () => {
        properties.GENERIC_SERVICE = new genericServices();
        let dataUser = await properties.GENERIC_SERVICE.apiGET('/user/163', props.tokenDuck.token)
        let statusCode = _get(dataUser, "status", null)
        let userRole = _get(dataUser, "permission", [])


        setState({
            ...state,
            dataUser: dataUser,
            data: {
                firstName: [dataUser.firstName, false],
                lastName: [dataUser.lastName, false],
                email: [dataUser.email, false],
                phoneNumber: [dataUser.phoneNumber, false],
            },
            loadingRender: true
        })
    }

    const handleCallbackInput = (e) => {
        let data = {};
        data[e.target.name] = [e.target.value, false];

        setState({
            ...state,
            data: {
                ...state.data,
                [e.target.name]: data[e.target.name]
            },
            editData: true
        })

    }

    const handleCallBackFocus = (e) => {
        let field = state.data[e.target.name];
        field[1] = false;

        setState({
            ...state,
            data: {
                ...state.data,
                [e.target.name]: field
            }
        })
    }

    const handleSubmit = async () => {
        let modifiedUser = state.dataUser
        let newData = {
            firstName: [state.data.firstName[0], state.data.firstName[0].length < 1],
            lastName: [state.data.lastName[0], state.data.lastName[0].length < 1],
            email: [state.data.email[0], !utils.validateEmail(state.data.email[0])],
            phoneNumber: [state.data.phoneNumber[0], !utils.validatePhone(state.data.phoneNumber[0])],
        }
        let correctCheck = !(!!Object.entries(newData).find((value) => value[1][1] === true))

        modifiedUser.firstName = newData.firstName[0]
        modifiedUser.lastName = newData.lastName[0]
        modifiedUser.email = newData.email[0]
        modifiedUser.phoneNumber = newData.phoneNumber[0]
        
        setState({
            ...state,
            data: newData,
            editData: correctCheck ? false : true
        })

        // New data for backend
        if (correctCheck) {

            let dataUserUpdate = {
                firstName: newData.firstName[0],
                lastName: newData.lastName[0],
                email: newData.email[0],
                phoneNumber: newData.phoneNumber[0]
            }

        await properties.GENERIC_SERVICE.apiPUT('/user/update/163', dataUserUpdate, props.tokenDuck.token)
        }
    }

    const handleEdit = () => {
        setState({
            ...state,
            editData: true
        })
    }


    return (
        <>
            {state.loadingRender &&
                <div className="bo-profile-form fe-user-info-form">
                    <div className="bo-profile-second-row fe-user-second-row">
                        <h3>Le mie informazioni</h3>
                        {
                            !state.editData &&
                            <span className="bo-icon-edit fe-user-icon-edit" title="Modifica dati profilo"><EditFilled onClick={handleEdit} /></span>
                        }

                        {
                            state.editData &&
                            <span className="bo-icon-edit fe-user-icon-edit" title="Salva dati profilo"><SaveOutlined onClick={handleSubmit} /></span>
                        }
                    </div>
                    <div className="bo-profile-flex-inputs">
                        <InputBox
                            type="text"
                            placeholder={state.data.firstName[0]}
                            className={`bo-input-box ${state.data.firstName[1] ? 'alert' : ''}`}
                            name="firstName"
                            callback={handleCallbackInput}
                            disable={!state.editData}
                            callbackOnFocus={handleCallBackFocus}
                        />

                        <InputBox
                            type="text"
                            placeholder={state.data.lastName[0]}
                            className={`bo-input-box ${state.data.lastName[1] ? 'alert' : ''}`}
                            name="lastName"
                            callback={handleCallbackInput}
                            disable={!state.editData}
                            callbackOnFocus={handleCallBackFocus}
                        />

                    </div>
                    <InputBox
                        type="email"
                        placeholder={state.data.email[0]}
                        className={`bo-input-box ${state.data.email[1] ? 'alert' : ''}`}
                        name="email"
                        callback={handleCallbackInput}
                        disable={!state.editData}
                        callbackOnFocus={handleCallBackFocus}
                    />
                    <InputBox
                        type="tel"
                        placeholder={state.data.phoneNumber[0]}
                        className={`bo-input-box ${state.data.phoneNumber[1] ? 'alert' : ''}`}
                        name="phoneNumber"
                        callback={handleCallbackInput}
                        disable={!state.editData}
                        callbackOnFocus={handleCallBackFocus}
                    />

                </div>
            }
        </>
    )

}

const mapStateToProps = state => ({
    tokenDuck: state.tokenDuck
})

export default connect(mapStateToProps)(UserInformation)