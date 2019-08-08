import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { render } from 'react-dom';
import tasksReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';

//高頻度で発生するActionをログに落とさないように例外として指定 => これ、getState必要か
const loggerSetting = {
  predicate: (getState, action) => action.type !== "HIGH_FREQUENCY_ACTION"
};

const logger = createLogger(loggerSetting);

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
  applyMiddleware(logger)
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