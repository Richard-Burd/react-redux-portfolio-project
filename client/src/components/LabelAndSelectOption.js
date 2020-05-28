import React from 'react'

function LabelAndSelectOption(props) {
  const displayChildren = []
  const options = props.options

  // reference repo: https://repl.it/@Richard_Burd/Wrap-Each-Array-Element-in-New-Array
  // This iterates over a list of options we want to include in the drop-down menu
  for (const option of options) {
    displayChildren.push(
      <option className="select-option" value={option} key={displayChildren.length}>{option}</option>
    )
  }

  return (
    <div className="label-and-select-option">
      <label>{props.labelName}</label>
      <select
        name="config"
        value={props.inputValue}
        onChange={props.onChange}
      >
      {displayChildren}
      </select>
    </div>
  )
}

export default LabelAndSelectOption
