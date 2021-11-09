import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'tokenDuck',
    storage: storage,
    whitelist: ['tokenDuck'] // which reducer want to store
};

const pReducer = persistReducer(persistConfig, rootReducer);

let middlewares = [thunk];
if (process.env && process.env.NODE_ENV !== 'production') {
    middlewares = [...middlewares, logger];
}

// logger, thunk
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const ApplicationStore = createStore(
    pReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

const persistor = persistStore(ApplicationStore);


export { persistor, ApplicationStore };