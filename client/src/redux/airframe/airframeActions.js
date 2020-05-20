export const fetchAirframes = () => {
  return (dispatch) => { // fetch requests return a function that can have side effects
    dispatch({ type: 'START_ADDING_AIRFRAMES_REQUEST'}) // this will set loading to true
    fetch('http://localhost:3001/airframes').then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_AIRFRAMES', airframes: responseJSON })
    })
  };
}

export function fetchAirframe(airframeId) {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_AIRFRAME_REQUEST'}) // so far, the code crashes below and cannot read: airframeId
    fetch(`http://localhost:3001/airframes/${airframeId}`).then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_AIRFRAME', singleAirframe: responseJSON })
    })
  };
}

export function deleteAirframe(airframeId) {
  return (dispatch) => {
    dispatch({ type: 'START_DELETING_AIRFRAME'}) // so far, the code crashes below and cannot read: airframeId
    fetch(`http://localhost:3001/airframes/${airframeId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json"
      }
    })
    .then(response => {
      document.location.href = "http://localhost:3000/airframes"
    })
    // .then(responseJSON => {
    //   dispatch({ type: 'DELETE_AIRFRAME', singleAirframe: responseJSON })
    // })
  };
}
// document.location.href = "http://mobile.mysite.com"
