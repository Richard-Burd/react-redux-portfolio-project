import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateAttitude } from '../redux'

class AttitudeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lim_roll_cd: this.props.info.lim_roll_cd,
      lim_pitch_max: this.props.info.lim_pitch_max,
      lim_pitch_min: this.props.info.lim_pitch_min
    }
  }

  handleAnyEventChange = (event) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value
    });
  }

  handleSubmit = (event) => {
    this.props.updateAttitude(this.state)
    event.preventDefault()
  }

  render() {
    console.log('here are my props');
    console.log(this.props);
    return (
      <div>
        <div>Attitude Component Form</div>
        <div>{this.state.lim_roll_cd}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    props: state.attitude
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateAttitude: (props) => dispatch(updateAttitude(props))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttitudeForm)
