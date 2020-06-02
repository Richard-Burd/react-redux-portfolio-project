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
import ButtonComponent from './ButtonComponent'

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
        <div className="attitude-title">Attitude Component Form</div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h2 className="attitude-name">Maximum Roll: {this.state.lim_roll_cd}°</h2><h3 className="attitude-param">(LIM_ROLL_CD)</h3>
            <ButtonComponent
              displayName={"increase max roll"}
              onClick={this.increaseRoll}
            />
            <ButtonComponent
              displayName={"decrease max rol"}
              onClick={this.decreaseRoll}
            />
            <GraphicComponent
              foregroundSourceImage={planeFrontView}
              foregroundRotation={this.state.lim_roll_cd}
              backgroundSourceImage={pitchCircleWide}
              backgroundRotation={39}
            />
          </div>
          <div>
            <h2 className="attitude-name">Maximum Pitch: {this.state.lim_pitch_max}°</h2><h3 className="attitude-param">(LIM_PITCH_MAX)</h3>
            <ButtonComponent
              displayName={"increase max pitch"}
              onClick={this.increaseMaxPitch}
            />
            <ButtonComponent
              displayName={"decrease max pitch"}
              onClick={this.decreaseMaxPitch}
            />
            <GraphicComponent
              foregroundSourceImage={planeSideView}
              foregroundRotation={this.state.lim_pitch_max}
              backgroundSourceImage={pitchCircleNarrow}
              backgroundRotation={32}
            />
          </div>
          <div>
            <h2 className="attitude-name">Minimum Pitch: {this.state.lim_pitch_min}°</h2><h3 className="attitude-param">(LIM_PITCH_MIN)</h3>
            <ButtonComponent
              displayName={"increase min pitch"}
              onClick={this.increaseMinPitch}
            />
            <ButtonComponent
              displayName={"decrease min pitch"}
              onClick={this.decreaseMinPitch}
            />
          <GraphicComponent
            foregroundSourceImage={planeSideView}
            foregroundRotation={this.state.lim_pitch_min}
            backgroundSourceImage={pitchCircleNarrow}
            backgroundRotation={-25}
          />
          </div>
          <ButtonComponent
            displayName={"Update These Attitude Settings"}
            type={"submit"}
          />
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
