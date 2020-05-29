// This component displays an airframe's attitude parameters so the user can
// change them in (the local) state, then push their changes to the backend
// Rails API via the './app/controllers/attitudes_controller.rb" directory
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateAttitude } from '../redux'
import GraphicComponent from './GraphicComponent'
import pitchCircleWide from '../graphics/pitchCircleWide.svg'
import pitchCircleNarrow from '../graphics/pitchCircleNarrow.svg'
import planeFrontView from '../graphics/planeFrontView.svg'
import planeSideView from '../graphics/planeSideView.svg'

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
            <GraphicComponent
              foregroundSourceImage={planeFrontView}
              foregroundRotation={this.state.lim_roll_cd}
              backgroundSourceImage={pitchCircleWide}
              backgroundRotation={39}
            />
          </div>
          <div>
            <h2>Maximum Pitch: {this.state.lim_pitch_max}°</h2><h3>(LIM_PITCH_MAX)</h3>
            <button type="button" onClick={this.increaseMaxPitch}>increase max pitch</button>
            <button type="button" onClick={this.decreaseMaxPitch}>decrease max pitch</button>
          <GraphicComponent
            foregroundSourceImage={planeSideView}
            foregroundRotation={this.state.lim_pitch_max}
            backgroundSourceImage={pitchCircleNarrow}
            backgroundRotation={32}
          />
          </div>
          <div>
            <h2>Minimum Pitch: {this.state.lim_pitch_min}°</h2><h3>(LIM_PITCH_MIN)</h3>
            <button type="button" onClick={this.increaseMinPitch}>increase min pitch</button>
            <button type="button" onClick={this.decreaseMinPitch}>decrease min pitch</button>
          <GraphicComponent
            foregroundSourceImage={planeSideView}
            foregroundRotation={this.state.lim_pitch_min}
            backgroundSourceImage={pitchCircleNarrow}
            backgroundRotation={-25}
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
