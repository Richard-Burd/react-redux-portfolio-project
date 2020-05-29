import React from 'react'

function RasterComponent(props) {
  return (
    <div className="raster-image-container">
      <img
        className="raster-image"
        height="250"
        src={props.image}
        alt="plane" />
    </div>
  )
}

export default RasterComponent
