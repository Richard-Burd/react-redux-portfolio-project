// This component renders the basic airframe information not available in Airframe.js
import React from 'react'
import AirframeForm from './AirframeForm'
import RasterComponent from './RasterComponent'

export default function AirframeData(props) {
  return (
    <div>
      <AirframeForm
        formAction={"update"}
        id={props.info.id}
        name={props.info.name}
        weight={props.info.weight}
        config={props.info.config}
        image={props.info.image}
      />
      <RasterComponent
        image={props.info.image}
      />
    </div>
  )
}
