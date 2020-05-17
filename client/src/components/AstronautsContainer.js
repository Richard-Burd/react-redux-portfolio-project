import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAstronauts } from '../redux'

function AstronautsContainer ({ astronautData, fetchAstronauts }) {
  useEffect(() => {
    fetchAstronauts()
  }, [fetchAstronauts],) // this: [] contains the dependency array that contains all the values that your useEffect depends on
  return astronautData.loading ? (
    <h2>Loading</h2>
  ) : astronautData.error ? (
    <h2>{astronautData.error}</h2>
  ) : (
    <div>
      <h2>Astronauts List</h2>
      <div>
        {astronautData &&
          astronautData.astronauts &&
          astronautData.astronauts.map((astronaut, index) => <p key={index}>{astronaut.name}</p>)}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    astronautData: state.astronaut
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAstronauts: () => dispatch(fetchAstronauts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AstronautsContainer)
