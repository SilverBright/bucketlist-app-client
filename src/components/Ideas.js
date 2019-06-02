import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIdeas, deleteIdea } from '../actions/ideaActions';
import Target from '../target.jpg';

class Ideas extends Component {

  componentDidMount() {
    this.props.fetchIdeas()
  }
  
render() {
  const renderIdeas = this.props.ideas.map(idea =>
    <div className="bucketlist card" key={idea.id}>
      <img src={ Target } alt="target"/>
      <div className="card-small">
          {/* <span className="card-title purple-text">{ idea.title }</span> */}
        { idea.body }
        <br/>
        <button onClick={() => this.props.deleteIdea(idea.id)}>bad idea</button>
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