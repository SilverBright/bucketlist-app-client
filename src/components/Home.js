import React, { Component } from 'react';
import Ideas from './Ideas';
import AddIdea from './AddIdea';

class Home extends Component {
  render() {
    return (
      <div className="container"><br />
        <h1 className="center" text="bold">welcome to <strong>bucket list</strong></h1>
        <h3>things to do before you <span id="shadowed">DIE</span></h3>
        <div className="ideas-app container">
          <div>
            <AddIdea addIdea={this.addIdea} />
          </div>
          <div className="ideas collection">
            <Ideas ideas={this.props.ideas} />
          </div>
        </div>
      </div>  
    );
  }
}

export default Home;