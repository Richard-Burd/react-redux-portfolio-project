import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchAirframe, deleteAirframe } from '../redux'
import AirframeForm from './AirframeForm'

function Airframe (props) {

  const [number] = useState(props.match.params.airframeId);

  const handleClick = () => {
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
      <div>
        <div>Name: {props.airframeData.singleAirframe.name}</div>
        <div>Weight: {props.airframeData.singleAirframe.weight} lbs</div>
        <div>Configuration: {props.airframeData.singleAirframe.config}</div>
        <img src={props.airframeData.singleAirframe.image} alt="plane" />
        <AirframeForm
          formAction={"update"}
          id={props.airframeData.singleAirframe.id}
          name={props.airframeData.singleAirframe.name}
          weight={props.airframeData.singleAirframe.weight}
          config={props.airframeData.singleAirframe.config}
          image={props.airframeData.singleAirframe.image}
        />
      </div>
    )
  }

  return (
    <div>
      <div>UAV System Name: {props.location.state.name}</div>

      <div>
        {props.airframeData.singleAirframe.id !== parseInt(number)
        ?
        <div>
          <button onClick={handleClick}>Get Basic Airframe Parameters</button>
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
