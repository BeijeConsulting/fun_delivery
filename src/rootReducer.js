import { combineReducers } from "redux";

//API 

// DUCK 
import tokenDuck from './common/redux/duck/tokenDuck';
import infoDuck from './frontend/redux/infoDuck';
import userIdDuck from './frontend/redux/infoDuck'
import restaurantIdDuck from "./common/redux/duck/restaurantIdDuck";
import refreshTokenDuck from "./common/redux/duck/refreshTokenDuck";
const rootReducer = combineReducers({
    tokenDuck,
    restaurantIdDuck,
    refreshTokenDuck,
    infoDuck,
    userIdDuck
})
export default rootReducer