const BASE_API_URL = "http://localhost:3001"
const AIRFRAMES_API_URL = `${BASE_API_URL}/airframes`
const BASE_APP_URL = "http://localhost:3000"
const AIRFRAMES_APP_URL = `${BASE_APP_URL}/airframes`

export const fetchAirframes = () => {
  return (dispatch) => { // fetch requests return a function that can have side effects
    dispatch({ type: 'START_ADDING_AIRFRAMES_REQUEST'}) // this will set loading to true
    fetch(AIRFRAMES_API_URL).then(response => {
      return response.json()
    })
    .then(responseJSON => {
      dispatch({ type: 'ADD_AIRFRAMES', airframes: responseJSON }) //airframes are the payload
    })
  };
}

export function fetchAirframe(airframeId) {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_AIRFRAME_REQUEST'})
    fetch(`${AIRFRAMES_API_URL}/${airframeId}`).then(response => {
      return response.json()
    })
    .then(responseJSON => {
      dispatch({ type: 'ADD_AIRFRAME', singleAirframe: responseJSON }) //singleAirframe is the payload
    })
  };
}

export function deleteAirframe(airframeId) {
  return (dispatch) => {
    fetch(`${AIRFRAMES_API_URL}/${airframeId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json"
      }
    })
    .then(response => {
      document.location.href = AIRFRAMES_APP_URL
    })
  };
}

export function updateAirframe(airframe) {
  return (dispatch) => {
    fetch(`${AIRFRAMES_API_URL}/${airframe.formId}`, {
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
    .then(response => {
      document.location.href = AIRFRAMES_APP_URL
    })
  };
}

export function createAirframe(airframe) {
  console.log('createAirframe entered');
  console.log(airframe);
  return (dispatch) => {
    fetch(AIRFRAMES_API_URL, {
      method: 'POST',
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
    .then(response => {
      document.location.href = AIRFRAMES_APP_URL
    })
  };
}
