import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIdeas, deleteIdea } from '../actions/ideaActions';
import Target from '../target.jpg';

class Ideas extends Component {

  componentDidMount() {
    this.props.getIdeas()
  }
  
render() {
  const renderIdeas = this.props.ideas.map(idea =>
    <div className="bucketlist card" key={idea.id}>
      <img src={ Target } alt="target"/>
        <div className="card-content-small">
      <span className="card-title blue-text text-darken-2">{ idea.body }</span>
      <br/>
      <button onClick={() => this.props.deleteIdea(idea.id)}>completed</button>
    </div>
  </div>
).reverse()

  return (
    <div>
      { renderIdeas }
    </div>
    )
  }
}

export default connect(state => ({ ideas: state.ideas }), { getIdeas, deleteIdea })(Ideas);