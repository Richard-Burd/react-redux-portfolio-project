import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <h3>Navagation Options:</h3>
      <ul>
        <Link to="/airframes">
          <li>Airframes</li>
        </Link>
        <Link to="/">
          <li>Home</li>
        </Link>
      </ul>
    </nav>
  )
}
