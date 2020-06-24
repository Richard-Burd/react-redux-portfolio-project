// This component fetches the list of airframes in the backend Rails-API.
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchAirframes } from '../redux'
import { Link } from 'react-router-dom';
import ButtonComponent from './ButtonComponent'

// Since "airframeData" is matched to state.airframe in mapStateToProps below...
// it must be destructured as an object and passed into the React functional
// component as a variable.  Since "fetchAirframes" is being dispatched to the
// Redux action controller [airframeActions.js], it must also be destructured as well.
function AirframesContainer ({ airframeData, fetchAirframes }) {

  // evaluates the alphabetization button
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    if (clicked === false) {setClicked(true)}
  }

  useEffect(() => {
    fetchAirframes()
  }, [fetchAirframes]) // this: [] contains the dependency array that contains all the values that your useEffect depends on
  return airframeData.loading ? (
    <h2>Loading</h2>
  ) : airframeData.error ? (
    <h2>{airframeData.error}</h2>
  ) : (
    <div className="airframes-list">
      <h1 className="airframes-list-title">Airframes in the Database:</h1>

      {(clicked === false) ?
      <div className="airframes-list-item">
        <div>
          <ButtonComponent
            displayName={"Order Alphabetically"}
            onClick={handleClick}
          />
        </div>
        {airframeData &&
          airframeData.airframes &&
          airframeData.airframes.map((airframe) =>
            <Link key={airframe.id} to={{
              pathname: `/airframes/${airframe.id}`,
              state: {
                name: airframe.name
              }
            }}>
                <h2>{airframe.name}</h2>
            </Link>
          )}
      </div>

      : // ...or order the airframes alphabetically

      <div>
        <div className="airframes-list-item">
          {airframeData &&
            airframeData.airframes &&
            // simplified model using .sort() & .map() in vanilla JavaScript:
            // https://repl.it/@Richard_Burd/Alphabetize-Elements-in-an-Array-Acc-to-Name
            airframeData.airframes.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map((airframe) =>
              <Link key={airframe.id} to={{
                pathname: `/airframes/${airframe.id}`,
                state: {
                  name: airframe.name
                }
              }}>
                  <h2>{airframe.name}</h2>
              </Link>
            ).sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))}
        </div>
      </div>
      }

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
    fetchAirframes: () => dispatch(fetchAirframes())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AirframesContainer)
