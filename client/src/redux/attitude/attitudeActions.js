import { AIRFRAMES_APP_URL, ATTITUDES_API_URL } from '../urlAndUrns'

export function fetchAttitude(airframeId) {
  return (dispatch) => {
    dispatch({ type: 'START_ADDING_ATTITUDE_REQUEST'})
    fetch(`${ATTITUDES_API_URL}/${airframeId}`).then(response => {
      return response.json()
    })
    .then(responseJSON => {
      dispatch({ type: 'ADD_ATTITUDE', singleAttitude: responseJSON }) //singleAirframe is the payload
    })
  };
}

export function updateAttitude(attitude) {
  console.log('well I got inside the updateAttitude action');

  return (dispatch) => {
    fetch(`${ATTITUDES_API_URL}/${attitude.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify({
        "java_script_lim_roll_cd": attitude.lim_roll_cd,
        "java_script_lim_pitch_max": attitude.lim_pitch_max,
        "java_script_lim_pitch_min": attitude.lim_pitch_min,
      })
    })
    .then(response => {
      document.location.href = `${AIRFRAMES_APP_URL}`
    })
  };
}
