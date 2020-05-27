import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateAttitude } from '../redux'

class AttitudeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.info.id,
      lim_roll_cd: this.props.info.lim_roll_cd,
      lim_pitch_max: this.props.info.lim_pitch_max,
      lim_pitch_min: this.props.info.lim_pitch_min
    }
  }

  handleRollChange = (event) => {
    this.setState({
      lim_roll_cd: event.target.value
    })
  }

  increaseMaxPitch = (event) => {
    console.log("we're trying to add max pitch here!");
    this.setState({
      lim_pitch_max: this.state.lim_pitch_max + 1
    })
  }

  handleSubmit = (event) => {
    this.props.updateAttitude(this.state)
    console.log(this.state);
    event.preventDefault()
  }

  render() {
    console.log('here are my props');
    console.log(this.props);
    return (
      <div>
        <div>Attitude Component Form</div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>lim_roll_cd (max angle of roll): </label>
            <input
              type="text"
              value={this.state.lim_roll_cd}
              onChange={this.handleRollChange}
            />
          </div>
          <div>
            <h2>Maximum Pitch: {this.state.lim_pitch_max}°</h2>
            <button type="button" onClick={this.increaseMaxPitch}>add pitch</button>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    props: state.attitude.singleAttitude
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
