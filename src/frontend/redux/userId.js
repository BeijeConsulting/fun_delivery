// Action
const SET_USERID = 'web/userID/SET_USERID'
const INIT_USERID = 'web/userID/INIT_USERID'

// Creator Action setColor
export function setUserID(value) {
    return {
        type: SET_USERID,
        payload: {
            userID: value
        }
    }
}
// Creator Action
export function initUserID() {
    return {
        type: INIT_USERID,
        payload: {
            userID: ''
        }
    }
}

const INIT_STATE = {
    userID: ''
}

// Reducer (Quello che gestirà l'azione)
export default function userIdDuck(state = INIT_STATE, action) {
    switch (action.type) {
        case SET_USERID:
            var newState = Object.assign({}, state);
            newState.userID = action.payload.userID;
            return newState;
        case INIT_USERID:
            var newState = Object.assign({}, state);
            newState.userID = '';
            return newState;
        default:
            return state
    }
}