import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import TestComponent from '../components/TestComponent'

function TestReduxWorkflow () {
  return (
    <Provider store={store}>
      <div className='App'>
        <span>
          <h3>
            Let's fetch some publicaly available JSON from this URI:
              <div>
                <a href="http://api.open-notify.org/astros.json">http://api.open-notify.org/astros.json</a>
              </div>
            ...to test run our Redux workflow.  &nbsp; Below there should be a list of astronauts currently in space:
          </h3>
        </span>
        <TestComponent />
      </div>
    </Provider>
  )
}

export default TestReduxWorkflow
