const SET_ADDRESS = 'web/userAddress/SET_ADDRESS'
const SET_INIT_ADDRESS = 'web/userAddress/SET_INIT_ADDRESS'


export function setAddress(value) {
    return {
        type: SET_ADDRESS,
        payload: {
            address: value
        }
    }
}

export function setInitAddress() {
    return {
        type: SET_INIT_ADDRESS,
        payload: {
            address: ''
        }
    }
}
const INIT_ADDRESS = {
    address: ''
}

export default function addressDuck(state = INIT_ADDRESS, action) {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case SET_ADDRESS:
            newState.address = action.payload.address
            return newState
            case SET_INIT_ADDRESS:
            newState.address = ''
            return newState
        default:
            return state;
    }

}