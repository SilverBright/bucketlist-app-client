import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIdeas, deleteIdea } from '../actions/ideaActions';
import Target from '../target.jpg';

class Ideas extends Component {

  componentDidMount() {
    this.props.getIdeas()
  }
  
render() {
  const renderIdeas = this.props.ideas.concat().reverse().map(idea =>
    <div className="bucketlist card" key={idea.id}>
      <img src={ Target } alt="target"/>
        <div className="card-content-small">
      <span className="card-title blue-text text-darken-2">{ idea.body }</span>
      <br/>
      {/* state manipulation from deleteIdea */}
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

// the mapStateToProps() method is executed with each change to the store's state
// Shorten mapStateToProps() down to an anonymous arrow function and pass it directly into connect()
export default connect(state => ({ ideas: state.ideas }), { getIdeas, deleteIdea })(Ideas);