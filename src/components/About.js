import React from 'react';

const About = () => {
  return (
    <div className="container"><br />
      <h3 className="center">About</h3>
      <h5>Welcome to my React on Rails app: Bucket List</h5>
        <div className="container">
        <h5>Bucket List is a simple todo style app built with:
          <p><ul className="container browser-default left-align">
              <li>React/Redux-Thunk frontend</li>
              <li>Rails API backend</li>
              <li>React-router for navigation</li>
              <li>and, an optional button to toggle between sorting the list alphabetically, or in reverse order</li>
            </ul>
          </p>
        </h5>
      </div>
    </div>
  )
}

export default About;