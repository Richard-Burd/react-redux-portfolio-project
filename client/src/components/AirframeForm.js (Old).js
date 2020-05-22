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

      formId: this.props.id,
      formName: this.props.name,
      formWeight: this.props.weight,
      formConfig: this.props.config,
      formImageURL: this.props.image
    }
  }

  handleNameChange = (event) => {
    this.setState({
      formName: event.target.value
    })
  }

  handleWeightChange = (event) => {
    this.setState({
      formWeight: event.target.value
    })
  }

  handleConfigChange = (event) => {
    this.setState({
      formConfig: event.target.value
    })
  }

  handleImageChange = (event) => {
    this.setState({
      formImageURL: event.target.value
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
              value={this.state.formWeight}
              onChange={this.handleWeightChange}
            />
          </div>
          <div>
            <label>Configuration: </label>
            <select value={this.state.formConfig} onChange={this.handleConfigChange}>
              <option value="Conventional Tail">Conventional Tail</option>
              <option value="Flying Wing">Flying Wing</option>
              <option value="Twin Boom">Twin Boom</option>
            </select>
          </div>
          <div>
            <label>Image URL: </label>
            <input
              type="text"
              value={this.state.formImageURL}
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
