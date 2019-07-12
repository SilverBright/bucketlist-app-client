import React, { Component } from 'react';
import Ideas from './Ideas';
import AddIdea from './AddIdea';

class Home extends Component {
  render() {
    return (
      <div className="container"><br />
        <h3 className="center" text="bold">welcome to bucket list</h3>
          <h5>things to do before you</h5>
          <h4>DIE</h4>
          <p>Start your list below</p>
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