import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchAirframe, deleteAirframe } from '../redux'
import AirframeData from './AirframeData'

function Airframe (props) {

  const [number] = useState(props.match.params.airframeId);

  const handleBasicInfoClick = () => {
    props.fetchAirframe(number)
  }

  const deleteClick = () => {
    props.deleteAirframe(number)
  }

  const showAirframe = () => {
    return props.airframeData.loading ? (
      <h2>Loading</h2>
    ) : props.airframeData.error ? (
      <h2>{props.airframeData.error}</h2>
    ) : (
      <AirframeData info={props.airframeData.singleAirframe}/>
    )
  }

  return (
    <div>
      <div>UAV System Name: {props.location.state.name}</div>

      <div>
        {props.airframeData.singleAirframe.id !== parseInt(number)
        ?
        <div>
          <button onClick={handleBasicInfoClick}>Get Basic Airframe Information</button>

          <button>Edit this airframe's attitude params</button>
          <button>Edit this airframe's PID params</button>
          <button>Edit this airframe's plugins params</button>
        </div> : null }
      </div>

      {/* If the airframe in store is the correct one, show it, and if not, don't */}
      <div>
        {props.airframeData.singleAirframe.id === parseInt(number)
        ?
        showAirframe() : null }
      </div>

      <button onClick={deleteClick}>Delete this airframe</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    airframeData: state.airframe
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAirframe: (number) => dispatch(fetchAirframe(number)),
    deleteAirframe: (number) => dispatch(deleteAirframe(number))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Airframe)
