// This component will do stuff with each library to make sure they all work.
// This is the first test file to be created.
// It will be commented out when everything is up and running.

// These dependencies should load if they were installed properly:
import React, { Component } from 'react';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import { Router, Route } from 'react-router'
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

export default class TestLibraries extends Component {

  render() {
    return (
      <div>
        <p>"TestLibraries" - all libraries load properly if no red errors occur in console</p>
        <p>A list of yellow errors should occur that say each component "...is defined but never used" </p>
      </div>
    )
  }
}
