import React, { Component } from 'react'

export default class TestFetches extends Component {

  addAirframe = (/*name, weight, config, URL */) => {
    console.log('Here is where we will add an airframe to the database');
  }
  
  readAllAirframes = () => {
    console.log('Airframes:');
    fetch('http://localhost:3001/airframes')
      .then(response => response.json())
      .then(json => console.log(json));
  }

  updateAirframe = (/*name, weight, config, URL */) => {
    console.log('Here is where we will update an airframe to the database');
  }

  deleteAirframe = (/*name, weight, config, URL */) => {
    console.log('Here is where we will update an airframe to the database');
  }

  render() {
    return (
      <div>
        <span>Let's console log fetching functions that CRUD an airframe</span>
        {this.readAllAirframes()}
      </div>
    )
  }
}
