import React from 'react'
import arrow from '../images/arrow.svg'
import circle from '../images/circle.svg'

function ArrowCircle() {
  return (
    <div>
      <img
        src={arrow}
        className="arrow-circle"
        alt="arrow"
        style={{
          transform: `rotate(20deg)`,
          position: 'absolute'
        }}
      />
      <img src={circle} className="green-circle" alt="corcle" />
    </div>
  )
}

export default ArrowCircle
