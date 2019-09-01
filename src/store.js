import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

const middlewares = [logger, thunl];

const store = createStore(
    reducers,
    applyMiddleware(...middlewares)
);

export default store;