import React from 'react';

const About = () => {
  return (
    <div className="container"><br />
      <h1>About</h1>
      <h3>Welcome to my React on Rails app, Bucket List.</h3>
      <p>Bucket List is a todo style app built with:</p>
        <div className="container left-align">
          <ul className="browser-default">
            <li>React library front end</li>
            <li>Redux for store management</li>
            <li>Redux-Thunk middleware for asynchronous functions</li>
            <li>Rails API backend for data persistence</li>
            <li>React-router for navigation</li>
            <li>Materializecss (by Google) for design</li>
            <li>Optional button to toggle between alphabetical sorting and reverse order sorting</li>
          </ul>
        </div>
    </div>
  )
}

export default About;