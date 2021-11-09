import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

let middlewares = [thunk];
if (process.env && process.env.NODE_ENV !== 'production') {
    middlewares = [...middlewares, logger];
}

// logger, thunk
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const ApplicationStore = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

export default ApplicationStore;