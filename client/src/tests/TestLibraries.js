// This component will do stuff with each library to make sure they all work.
// This is the first test file to be created.  It will be disabled when everything
// is up and running.  To run these tests, un-comment the <TestPortal /> in App.js

// These dependencies should load if they were installed properly:
import React, { Component } from 'react';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Router, Route } from 'react-router'
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

export default class TestLibraries extends Component {

  render() {
    return (
      <div>
        <p>"TestLibraries" - all libraries load properly if no red errors occur in console</p>
        <p style={{color: '#6D691B', backgroundColor: '#FFFDD9'}}>
          A list of yellow errors should appear in the colsole that say each component
          "...is defined but never used" - This checks to make sure that all of the necessary
          libraries are loading properly into this workspace.
        </p>
      </div>
    )
  }
}
