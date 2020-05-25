import React from 'react'
import { connect } from 'react-redux'
import { updateAttitude } from '../redux'

function ParameterForm(props) {
  // these may not get used...I dunno, but if they do get used...
  // implement this logic here:
  // https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
  // https://github.com/jaketrent/demo-single-change-handler/blob/master/src/App.js
  /*
  const [state, setState] = React.useState({
    hooks: true
  })

  function handleChange(event) {
    const value =
      event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  }
  */

  return (

    <div>
      <div>This is the Parameter Form Page for {props.type} Params No. {props.info.id}</div>
      {/*
        the logic is as follows:
        iterate over each parameter { props.info } and display
        an <input> field and a <label> for each one.
      */}
    </div>
  )
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
)(ParameterForm)
