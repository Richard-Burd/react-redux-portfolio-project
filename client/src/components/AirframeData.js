// This component renders the basic airframe information not available in Airframe.js
import React from 'react'
import AirframeForm from './AirframeForm'
import RasterComponent from './RasterComponent'

export default function AirframeData(props) {
  return (
    <div>
      <div>Name: {props.info.name}</div>
      <div>Weight: {props.info.weight} lbs</div>
      <div>Configuration: {props.info.config}</div>
      <RasterComponent
        image={props.info.image}
      />
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
