// useState() https://www.youtube.com/watch?v=O6P86uwfdR0
// useState() forms: https://www.youtube.com/watch?v=-3lL8oyev9w

// This is close to what I want to do here, but with the extra step of breaking
// down an array of objects.  Here we just want to break down a single object.
// https://www.storyblok.com/tp/react-dynamic-component-from-json

import React, { useState } from 'react';
import { connect } from 'react-redux'
import { updateAttitude } from '../redux'

const RenderChildren = (props) => { // <= this needs to be a class component

  // https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/
  const [name, setName] = useState({firstName: props.data})

  const children = []

  for (const key in props.data) {
    //console.log(`We've got a key of: ${key} and a value of: ${props.data[key]}`);
    //console.log(Object.keys(props.data).length);
    children.push(
      React.createElement('div', {key: children.length ,id: "container"}, // key is the unique key
        React.createElement('label', {id: "label"}, key),
        React.createElement('input', {
          type: "text",
          value: name.firstName[key],
          placeholder: props.data[key],
          onChange: e => {setName({ ...name, firstName: e.target.value})}
        })
      )
    )

  }
  return <div>{children}</div>
}

function ParameterForm(props) {

  const handleSubmit = (event) => {
    console.log('submitting form')
    console.log(props);
    event.preventDefault()
  }

  return (
    <div>
      <div>This is the Parameter Form Page for {props.type} Params No. {props.info.id}</div>
      <div>We have {(Object.keys(props.info).length)} variables to render</div>
      <form className={"form"} onSubmit={handleSubmit}>
        <RenderChildren data={props.info} />
        <button type="submit">Submit</button>
      </form>
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
