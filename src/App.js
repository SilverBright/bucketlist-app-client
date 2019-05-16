import React, { Component } from 'react';
import Ideas from './components/Ideas';
import AddIdea from './components/AddIdea';
import './App.css';
// import IdeaService from './services/IdeaService';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h4>Navbar</h4> 
          {/* <Navbar /> */}
        </div>
         <div className="ideas-app container">
          <h1 className="center blue-text">BRAINSTORM</h1>
          <div>
            <AddIdea addIdea={this.addIdea} />
          </div>
          <div className="ideas collection">
          <Ideas ideas={this.props.ideas} />
        </div>
          {/* <Idea /> */}
        </div>
      </div>
    );
  }
}

export default App;


  // constructor() {
  //   super()

  //   this.state = {
  //     ideas: []
  //   }
  // }

  // componentDidMount() {
  //   IdeaService.fetchIdeas().then(ideas => this.setState({ ideas })
  //   )
  // }

  // addIdea = idea => {
  //   IdeaService.createIdea(idea).then(idea => this.setState({
  //     ideas: this.state.ideas.concat(idea)
  //   }))
  // }
