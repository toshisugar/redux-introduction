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
const sleep1000ms = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })
};

//addTodo func
export function addTodo(title) {
    return {
        type: types.ADD_TODO,
        payload: {
            id: shortid.generate(),
            title,
        },
    };
}

//PromiseでaddTodo func を呼び出す
export function asyncAddTodo(title) {
    return (dispatch) => {
        sleep1000ms().then(() => {
            dispatch(addTodo(titke));
        });
    };
}
*/

/*Async/Await：注意点 => asyncオペレーターの位置をエクスポートする関数ではなく、リターンする関数につける
//sleep1000ms func
const sleep1000ms = () => {
     ...
};

export function addTodo(title) {
    ...
}
//Async/Awaitでsleepfunc を呼び出す
export function asyncAddTodo(title) {
    return async (dispatch) => {
        await sleep1000ms();
        dispatch(addTodo(title));
    };
}
*/

/*複数のアクションのまとめ方
function addTodo(title) {
    return {
        type: types.ADD_TODO,
        payload: {
            id: shortid.generate(),
            title,
        },
    };
}
function updateInput(value) {
    return {
        type: types.UPDATE_INPUT,
        payload: {
            value,
        },
    };
}
//このようにまとめる
export function addTodoAndClear(title) {
    return (dispatch) => {
        dispatch(addTodo(title));
        dispatch(updateInput(''));
    };
}
*/