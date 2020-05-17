// This component will do stuff with each library to make sure they all work.
// This is the first test file to be created.
// It will be commented out when everything is up and running.

// These dependencies should load if they were installed properly:
import React, { Component } from 'react';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { Link }from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialTestState = {
  testState: 10
}

function testOneReducer(state = initialTestState, action){}

function testTwoReducer(state = initialTestState, action){}

// this is modeled after rootReducer:
// https://github.com/Richard-Burd/react-redux-sandbox/blob/master/React-Redux-Tutorials/react-redux-demo/src/redux/rootReducer.js
const testRootReducer = combineReducers({
  testOne: testOneReducer,
  testTwo: testTwoReducer,
})

// this is modeled after store:
// https://github.com/Richard-Burd/react-redux-sandbox/blob/master/React-Redux-Tutorials/react-redux-demo/src/redux/store.js
const testStore = createStore(
  testRootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default class TestLibraries extends Component {

  render() {
    return (
      <div>
        <p>"TestLibraries" - all libraries load properly if no errors occur in console</p>
        <Provider store={testStore}>

        </Provider>
      </div>
    )
  }
}
