import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchAirframe } from '../redux'

function Airframe (props) {
  //componentDidMount() {
  //  fetchAirframe(this.props.match.params.airframeId)
  //}
  let renderAirframe = false

  const handleClick = () => {
    props.fetchAirframe(number)
  }

  const showAirframe = () => {
    return (
      <div>
        <div>Name: {props.airframeData.singleAirframe.name}</div>
        <div>Weight: {props.airframeData.singleAirframe.weight} lbs</div>
        <div>Configuration: {props.airframeData.singleAirframe.config}</div>
        <img src={props.airframeData.singleAirframe.image} />
      </div>
    )
  }

  console.log(props);
  const [number] = useState(props.match.params.airframeId);
  return (
    <div>
      <div>UAV System Name: {props.location.state.name}</div>
      <button onClick={handleClick}>Get Basic Airframe Parameters</button>
      {/* If the airframe in store is the correct one, show it, and if not, don't */}
      <div>{props.airframeData.singleAirframe.id == number ? showAirframe() : null }</div>
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
    fetchAirframe: (number) => dispatch(fetchAirframe(number))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Airframe)
