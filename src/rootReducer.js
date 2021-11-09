import { combineReducers } from "redux";

//API 

// DUCK 
import tokenDuck from './common/redux/duck/tokenDuck';

const rootReducer = combineReducers({
    tokenDuck,

})
export default rootReducer