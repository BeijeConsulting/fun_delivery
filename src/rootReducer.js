import { combineReducers } from "redux";

//API 

// DUCK 
import tokenDuck from './common/redux/duck/tokenDuck';
import restaurantIdDuck from "./common/redux/duck/restaurantIdDuck";
const rootReducer = combineReducers({
    tokenDuck,
    restaurantIdDuck,
})
export default rootReducer