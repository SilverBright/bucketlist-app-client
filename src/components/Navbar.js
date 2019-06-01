import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <a className="brand-logo">Brainstorm</a>
        <ul>
          {/* Link to provides an async update to each of the routes */}
          <li><Link to="/">Home Page</Link></li>
          <li><Link to="/about">About Page</Link></li>
          <li><Link to="/contact">Contact Page</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;