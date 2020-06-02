// This container will display the correct set of parameters selected by the user.
// Right now. only the attitude parameters are available for users to view and edit.
import React from 'react'
import AttitudeForm from './AttitudeForm'
import { connect } from 'react-redux'
import { fetchAttitude } from '../redux'
import { Link } from 'react-router-dom';
import ButtonComponent from './ButtonComponent'

const ParametersContainer = (props) => {

  const handleClick = (index, button) => {
    if (button === 1) {
      props.fetchAttitude(index)
    } else {
      console.log("That button isn't setup yet")
      alert("Sorry, only attitude params are available in v.0.1")
    }
  }

  const showAttitude = () => {
    return props.attitudeData.loading ? (
      <h2>Loading</h2>
    ) : props.attitudeData.error ? (
      <h2>{props.attitudeData.error}</h2>
    ) : (
      <AttitudeForm info={props.attitudeData.singleAttitude} type={'Attitude'} />
    )
  }

  // console.log(props);
  const number = props.match.params.airframeId
  return (
    <div className="params-selections">
      <h2 className="params-title">Parameters for: &nbsp;
      <Link key={window.location.pathname} to={{
        pathname: `/airframes/${number}`,
        state: {
          name: props.location.state.name // transfer the Airframe's name in state
        }
      }}>
        {props.location.state.name}
      </Link>
      </h2>

      {/* If the attitude in store is the correct one, show it, and if not, don't */}
      <div>
        {
          props.attitudeData.singleAttitude.id === parseInt(number)
          ?
          showAttitude()
          :
          <ButtonComponent
            displayName={"Edit this airframe's attitude parameters"}
            onClick={() => handleClick(number, 1)}
          />
        }
      </div>
      <div>
        <ButtonComponent
          displayName={"Edit this airframe's PID parameters"}
          onClick={() => handleClick(number, 2)}
        />
      </div>
      <div>
        <ButtonComponent
          displayName={"Edit this airframe's plugins parameters"}
          onClick={() => handleClick(number, 3)}
        />
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
