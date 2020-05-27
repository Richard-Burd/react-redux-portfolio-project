import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateAttitude } from '../redux'

class AttitudeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    console.log(this.props);
    return (
      <div>Attitude Component Form</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // add in the pid and plugin settings here
    props: state.attitude
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // add in the pid and plugin settings here
    updateAttitude: (props) => dispatch(updateAttitude(props))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttitudeForm)
