import React from 'react'

function LabelAndTextInput(props) {
  return (
    <div className="label-and-text-input">
      <label className="label-name">{props.labelName}</label>
      <input
        className="input-field-text"
        type="text"
        value={props.inputValue}
        onChange={props.onChange}
        name={props.nameValue}
      />
      {/* <p className="label-and-text-description">{props.description}</p> */}
    </div>
  )
}

export default LabelAndTextInput
