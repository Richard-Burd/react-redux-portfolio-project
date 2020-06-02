import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <h3 className="nav-bar-title">ArduPilot Parameter Settings App</h3>
      <ul className="nav-bar-options" id="nav-bar">
        <Link to="/airframes" className="navlink">
          <li>Airframes</li>
        </Link>
        <Link to="/" className="navlink">
          <li>Home</li>
        </Link>
        <Link to="/new-airframe" className="navlink">
          <li>New Airframe</li>
        </Link>
      </ul>
    </nav>
  )
}
