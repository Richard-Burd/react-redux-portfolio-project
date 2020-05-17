// This test portal is used for testing functionality & troubleshooting problems.
// It uses the "Astronauts" object to fetch, store, act, then reduce with Redux functionality 
import React, { Component } from 'react'
import TestLibraries from './TestLibraries'
import TestReduxWorkflow from './TestReduxWorkflow'
import TestFetches from './TestFetches'

export default class TestPortal extends Component {
  render() {
    return (
      <div>
        <TestLibraries />
        <TestReduxWorkflow />
        <TestFetches />
      </div>
    )
  }
}
