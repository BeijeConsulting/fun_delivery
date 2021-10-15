import React, { useState } from "react";
import utils from "../../../../common/utils/utils";

import './UserInformation.css'

import InputBox from "../../../../common/components/ui/inputBox/InputBox";
import { EditFilled, SaveOutlined } from "@ant-design/icons";

const UserInformation = (props) => {

    let storageData = JSON.parse(localStorage.getItem('userInfo'));
    const [state, setState] = useState({
        data: {
            firstName: [storageData.userName, false],
            lastName: [storageData.surname, false],
            email: [storageData.email, false],
            phone_number: [storageData.phone, false],
        },
        editData: false
    })


    const handleCallbackInput = (e) => {
        let data = {};
        data[e.target.name] = [e.target.value, false];

        console.log('[e.target.value, false]: ', [e.target.value, false])
        console.log('data[e.target.name]', data[e.target.name])


        setState({
            data: {
                ...state.data,
                [e.target.name]: data[e.target.name]
            },
            editData: true
        })

        console.log('state.data', state.data)
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

// const handleCallBackFocus = (e) => {
//     let field = state.data[e.target.name];
//     console.log('e.target-name: ', e.target.name)
//     console.log('field: ', field)
//     field[1] = false;

//     setState({
//         ...state,
//         data: {
//             ...state.data,
//             'data[e.target.name]': field
//         }
//     })
// }

const handleSubmit = () => {
    let modifiedUser = storageData
    let newData = {
        firstName: [state.data.firstName[0], state.data.firstName[0].length < 1],
        lastName: [state.data.lastName[0], state.data.lastName[0].length < 1],
        email: [state.data.email[0], !utils.validateEmail(state.data.email[0])],
        phone_number: [state.data.phone_number[0], !utils.validatePhone(state.data.phone_number[0])],
    }
    let correctCheck = !(!!Object.entries(newData).find((value) => value[1][1] === true))

    modifiedUser.userName = newData.firstName[0]
    modifiedUser.surname = newData.lastName[0]
    modifiedUser.email = newData.email[0]
    modifiedUser.phone = newData.phone_number[0]

    localStorage.setItem('userInfo', JSON.stringify(modifiedUser))

    setState({
        data: newData,
        editData: correctCheck ? false : true
    })

    // New data for backend
    if (correctCheck) {
        console.log(newData);
    }



    
}

const handleEdit = () => {
    setState({
        ...state,
        editData: true
    })
}


return (
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
            placeholder={state.data.phone_number[0]}
            className={`bo-input-box ${state.data.phone_number[1] ? 'alert' : ''}`}
            name="phone_number"
            callback={handleCallbackInput}
            disable={!state.editData}
            callbackOnFocus={handleCallBackFocus}
        />

    </div>
)

}
export default UserInformation