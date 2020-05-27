import React, { Component } from 'react'
import AttitudeForm from './AttitudeForm'
import { connect } from 'react-redux'
import { fetchAttitude } from '../redux'

class ParametersContainer extends Component {

  handleClick = (index, button) => {
    if (button === 1) {
      this.props.fetchAttitude(index)
    } else {
      console.log("That button isn't setup yet")
    }
  }

  showAttitude = () => {
    return this.props.attitudeData.loading ? (
      <h2>Loading</h2>
    ) : this.props.attitudeData.error ? (
      <h2>{this.props.attitudeData.error}</h2>
    ) : (
      // NOTE: this will change for the other param files so that in the ParameterForm.js,
      // it will be possible to iterate over "props.info" and display a <input>
      // field and a <label> for each element within.
      <AttitudeForm info={this.props.attitudeData.singleAttitude} type={'Attitude'} />
    )
  }


  render() {
    console.log(this.props);
    const number = this.props.match.params.airframeId
    return (
      <div>
        <h2>This is the Parameters container for {this.props.location.state.name} Airframe No. #{number}</h2>


        {/* If the attitude in store is the correct one, show it, and if not, don't */}
        <div>
          {this.props.attitudeData.singleAttitude.id === parseInt(number)
          ?
          this.showAttitude()
          :
          <button onClick={() => this.handleClick(number, 1)}>Edit this airframe's attitude parameters</button> }
        </div>

        <button onClick={() => this.handleClick(number, 2)}>Edit this airframe's PID parameters</button>
        <button onClick={() => this.handleClick(number, 3)}>Edit this airframe's plugins parameters</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    attitudeData: state.attitude
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAttitude: (number) => dispatch(fetchAttitude(number))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParametersContainer)
