import { combineReducers } from "redux";

//API 

// DUCK 
import tokenDuck from './common/redux/duck/tokenDuck';
import infoDuck from './frontend/redux/infoDuck'
import restaurantIdDuck from "./common/redux/duck/restaurantIdDuck";
const rootReducer = combineReducers({
    tokenDuck,
    restaurantIdDuck,
    infoDuck
})
export default rootReducer