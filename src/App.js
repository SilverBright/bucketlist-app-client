import React, { Component } from 'react';
import Ideas from './components/Ideas';
import AddIdea from './components/AddIdea';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="navbar">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/:idea_id" component={} />
          </div>
          <div className="ideas-app container">
            {/* <h1 className="center -text">BRAINSTORM</h1> */}
            <div>
              <AddIdea addIdea={this.addIdea} />
            </div>
            <div className="ideas collection">
              <Ideas ideas={this.props.ideas} />
            </div>
          </div>
        </div>
      </BrowserRouter>
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
