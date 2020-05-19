/*
import React, { Component } from 'react'
import store from '../redux/store'

class Airframe extends Component {

  render() {
    console.log(store.getState().airframe.airframes[parseInt(this.props.match.params.airframeId) - 1]);
    return (
      <div>This is Component # {parseInt(this.props.match.params.airframeId)}
      </div>

    )
  }
}
*/

/*
import React, { Component } from 'react'
import store from '../redux/store'

class Airframe extends Component {

  render() {
    console.log(store.getState().airframe.airframes);
    return (
      <div>This is Component # {this.props.match.params.airframeId}</div>
    )
  }
}

export default Airframe
*/

import React from 'react'
import store from '../redux/store'

//console.log(store.getState().airframe.airframes);
//const airframes = store.getState().airframe.airframes;
//console.log(airframes.find(o => o.id === parseInt(props.match.params.airframeId)))
//console.log(typeof airframe)

const Airframe = (props) => {
  let airframes = store.getState().airframe.airframes;
  let index = parseInt(props.match.params.airframeId)

  const displayAirframe = airframes.map(airframe => {
    return airframe.id === index ? (
      <div className="airframe" key={airframe.id}>
        <div>Name: {airframe.name}</div>
      </div>
    ) : null;
  })
}

export default Airframe;
