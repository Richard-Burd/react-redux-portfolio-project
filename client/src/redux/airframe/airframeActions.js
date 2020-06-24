import { AIRFRAMES_API_URL, AIRFRAMES_APP_URL } from '../urlAndUrns'

// this function returns a function, therefore it is said to be "thunking"
// we need the redux-thunk library installed and imported into the store.js
// in order to execute asynchronous actions like this one.
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

// a synchronous action creator would return an object (not a function as above) and would
// look something like this:
export const syncActionCreator = (optionalParams) => ({
  type: 'NAME_OF_THE_ACTION_GOES_HERE_IN_CAPS',
  payload: optionalParams
})

export function fetchAirframe(airframeId) {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_AIRFRAME_REQUEST'})
    fetch(`${AIRFRAMES_API_URL}/${airframeId}`).then(response => {
      if (!response.ok) { throw new Error("An error has occured")} // <= should take info from back-end
      return response.json()
    })
    .then(responseJSON => {
      dispatch({ type: 'ADD_AIRFRAME', singleAirframe: responseJSON }) //singleAirframe is the payload
    }).catch(err => console.log(err.message)) //<= This will only work w/ a 500 error from back-end
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
    fetch(`${AIRFRAMES_API_URL}/${airframe.formId}`, { // "formId" is so-named for tracing
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify({
        "java_script_name": airframe.formName, // "formName" is so-named for tracing
        "java_script_weight": airframe.weight,
        "java_script_config": airframe.config,
        "java_script_image": airframe.image
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
        "java_script_weight": airframe.weight,
        "java_script_config": airframe.config,
        "java_script_image": airframe.image
      })
    })
    .then(response => {
      document.location.href = AIRFRAMES_APP_URL
    })
  };
}
