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


/* 以下サンプル
import shortid from 'shortid';
import * as types from '../types/todo';

//同期アクションクリエーター
export function addTodo(title) {
    return {
        type: types.ADD_TODO,
        payload: {
            id: shortid.generate(),
            title,
        },
    };
}
//上記アクションクリエーターを非同期で動かす非同期アクションクリエーター
export function asyncAddRodo(title) {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(addTodo(title));
        }, 1000);
    };
}
*/