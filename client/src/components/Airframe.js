
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchAirframe } from '../redux'

function Airframe (props) {
  //componentDidMount() {
  //  fetchAirframe(this.props.match.params.airframeId)
  //}
  const [number] = useState(props.match.params.airframeId);
  return (
    <div>
      Single Airframe No.{props.match.params.airframeId}
      <button onClick={() => props.fetchAirframe(number)}>Select Airframe</button>
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
