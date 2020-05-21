import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateAirframe } from '../redux'

class BasicForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formName: '',
      formWeight: '',
      formConfig: 'conventional-tail',
      formImageURL: ''
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
    alert(`The form for ${this.state.formName} has been submitted`)
    event.preventDefault()
  }

  render() {
    return (
      <form style={{ backgroundColor: '#bfeec4' }} onSubmit={this.handleSubmit}>
        <span>Basic Form to edit {this.props.airframeData.singleAirframe.name}</span>
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
            <option value="conventional-tail">Conventional Tail</option>
            <option value="flying-wing">Flying Wing</option>
            <option value="twin-boom">Twin Boom</option>
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
    )
  }
}

const mapStateToProps = state => {
  return {
    airframeData: state.airframe
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateAirframe: (number) => dispatch(updateAirframe(number)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicForm)
