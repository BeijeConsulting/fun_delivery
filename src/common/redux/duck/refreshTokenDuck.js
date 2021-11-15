// Action
const SET_REF_TOKEN = 'web/token/SET_REF_TOKEN'
const INIT_REF_TOKEN = 'web/token/INIT_REF_TOKEN'

// Creator Action setColor
export function setRefreshToken(value) {
    return {
        type: SET_REF_TOKEN,
        payload: {
            refreshToken: value
        }
    }
}
// Creator Action initColor
export function initRefreshToken() {
    return {
        type: INIT_REF_TOKEN,
        payload: {
            refreshToken: ''
        }
    }
}

const INIT_STATE = {
    refreshToken: ''
}

// Reducer (Quello che gestirà l'azione)
export default function refreshTokenDuck(state = INIT_STATE, action) {
    switch (action.type) {
        case SET_REF_TOKEN:
            var newState = Object.assign({}, state);
            newState.refreshToken = action.payload.refreshToken;
            return newState;
        case INIT_REF_TOKEN:
            var newState = Object.assign({}, state);
            newState.refreshToken = '';
            return newState;
        default:
            return state
    }
}