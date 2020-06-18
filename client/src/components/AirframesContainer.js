// This component fetches the list of airframes in the backend Rails-API.
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAirframes } from '../redux'
import { Link } from 'react-router-dom';

// Since "airframeData" is matched to state.airframe in mapStateToProps below...
// it must be destructured as an object and passed into the React functional
// component as a variable.  Since "fetchAirframes" is being dispatched to the
// Redux action controller [airframeActions.js], it must also be destructured as well.
function AirframesContainer ({ airframeData, fetchAirframes }) {
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
      <div className="airframes-list-item">
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
