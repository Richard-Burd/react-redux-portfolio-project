import React from 'react'

function RasterComponent(props) {
  return (
    <div className="raster-image-container">
      <img
        className="raster-image"
        height="150"
        src={props.image}
        alt="plane" />
    </div>
  )
}

export default RasterComponent
