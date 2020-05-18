const reducer = (state = { airframes: [], loading: false }, action) => {
  switch (action.type) {

    case 'START_ADDING_AIRFRAMES_REQUEST':
      return {
        ...state,
        airframes: [...state.airframes],
        loading: true
      }

    case 'ADD_AIRFRAMES':
      return {
        ...state,
        airframes: action.airframes,
        loading: false
      }

    default:
      return state;
  }
}

export default reducer
