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
          zIndex: 1,
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
          transform: `rotate(${props.backgroundRotation}deg)`,
          // This will be dynamically set by the props, it reverses the graphic
          zIndex: -1,
          borderRadius: '50%' // prevents image from blocking button click
        }}
      />
      <img
        className="horizon-line-graphic"
        src={horizonLine}
        height={imageSize}
        alt="horizon"
        style={{
          position: 'relative',
          right: `${imageSize}px`
        }}
      />
    </div>
  )
}

export default GraphicComponent
