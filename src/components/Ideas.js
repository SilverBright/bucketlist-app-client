import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIdeas, deleteIdea } from '../actions/ideaActions';
import Target from '../target.jpg';

class Ideas extends Component {

  componentDidMount() {
    this.props.fetchIdeas()
  }
  
render() {
  const renderIdeas = this.props.ideas.concat().reverse().map(idea =>
    <div className="bucketlist card" key={idea.id}>
      <img src={ Target } alt="target"/>
        <div className="card-content-small">
      <span className="card-title blue-text text-darken-2">{ idea.body }</span>
        <br/>
        <button onClick={() => this.props.deleteIdea(idea.id)}>completed</button>
      </div>
    </div>
  )

    return (
      <div>
        { renderIdeas }
      </div>
    )
  }
}
  
export default connect(
  state => ({
    ideas: state.ideas}), 
    { fetchIdeas, deleteIdea }
    )(Ideas);