import React from 'react'

// ---------- "BrowserRouter as Router" just saves the time of writing out BrowserRouter each time it is used.
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export function TestRouter() {
  return (
    <div>
      <Router>
        <TestNavlinks />
        <Switch>
          <Route exact path="/test-home" component={TestHomepage} />  {/* exact can go in 2 different places */}
          <Route path="/test-about" exact component={TestAboutpage} />{/* exact can go in 2 different places */}
        </Switch>
      </Router>
    </div>
  )
}

export function TestHomepage() {
  return (
    <div>
      <h1 style={{ color: '#dc8678' }}>The TestHomepage Component is Now Rendering</h1>
    </div>
  )
}

export function TestAboutpage() {
  return (
    <div>
      <h1 style={{ color: '#5CA548' }}>The TestAboutpage Component is Now Rendering</h1>
    </div>
  )
}

export default function TestNavlinks() {
  return (
    <nav>
      <h3>Navagation Test Links:</h3>
      <ul>
        <Link to="/test-home">
          <li>Home Page Link</li>
        </Link>
        <Link to="/test-about">
          <li>About Page Link</li>
        </Link>
        <Link to="/">
          <li>Link to Default Index URL</li>
        </Link>
      </ul>
    </nav>
  )
}
