const SET_USERID = 'web/userId/SET_USERID'


export function setUserId(value) {
    return {
        type: SET_USERID,
        payload: {
            name: value
        }
    }
}

export function setInitUserId() {
    return {
        type: SET_USERID,
        payload: {
            name: ''
        }
    }
}
const INIT_USERID = {
    name: ''
}

export default function userIdDuck(state = INIT_USERID, action) {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case SET_USERID:
            newState.name = action.payload.name
            return newState
            case SET_USERID:
            newState.name = ''
            return newState
        default:
            return state;
    }

}