import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Brainstorm</a>
        <ul className="right">
          <li><a href="/">Home Page</a></li>
          <li><a href="/about">About Page</a></li>
          <li><a href="/contact">Contact Page</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;