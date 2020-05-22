import React from 'react'
import AirframeForm from './AirframeForm'

export default function AirframeData(props) {
  return (
    <div>
      <div>Name: {props.info.name}</div>
      <div>Weight: {props.info.weight} lbs</div>
      <div>Configuration: {props.info.config}</div>
      <img src={props.info.image} alt="plane" />
      <AirframeForm
        formAction={"update"}
        id={props.info.id}
        name={props.info.name}
        weight={props.info.weight}
        config={props.info.config}
        image={props.info.image}
      />
    </div>
  )
}
