import React from 'react';

const About = () => {
  return (
    <div className="container"><br />
      <h3>About</h3>
      <h5>Welcome to my React on Rails app, Bucket List. Bucket List is a todo style app built with:</h5>
        <div className="container left-align">
          <ul className="browser-default">
            <li>React front end</li>
            <li>Redux & Redux Thunk for store management and middleware</li>
            <li>Rails API backend for data persistence</li>
            <li>React-router for navigation</li>
            <li>Materializecss for styling</li>
            <li>and, an optional button to toggle between sorting your list alphabetically, or in sorting reverse order</li>
          </ul>
        </div>
    </div>
  )
}

export default About;