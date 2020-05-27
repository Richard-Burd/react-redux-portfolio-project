// NOTE: this is used for the testing suite to make sure all of the dependency libraries are up and working.
const reducer = (state = { astronauts: [], loading: false }, action) => {
  switch (action.type) {

    case 'START_ADDING_ASTRONAUTS_REQUEST':
      return {
        ...state,
        astronauts: [...state.astronauts],
        loading: true
      }

    case 'ADD_ASTRONAUTS':
      return {
        ...state,
        astronauts: action.astronauts,
        loading: false
      }

    default:
      return state;
  }
}

export default reducer
