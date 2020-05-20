const reducer = (state = { airframes: [], singleAirframe: {}, loading: false }, action) => {
  switch (action.type) {

    // multiple airframes
    case 'START_ADDING_AIRFRAMES_REQUEST':
      return {
        ...state,
        airframes: [...state.airframes],
        loading: true
      }

    // multiple airframes
    case 'ADD_AIRFRAMES':
      return {
        ...state,
        airframes: action.airframes,
        loading: false
      }

    // single airframe
    case 'START_ADDING_AIRFRAME_REQUEST':
      return {
        ...state,
        airframe: state.airframe,
        loading: true
      }

    // single airframe
    case 'ADD_AIRFRAME':
      return {
        ...state,
        singleAirframe: action.singleAirframe,
        loading: false
      }

    case 'START_DELETING_AIRFRAME':
      return {
        ...state,
        airframe: state.airframe,
        loading: true
      }

    case 'DELETE_AIRFRAME':
      return {
        ...state,
        singleAirframe: action.singleAirframe,
        loading: false
      }

    default:
      return state;
  }
}

export default reducer
