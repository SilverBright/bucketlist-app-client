import React, { Component } from 'react';
import Ideas from './components/Ideas';
import IdeaService from './services/IdeaService';
import AddIdea from './components/AddIdea';
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

  addIdea = idea => {
    IdeaService.createIdea(idea).then(idea => this.setState({
      ideas: this.state.ideas.concat(idea)
    }))
  }

  render() {
    console.log(this.state.ideas)
    return (
      <div className="App">
        <div className="navbar">
          <h4>Navbar</h4> 
          {/* <Navbar /> */}
        </div>
         <div className="ideas-app container">
          <h1 className="center blue-text">BRAINSTORM</h1>
          <div className="ideas collection">
          <Ideas ideas={this.state.ideas} />
          <AddIdea addIdea={this.addIdea} />
        </div>
          {/* <Idea /> */}
        </div>
      </div>
    );
  }
}

export default App;
