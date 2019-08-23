import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import tasksReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';

const store = createStore(tasksReducer);

import logger from 'redux-logger';

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