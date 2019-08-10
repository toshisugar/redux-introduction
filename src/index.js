import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import tasksReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';

const logger = store => next => action => {
  //action適応後のstateを表示
  console.log(store.getState());

  //どのようなActionが適応されたのかを表示
  console.log(action);

  const result = next(action);

  //Action適用後のstateを表示
  console.log(store.getState());
  console.log("--------------");

  //特別な値をreturnする必要はないのでresultをそのまま返す
  return result;
}

const storageMiddleware = store => next => action => {
  const result = next(action);
  window.localStorage.setItem('app-state',
    JSON.stringify(store.getState()));
  return result;
};

const savedState = JSON.parse(localStorage.getItem('app-state'));

//設定を元にloggerミドルウェアを作成
const store = createStore(
  tasksReducer,
  /*
  applyMiddlewareなどは、enhancerと呼ばれるReduxを拡張するための関数。
  Reduxが公式で提供しているのはこれだけだが、サードパーティー製のものもある。
  サードパーティー製のenhancerを利用する場合、引数には1つしか関数を入れることができないため
  複数のenhancerを合成する必要がある。
  合成に必要なcompose関数はReduxが提供している。
  */
  //参考演算子：saveStateの中身がtrueだったらsaveStateを返す、falseだったら、：以降を返す
  savedState ? savedState : tasksReducer(undefined, { type: 'INT' }),
  applyMiddleware(logger, storageMiddleware)
);

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);

function renderApp(store) {
  render(
    <TodoApp store={store} />,
    document.getElementById('root')
  );
}

store.subscribe(() => renderApp(store));
renderApp(store);