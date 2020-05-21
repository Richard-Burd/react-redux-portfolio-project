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


export function updateAirframe(airframe) {
  console.log(`entered updateAirframe action with airframe ID: ${airframe.formId}`);
  console.log(airframe)
  return (dispatch) => {
    // dispatch({ type: 'EDIT_AIRFRAME', payload: airframe })
    fetch(`http://localhost:3001/airframes/${airframe.formId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify({
        "java_script_name": airframe.formName,
        "java_script_weight": airframe.formWeight,
        "java_script_config": airframe.formConfig,
        "java_script_image": airframe.formImageURL
      })
    })
    //.then(response => {
    //  document.location.href = `http://localhost:3000/airframes`
    //})
  };
}
/*
export function updateAirframe(airframeId) {
  console.log(`entered updateAirframe action with airframe ID: ${airframeId}`);
  return (dispatch) => {
    dispatch({ type: 'EDIT_AIRFRAME' })
    fetch(`http://localhost:3001/airframes/${airframeId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json"
      }
    })
    //.then(response => {
    //  document.location.href = `http://localhost:3000/airframes`
    //})
  };
}
*/
