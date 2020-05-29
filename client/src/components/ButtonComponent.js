import React from 'react'

function ButtonComponent(props) {
  return (
    <button
      className="buttons"
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.displayName}
    </button>
  )
}

export default ButtonComponent
