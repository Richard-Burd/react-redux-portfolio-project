import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/store'
import AstronautsContainer from '../components/AstronautsContainer'
import AirframesContainer from '../components/AirframesContainer'

function TestReduxWorkflow () {
  return (
    <Provider store={store}>
      <div className='App'>
        <span>Let's fetch some astronauts to test run our Redux workflow:</span>
        <AstronautsContainer />
        <AirframesContainer />
      </div>
    </Provider>
  )
}

export default TestReduxWorkflow
