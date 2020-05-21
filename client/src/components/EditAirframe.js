import React, { useState } from 'react'
import { connect } from 'react-redux'
import BasicForm from './BasicForm'
import { updateAirframe } from '../redux'

function EditAirframe (props) {

  const [number] = useState(props.match.params.airframeId);

  return (
    <div>
      <h2>This is where you will edit the {props.location.state.name}</h2>
      <h3>This airframe's ID Number is: {number}</h3>
      <BasicForm />
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
    updateAirframe: (number) => dispatch(updateAirframe(number)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAirframe)
