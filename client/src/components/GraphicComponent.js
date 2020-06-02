import React from 'react'
import horizonLine from '../graphics/horizonLine.svg'

function GraphicComponent(props) {
  const imageSize = 400
  return (
    <div className="graphic-component">
      <img
        className="profile-graphic"

        // This will be dynamically set by the props
        src={props.foregroundSourceImage}

        height={imageSize}

        alt="arrow"
        style={{
          transform: `rotate(${props.foregroundRotation}deg)`,

          // 'absolute' relative to its parent node: <div className="arrow-circle">
          // this positions the arrow on top of the circle
          position: 'absolute',
          zIndex: 3,
          borderRadius: '50%' // prevents image from blocking button click
        }}
      />
      <img
        className="circle-graphic"

        // This will be dynamically set by the props
        src={props.backgroundSourceImage}

        // This will be dynamically set by the props
        height={imageSize}


        alt="circle"
        style={{
          position: 'absolute',
          transform: `rotate(${props.backgroundRotation}deg)`,
          // This will be dynamically set by the props, it reverses the graphic
          zIndex: 2,
          borderRadius: '50%' // prevents image from blocking button click
        }}
      />
      <img
        className="horizon-line-graphic"
        src={horizonLine}
        height={imageSize}
        alt="horizon"
        style={{
          zIndex: 3,
          position: 'absolute',
        }}
      />
    </div>
  )
}

export default GraphicComponent
