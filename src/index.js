import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

const store = createStore(tasksReducer);

function TodoApp({ store }) {
  const { task, tasks } = store.getState();
  return (
    <div>
      <input type="text" onChange={(e) => store.dispatch(inputTask(e.target.value))} />
      <input type="button" value="add" onClick={() => store.dispatch(addTask(task))} />
      <ul>
        {
          tasks.map(function (item, i) {
            return (
              <li key={i}>
                {item}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

function renderApp(store) {
  render(
    <TodoApp store={store} />,
    document.getElementById('root')
  );
}

store.subscribe(() => renderApp(store));
renderApp(store);