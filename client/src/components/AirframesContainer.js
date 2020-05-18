import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAirframes } from '../redux'

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
            <div key={index}>
              <h2>{airframe.name}</h2>
              <h3>Configuration: {airframe.config}</h3>
              <h3>Weight: {airframe.weight} lbs.</h3>
              <img src={airframe.image} alt="airframe" />
            </div>
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
