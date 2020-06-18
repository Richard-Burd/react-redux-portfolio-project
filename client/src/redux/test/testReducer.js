// NOTE: this is used for the testing suite to make sure the Redux libraries & browser plugin are working
const reducer = (state = { astronauts: [], loading: false }, action) => {
  switch (action.type) {

    case 'START_ADDING_ASTRONAUTS_REQUEST':
      return {
        ...state,
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
