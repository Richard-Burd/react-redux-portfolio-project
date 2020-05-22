import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateAirframe } from '../redux'

class EditAirframe extends Component {
  constructor(props) {
    super(props)

    this.state = {
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
    //console.log(this.props.airframeData.singleAirframe.id);

    this.props.updateAirframe(this.state)
    event.preventDefault()
  }

  render() {
    console.log(this.state);
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

const mapStateToProps = state => {
  return {
    props: state.airframe.singleAirframe
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateAirframe: (props) => dispatch(updateAirframe(props)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAirframe)










// This isn't being used and should be tossed
/*
import React, { useState } from 'react'
import { connect } from 'react-redux'
import BasicForm from './BasicForm'
import { updateAirframe } from '../redux'
import { Link } from 'react-router-dom';

function EditAirframe (props) {

  const [number] = useState(props.match.params.airframeId);

  return (
    <div>
      <h2>This is where you will edit the {props.location.state.name}</h2>
      <h3>This airframe's ID Number is: {number}</h3>
      <Link key={number} to={{ pathname: `/airframes/${number}/edit/basic` }}>
        <h2>Edit basic info</h2>
      </Link>
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
    updateAirframe: (number) => dispatch(updateAirframe(number)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAirframe)
*/
