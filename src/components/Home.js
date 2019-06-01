import React, { Component } from 'react';
import Ideas from '../components/Ideas';
import AddIdea from '../components/AddIdea';

class  Home extends Component {
  render() {
    return (
      <div className="container">
        <h4 className="center">Home</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam molestias voluptatem saepe ut, asperiores numquam? Unde iure obcaecati eos maiores magnam hic, nesciunt eius aspernatur, est aut quis porro nisi.</p> 
            <div className="ideas-app container">
              <div>
                <AddIdea addIdea={this.addIdea} />
              </div>
            </div>
            <div className="ideas collection">
              <Ideas ideas={this.props.ideas} />
            </div>
          </div>  
    );
  }
}

export default Home;

