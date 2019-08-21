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

//tasksReducerを定義
const store = createStore(tasksReducer);

function handleChange() {
  console.log(store.getState());
  //{
  // tasks["Storeを学ぶ"]
  //}
}

const unsubscribe = store.subscribe(handleChange)
//unsbscribe()を実行すると解除される

const addTask = (task) => ({
  type: "ADD_TASK",
  payload: {
    task
  }
});

store.dispatch(addTask("Storeを学ぶ"));

const inputTask = (task) => ({
  type: "INPUT_TASK",
  payload: {
    task
  }
});

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