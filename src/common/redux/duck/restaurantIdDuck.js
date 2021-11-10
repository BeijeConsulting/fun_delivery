// Action
const SET_ID = 'web/restaurant_id/SET_ID'
const INIT_ID = 'web/restaurant_id/INIT_ID'

// Creator Action setColor
export function setRestaurantId(value) {
    return {
        type: SET_ID,
        payload: {
            restaurant_id: value
        }
    }
}
// Creator Action initColor
export function initRestaurantId() {
    return {
        type: INIT_ID,
        payload: {
            restaurant_id: null
        }
    }
}

const INIT_STATE = {
    restaurant_id: null
}

// Reducer (Quello che gestirà l'azione)
export default function restaurantIdDuck(state = INIT_STATE, action) {
    switch (action.type) {
        case SET_ID:
            var newState = Object.assign({}, state);
            newState.restaurant_id = action.payload.restaurant_id;
            return newState;
        case INIT_ID:
            var newState = Object.assign({}, state);
            newState.restaurant_id = null;
            return newState;
        default:
            return state
    }
}