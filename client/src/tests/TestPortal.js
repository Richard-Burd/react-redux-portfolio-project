// This test portal is used for testing functionality & troubleshooting problems.
// It uses the "Astronauts" object to fetch, store, act, then reduce with Redux functionality
// To run these tests, un-comment the <TestPortal /> in App.js
import React, { Component } from 'react';
import TestLibraries from './TestLibraries';
import TestReduxWorkflow from './TestReduxWorkflow';
import { TestRouter } from './TestRouter';
import TestFetches from './TestFetches'

export default class TestPortal extends Component {
  render() {
    return (
      <div style={{color: '#0E8198', backgroundColor: '#CEF7FF'}}>
        <span><h1>Welcome to the React-Redux-Burd Test Suite</h1></span>
        <TestLibraries />
        <TestReduxWorkflow />
        <TestRouter />
        <TestFetches />
      </div>
    )
  }
}
