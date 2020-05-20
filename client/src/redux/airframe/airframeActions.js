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

// was trying to minic thes:
// https://stackoverflow.com/questions/52883652/react-redux-pass-variable-to-action
// https://stackoverflow.com/questions/54633658/how-to-pass-variable-when-dispatching-fetch-function-in-react-component
// search for: "export function fetchAlbums(id)"
export function fetchAirframe(airframeId) {
  console.log(`inside the top layer of the fetchAirframes function with an airframe id of: ${airframeId}`)



  return (dispatch) => {
    console.log(`inside the returned dispatch with an airframe id of: ${airframeId}`)



    dispatch({ type: 'START_ADDING_AIRFRAME_REQUEST'}) // so far, the code crashes below and cannot read: airframeId
    fetch(`http://localhost:3001/airframes/${airframeId}`).then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_AIRFRAME', singleAirframe: responseJSON })
    })

  };

}
