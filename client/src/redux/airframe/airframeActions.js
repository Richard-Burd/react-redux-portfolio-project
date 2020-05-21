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
    dispatch({ type: 'START_ADDING_AIRFRAME_REQUEST'})
    fetch(`http://localhost:3001/airframes/${airframeId}`).then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_AIRFRAME', singleAirframe: responseJSON })
    })
  };
}

export function deleteAirframe(airframeId) {
  return (dispatch) => {
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
  };
}

export function updateAirframe(airframeId) {
  console.log('entered updateAirframe action');
  return (dispatch) => {
    dispatch({ type: 'EDIT_AIRFRAME'})
    fetch(`http://localhost:3001/airframes/${airframeId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json"
      }
    })
    .then(response => {
      document.location.href = `http://localhost:3000/airframes`
    })
  };
}
