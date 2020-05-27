import { combineReducers } from 'redux'
// import testReducer from './test/testReducer'
import airframeReducer from './airframe/airframeReducer'
import attitudeReducer from './attitude/attitudeReducer'

const rootReducer = combineReducers({
  // This is part of the testing suite, un-comment it (and the import above) to run tests.
  // astronaut: testReducer,
  airframe: airframeReducer,
  attitude: attitudeReducer,
  // the next object and accompanying reducer go here
})

export default rootReducer
