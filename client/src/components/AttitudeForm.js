import React from 'react'
import { connect } from 'react-redux'
import { fetchAttitude, updateAttitude } from '../redux'
// implement this logic here:
// https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
function AttitudeForm(props) {
  const index = props.match.params.airframeId
  fetchAttitude(index); // <= This isn't triggering...try triggering it in this component's parent component.
  // const [state, setState] = React.useState({
  //
  // })
  return (
    <form>
      <div>This is the Attitude Form Page for Airframe No. #{index}</div>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    props: state.attitude
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAttitude: (props) => dispatch(fetchAttitude(props)),
    updateAttitude: (props) => dispatch(updateAttitude(props))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttitudeForm)
