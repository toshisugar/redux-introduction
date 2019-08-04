import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, replaceReducer } from 'redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const initialState = {
  tasks: []
};

function addReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    default:
      return state;
  }
}

function reserReducer(state = initialState, action) {
  switch (action.type) {
    case "RESET_TASK":
      return {
        ...state,
        tasks: []
      };
    default:
      return state;
  }
}

export default App;
