import { combineReducers } from "redux";

//API 

// DUCK 
import tokenDuck from './common/redux/duck/tokenDuck';
import restaurantIdDuck from "./common/redux/duck/restaurantIdDuck";
import refreshTokenDuck from "./common/redux/duck/refreshTokenDuck";
const rootReducer = combineReducers({
    tokenDuck,
    restaurantIdDuck,
    refreshTokenDuck,
})
export default rootReducer