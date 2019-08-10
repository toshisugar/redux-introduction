/* アクションクリエーターと、それを非同期で動かすための、関数をリターンする非同期アクションクリエーター
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

/*Promiseの例
*/
const sleep1000ms = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })
};

//通常
export function addTodo(title) {
    return {
        type: types.ADD_TODO,
        payload: {
            id: shortid.generate(),
            title,
        },
    };
}

//Promise版
export function asyncAddTodo(title) {
    return (dispatch) => {
        sleep1000ms().then(() => {
            dispatch(addTodo(titke));
        });
    };
}