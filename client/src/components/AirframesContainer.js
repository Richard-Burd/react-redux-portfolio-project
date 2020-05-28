// This component fetches the list of airframes in the backend Rails-API.
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAirframes } from '../redux'
import { Link } from 'react-router-dom';

function AirframesContainer ({ airframeData, fetchAirframes }) {
  useEffect(() => {
    fetchAirframes()
  }, [fetchAirframes],) // this: [] contains the dependency array that contains all the values that your useEffect depends on
  return airframeData.loading ? (
    <h2>Loading</h2>
  ) : airframeData.error ? (
    <h2>{airframeData.error}</h2>
  ) : (
    <div>
      <h1>Airframes List</h1>
      <div>
        {airframeData &&
          airframeData.airframes &&
          airframeData.airframes.map((airframe, index) =>
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
