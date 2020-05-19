export const fetchAirframes = () => {

  // fetch requests return a function that can have side effects
  return (dispatch) => {

    // this will set loading to true
    dispatch({ type: 'START_ADDING_AIRFRAMES_REQUEST'})
    fetch('http://localhost:3001/airframes').then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_AIRFRAMES', airframes: responseJSON })
    })


  };
}

export const fetchAirframe = (airframeId) => {

  // fetch requests return a function that can have side effects
  return (dispatch) => {

    // this will set loading to true
    dispatch({ type: 'START_ADDING_AIRFRAME_REQUEST'})
    fetch(`http://localhost:3001/airframes/${airframeId}`).then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_AIRFRAME', airframes: responseJSON })
    })


  };
}
