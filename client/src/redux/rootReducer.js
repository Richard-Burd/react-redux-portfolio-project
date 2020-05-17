import { combineReducers } from 'redux'
import astronautReducer from './astronaut/astronautReducer'

const rootReducer = combineReducers({
  astronaut: astronautReducer,
  // the next object and accompanying reducer go here
})

export default rootReducer
