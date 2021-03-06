// This comonent is used to either create [a new] or edit [an existing] airframe.
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createAirframe, updateAirframe } from '../redux'
import LabelAndTextInput from './LabelAndTextInput'
import LabelAndSelectOption from './LabelAndSelectOption'
import ButtonComponent from './ButtonComponent'

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
      image: this.props.image,
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
      [event.target.name]: value
    });
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
    return (
      <div className="airframe-form">
        <h2 className="airframe-form-title">Basic Airframe Info</h2>
        <form onSubmit={this.handleSubmit}>
          <LabelAndTextInput
            labelName={"Name: "}
            inputValue={this.state.formName}
            onChange={this.handleNameChange}
          />
          <LabelAndTextInput
            labelName={"Weight: "}
            inputValue={this.state.weight}
            onChange={this.handleAnyEventChange}

            // required b/c key & value in state are the same & it uses handleAnyEventChange()
            nameValue={"weight"}
          />
          <LabelAndSelectOption
            options={["Conventional Tail", "Flying Wing", "Twin Boom"]}
            labelName={"Configuration: "}
            inputValue={this.state.config}
            onChange={this.handleAnyEventChange}
          />
          <LabelAndTextInput
            labelName={"Image URL: "}
            inputValue={this.state.image}
            onChange={this.handleAnyEventChange}

            // required b/c key & value in state are the same & it uses handleAnyEventChange()
            nameValue={"image"}
          />
          <div className="airframe-form-submit-button">
            <ButtonComponent
              displayName={"Submit"}
              type={"submit"}
            />
          </div>
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
    createAirframe: (props) => dispatch(createAirframe(props)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AirframeForm)
