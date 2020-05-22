// this will combine "EditAirframe.js" and "CreateAirframe.js" into one form.
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createAirframe, updateAirframe } from '../redux'

class AirframeForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // this decides whether you run createAirframe() or updateAirframe()
      formpurpose: this.props.formAction,

      // These are not refactored so you (the React learner onboarding this code)
      // can trace these to the Redux action controllers & see how it all works...
      formId: this.props.id,
      formName: this.props.name,

      // ...the remaining params are refactored so they can be expanded later on:
      // https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
      weight: this.props.weight,
      config: this.props.config,
      image: this.props.image
    }
  }

  handleNameChange = (event) => {
    this.setState({
      formName: event.target.value
    })
  }

  handleAnyEventChange = (event) => {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.value]: value
    });
  }

  handleWeightChange = (event) => {
    this.setState({
      weight: event.target.value
    })
  }

  handleConfigChange = (event) => {
    this.setState({
      config: event.target.value
    })
  }

  handleImageChange = (event) => {
    this.setState({
      image: event.target.value
    })
  }

  handleSubmit = (event) => {
    this.state.formpurpose === "create" ? (
      this.props.createAirframe(this.state)
    ) : (
      this.props.updateAirframe(this.state)
    )
    event.preventDefault()
  }

  render() {
    // console.log(this.state);
    return (
      <div style={{ backgroundColor: '#bfeec4' }}>
        <h2>Airframe Form</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              value={this.state.formName}
              onChange={this.handleNameChange}
            />
          </div>
          <div>
          <label>Weight: </label>
            <input
              type="text"
              value={this.state.weight}
              onChange={this.handleWeightChange}
            />
          </div>
          <div>
            <label>Configuration: </label>
            <select value={this.state.config} onChange={this.handleConfigChange}>
              <option value="Conventional Tail">Conventional Tail</option>
              <option value="Flying Wing">Flying Wing</option>
              <option value="Twin Boom">Twin Boom</option>
            </select>
          </div>
          <div>
            <label>Image URL: </label>
            <input
              type="text"
              value={this.state.image}
              onChange={this.handleImageChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

// export default CreateAirframe

const mapStateToProps = state => {
  // console.log('entered mapStateToProps');
  // console.log(state);
  return {
    props: state.airframe.singleAirframe
  }
}

const mapDispatchToProps = dispatch => {
  // console.log('entered mapDispatchToProps');
  return {
    updateAirframe: (props) => dispatch(updateAirframe(props)),
    createAirframe: (props) => dispatch(createAirframe(props)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AirframeForm)