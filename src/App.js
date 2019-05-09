import React, { Component } from 'react';
import Ideas from './components/Ideas';
import IdeaService from './services/IdeaService';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      ideas: []
    }
  }

  componentDidMount() {
    IdeaService.fetchIdeas().then(ideas => this.setState({ ideas })
    )
  }

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h4>Navbar</h4>
          {/* <Navbar /> */}
        </div>
        <div className="sidebar">
          <Ideas ideas={ideas} />
        </div>
        <div className="main-content">
          <h4>main content</h4>
          {/* <Idea /> */}
        </div>
      </div>
    );
  }
}

export default App;
