import React from 'react'
import planeSideView from '../graphics/planeSideView.svg'
import pitchCircle from '../graphics/pitchCircle.svg'

function GraphicComponent() {
  return (
    <div className="circle-graphic">
      <img

        // This will be dynamically set by the props
        height={`400`}

        // This will be dynamically set by the props
        src={planeSideView}
        className="arrow"
        alt="arrow"
        style={{

          // This will be dynamically set by the props
          transform: `rotate(43deg)`,

          // 'absolute' relative to its parent node: <div className="arrow-circle">
          // this positions the arrow on top of the circle
          position: 'absolute',
          zIndex: 2
        }}
      />
      <img

        // This will be dynamically set by the props
        height={`400`}

        // This will be dynamically set by the props
        src={pitchCircle}
        className="circle"
        alt="circle"
        style={{

          // This will be dynamically set by the props, it reverses the graphic
          transform: `scaleY(-1)`,
          zIndex: -1
        }}
      />
    </div>
  )
}

export default GraphicComponent
