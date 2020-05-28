// This component displays an airframe's attitude parameters so the user can
// change them in (the local) state, then push their changes to the backend
// Rails API via the './app/controllers/attitudes_controller.rb" directory
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

  increaseRoll = (event) => {
    this.setState({
      lim_roll_cd: this.state.lim_roll_cd + 1
    })
  }

  decreaseRoll = (event) => {
    this.setState({
      lim_roll_cd: this.state.lim_roll_cd - 1
    })
  }

  increaseMaxPitch = (event) => {
    this.setState({
      lim_pitch_max: this.state.lim_pitch_max + 1
    })
  }

  decreaseMaxPitch = (event) => {
    this.setState({
      lim_pitch_max: this.state.lim_pitch_max - 1
    })
  }

  increaseMinPitch = (event) => {
    this.setState({
      lim_pitch_min: this.state.lim_pitch_min - 1
    })
  }

  decreaseMinPitch = (event) => {
    this.setState({
      lim_pitch_min: this.state.lim_pitch_min + 1
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
            <h2>Maximum Roll: {this.state.lim_roll_cd}°</h2><h3>(LIM_ROLL_CD)</h3>
            <button type="button" onClick={this.increaseRoll}>increase max roll</button>
            <button type="button" onClick={this.decreaseRoll}>decrease max roll</button>
            <img
              src={'https://cdn.shopify.com/s/files/1/2604/4866/products/F14_Sill_600_1200x630.jpeg'}
              alt="plane-rolling"
              style={{
                border: 'red',
                borderRadius: '4px',
                position: 'relative',
                zIndex: '-1',
                transform: `rotate(${this.state.lim_roll_cd}deg)`,
              }}
            />
          </div>
          <div>
            <h2>Maximum Pitch: {this.state.lim_pitch_max}°</h2><h3>(LIM_PITCH_MAX)</h3>
            <button type="button" onClick={this.increaseMaxPitch}>increase max pitch</button>
            <button type="button" onClick={this.decreaseMaxPitch}>decrease max pitch</button>
          <img
            src={'https://i.pinimg.com/originals/40/71/c1/4071c1178cbe7e384f63132b08c91ff9.jpg'}
            alt="plane-pitching-up"
            style={{
              border: 'red',
              borderRadius: '4px',
              position: 'relative',
              zIndex: '-1',
              transform: `rotate(${this.state.lim_pitch_max}deg)`,
            }}
          />
          </div>
          <div>
            <h2>Minimum Pitch: {this.state.lim_pitch_min}°</h2><h3>(LIM_PITCH_MIN)</h3>
            <button type="button" onClick={this.increaseMinPitch}>increase min pitch</button>
            <button type="button" onClick={this.decreaseMinPitch}>decrease min pitch</button>
          <img
            src={'https://i.pinimg.com/originals/40/71/c1/4071c1178cbe7e384f63132b08c91ff9.jpg'}
            alt="plane-pitching-down"
            style={{
              border: 'red',
              borderRadius: '4px',
              position: 'relative',
              zIndex: '-1',
              transform: `rotate(${this.state.lim_pitch_min}deg)`,
            }}
          />
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
