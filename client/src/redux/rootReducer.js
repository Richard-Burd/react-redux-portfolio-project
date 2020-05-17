import { combineReducers } from 'redux'
import astronautReducer from './astronaut/astronautReducer'

const rootReducer = combineReducers({
  astronaut: astronautReducer,
  //cake: cakeReducer,
  //iceCream: iceCreamReducer,
  //user: userReducer
})

export default rootReducer
