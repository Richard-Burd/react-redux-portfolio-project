// This component displays an airframe's name and options the user can take on it.
// This is where a user would delete an airframe.
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchAirframe, deleteAirframe } from '../redux'
import AirframeData from './AirframeData'
import { Link } from 'react-router-dom';
import ButtonComponent from './ButtonComponent'

function Airframe (props) {

  const [number] = useState(props.match.params.airframeId);

  const handleBasicInfoClick = () => {
    props.fetchAirframe(number)
  }

  const deleteClick = () => {
    props.deleteAirframe(number)
  }

  const showAirframe = () => {
    return props.airframeData.loading ? (
      <h2>Loading</h2>
    ) : props.airframeData.error ? (
      <h2>{props.airframeData.error}</h2>
    ) : (
      <AirframeData info={props.airframeData.singleAirframe}/>
    )
  }

  return (
    <div className="airframe-parameter-options">
      <div className="airframe-name-w-options">{props.location.state.name}</div>
      <div>
        {props.airframeData.singleAirframe.id !== parseInt(number)
        ?
        <div>
          <ButtonComponent
            displayName={"View or edit basic airframe information"}
            onClick={handleBasicInfoClick}
          />
        </div> : null }
      </div>

      {/* If the airframe in store is the correct one, show it, and if not, don't */}
      <div>
        {props.airframeData.singleAirframe.id === parseInt(number)
        ?
        showAirframe() : null }
      </div>
      <Link key={window.location.pathname} to={{
        pathname: `${window.location.pathname}/params`,
        state: {
          name: props.location.state.name // an attempt to transfer the Airframe's name
        }
      }}>
        <ButtonComponent
          displayName={"Edit this airframe's parameters"}
        />
      </Link>
      <ButtonComponent
        displayName={"Delete this airframe"}
        onClick={deleteClick}
      />
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
    fetchAirframe: (number) => dispatch(fetchAirframe(number)),
    deleteAirframe: (number) => dispatch(deleteAirframe(number))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Airframe)
