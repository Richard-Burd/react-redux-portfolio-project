const reducer = (state = { airframes: [], singleAirframe: {}, loading: false }, action) => {
  switch (action.type) {

    // load multiple airframes from the Rails API
    case 'START_ADDING_AIRFRAMES_REQUEST':
      return {
        ...state,
        loading: true
      }

    // import multiple airframes from the Rails API
    case 'ADD_AIRFRAMES':
      return {
        ...state,
        airframes: action.airframes,
        loading: false
      }

    // load a single airframe from the Rails API
    case 'START_ADDING_AIRFRAME_REQUEST':
      return {
        ...state,
        loading: true
      }

    // import a single airframe from the Rails API
    case 'ADD_AIRFRAME':
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
