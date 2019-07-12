import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <a className="brand-logo bold">bucket list</a>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/FAQ">faq</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;