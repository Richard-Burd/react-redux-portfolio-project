// This test portal is used for testing functionality & troubleshooting problems.
// It uses the "Astronauts" object to fetch, store, act, then reduce with Redux functionality
import React, { Component } from 'react';
import TestLibraries from './TestLibraries';
import TestReduxWorkflow from './TestReduxWorkflow';
import { TestRouter } from './TestRouter';
import TestFetches from './TestFetches'

export default class TestPortal extends Component {
  render() {
    return (
      <div>
        <TestLibraries />
        <TestReduxWorkflow />
        <TestRouter />
        <TestFetches />
      </div>
    )
  }
}
