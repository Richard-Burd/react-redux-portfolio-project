import React from 'react'
import arrow from '../graphics/arrow.svg'
import circle from '../graphics/circle.svg'

function ArrowCircle() {
  return (
    <div className="arrow-circle">
      <img
        src={arrow}
        className="arrow"
        alt="arrow"
        style={{

          // This will be dynamically set by the props
          transform: `rotate(43deg)`,

          // 'absolute' relative to its parent node: <div className="arrow-circle">
          // this positions the arrow on top of the circle
          position: 'absolute'
        }}
      />
      <img
        src={circle}
        className="circle"
        alt="circle"
      />
    </div>
  )
}

export default ArrowCircle
