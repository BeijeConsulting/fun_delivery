const SET_USERINFO = 'web/userInfo/SET_USERINFO'


export function setUserInfo(value) {
    return {
        type: SET_USERINFO,
        payload: {
            name: value
        }
    }
}

export function setInitUserInfo() {
    return {
        type: SET_USERINFO,
        payload: {
            name: ''
        }
    }
}
const INIT_USERINFO = {
    name: ''
}

export default function infoDuck(state = INIT_USERINFO, action) {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case SET_USERINFO:
            newState.name = action.payload.name
            return newState
            case SET_USERINFO:
            newState.name = ''
            return newState
        default:
            return state;
    }

}