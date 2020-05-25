const reducer = (state = { singleAttitude: {}, loading: false }, action) => {
  switch (action.type) {

    // load a single attitude from the Rails API
    case 'START_ADDING_ATTITUDE_REQUEST':
      return {
        ...state,
        attitude: state.attitude,
        loading: true
      }

    // import a single attitude from the Rails API
    case 'ADD_ATTITUDE':
      return {
        ...state,
        singleAttitude: action.singleAttitude,
        loading: false
      }

    default:
      return state;
  }
}

export default reducer
