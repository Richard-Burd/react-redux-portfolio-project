import React from 'react'

function HomePage() {
  return (
    <div className="container">
      <img
        className="container__image"
        src="https://i.imgur.com/K4h9aD4.png"
        alt="Airborne UAV"
      />
      <div className="container__text">
        <h1 className="home-page-title">Homepage</h1>
        <div className="home-page-text">
          <p>Welcome to the ArduPlane Parameters Application.  This app is designed for use with the <a href="https://ardupilot.org">ArduPilot open source software</a> used to achieve autonomous flight control for small, unmanned aerial vehicles (UAV's) and in particular, the <a href="https://ardupilot.org/plane">Arduplane version</a> of this software.  </p>
          <p>This app lets a user tune the <a href="https://ardupilot.org/plane/docs/parameters.html">flight control parameters </a>  for their fixed-wing UAV while interacting with a GUI that lets them see exactly what they are doing. &nbsp; Currently, a user of this software has to carefully read the documentation and sift through a series of esoterically-named parameters while trying to remember what each one does and what the acceptable range of values are.&nbsp; Several crashes have happened over the years because of improperly set parameters.</p>
          <p>The iteration of this program is at v0.1 because it is only intended to be a proof of concept; a fully usable app that allows for changing all 100-plus parameters in the ArduPilot software would be far beyond the scope of this Flatiron School portfolio project.  The Project specifications call for 7 components (2-containers, and 5 functional) whereas this iteration of the app already contains an access of three times that. </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
