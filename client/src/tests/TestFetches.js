import React, { Component } from 'react'

const BASE_URL = "http://localhost:3001"
const AIRFRAMES_URL = `${BASE_URL}/airframes`

export default class TestFetches extends Component {

  createAirframe = (airframeData) => {
    fetch(AIRFRAMES_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify({
        // the "value"s aren't included here because there isn't a <form> yet.
        "java_script_name": airframeData.name,//.value,
        "java_script_weight": airframeData.weight,//.value,
        "java_script_config": airframeData.config,//.value,
        "java_script_image": airframeData.image//.value
      })
    })
    .then(function(json) {
      document.location.reload(true);
    });
  }

  // This talks to the index controller action in airframes_controller.rb
  getAllAirframes = () => {
    console.log('Airframes:');
    fetch(AIRFRAMES_URL)
      .then(response => response.json())
      .then(json => console.log(json));
  }

  // This talks to the show controller action in airframes_controller.rb
  getOneAirframe = (airframeId) => {
    console.log('Single Airframe');
    fetch(`${AIRFRAMES_URL}/${airframeId}`)
      .then(response => response.json())
      .then(json => console.log(json));
  }

  // This talks to the update controller action in airframes_controller.rb
  updateAirframe = (airframeId, airframeData) => {
    return fetch(`${AIRFRAMES_URL}/${airframeId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify({
        // the "value"s aren't included here because there isn't a <form> yet.
        "java_script_name": airframeData.name,//.value,
        "java_script_weight": airframeData.weight,//.value,
        "java_script_config": airframeData.config,//.value,
        "java_script_image": airframeData.image//.value
      })
    });
  }


  // This talks to the destroy controller action in airframes_controller.rb
  deleteAirframe = (airframeId) => {
    return fetch(`${AIRFRAMES_URL}/${airframeId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
    })
  }

  render() {
    return (
      <div>
        <span>Copy the fetching functions in here and their commensurate calls below to test them out</span>
        {this.getAllAirframes()}
        {this.getOneAirframe(1)}
        {/* this.deleteAirframe(2) */}
        {/* createAirframe({name: "A", weight: 2, config: 1, image: "url.com"}) */}
        {/* updateAirframe(1, {name: "Updated Airframe Name", weight: 1000, config: 1, image: "update.url.com"}) */}
        {/* deleteAirframe(2) */}
      </div>
    )
  }
}
