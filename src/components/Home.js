import React, { Component } from 'react';
import Ideas from './Ideas';
import AddIdea from './AddIdea';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <h4 className="center">Welcome</h4>
          <h5>Things to do before you kick that bucket.</h5>
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


