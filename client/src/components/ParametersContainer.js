import React from 'react'
import AttitudeForm from './AttitudeForm'
import { connect } from 'react-redux'
import { fetchAttitude } from '../redux'
import { Link } from 'react-router-dom';

const ParametersContainer = (props) => {

  const handleClick = (index, button) => {
    if (button === 1) {
      props.fetchAttitude(index)
    } else {
      console.log("That button isn't setup yet")
      alert("Sorry, only attitude params are available in v0.1")
    }
  }

  const showAttitude = () => {
    return props.attitudeData.loading ? (
      <h2>Loading</h2>
    ) : props.attitudeData.error ? (
      <h2>{props.attitudeData.error}</h2>
    ) : (
      // NOTE: this will change for the other param files so that in the ParameterForm.js,
      // it will be possible to iterate over "props.info" and display a <input>
      // field and a <label> for each element within.
      <AttitudeForm info={props.attitudeData.singleAttitude} type={'Attitude'} />
    )
  }



    console.log(props);
    const number = props.match.params.airframeId
    return (
      <div>
        <h2>This is the Parameters container for &nbsp;

        <Link key={window.location.pathname} to={{
          pathname: `/airframes/${number}`,
          state: {
            name: props.location.state.name // an attempt to transfer the Airframe's name
          }
        }}>
          {props.location.state.name}
        </Link>

         &nbsp; Airframe No. #{number}</h2>

        {/* If the attitude in store is the correct one, show it, and if not, don't */}
        <div>
          {props.attitudeData.singleAttitude.id === parseInt(number)
          ?
          showAttitude()
          :
          <button onClick={() => handleClick(number, 1)}>Edit this airframe's attitude parameters</button> }
        </div>
        <div>
          <button onClick={() => handleClick(number, 2)}>Edit this airframe's PID parameters</button>
        </div>
        <div>
          <button onClick={() => handleClick(number, 3)}>Edit this airframe's plugins parameters</button>
        </div>
      </div>
    )

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
