import React, { Component } from 'react';
// import Ideas from './Ideas';
import AddIdea from './AddIdea';

class IdeaForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="ideas-app container">
        <div>
          <AddIdea addIdea={this.addIdea} />
        </div>
        </div>
        {/* <div className="ideas collection">
          <Ideas ideas={this.props.ideas} />
        </div> */}
        </div>
    );
  }
}

export default IdeaForm;