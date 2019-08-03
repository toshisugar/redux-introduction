import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

const initialState = {
  tasks: []
};

const addTask = (task) => ({
  type: "ADD_TASK",
  payload: {
    task
  }
});

//tasksReducerを定義
const store = createStore(tasksReducer);

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: state.tasks.concat([action.task])
      };
    default:
      return state;
  }
}