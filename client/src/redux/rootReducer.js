import { combineReducers } from 'redux'
import astronautReducer from './astronaut/astronautReducer'
import airframeReducer from './airframe/airframeReducer'
import attitudeReducer from './attitude/attitudeReducer'

const rootReducer = combineReducers({
  astronaut: astronautReducer,
  airframe: airframeReducer,
  attitude: attitudeReducer,
  // the next object and accompanying reducer go here
})

export default rootReducer
