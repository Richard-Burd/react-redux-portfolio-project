import { combineReducers } from 'redux'
import astronautReducer from './astronaut/astronautReducer'
import airframeReducer from './airframe/airframeReducer'

const rootReducer = combineReducers({
  astronaut: astronautReducer,
  airframe: airframeReducer,
  // the next object and accompanying reducer go here
})

export default rootReducer
