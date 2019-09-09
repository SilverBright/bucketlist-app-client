import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIdeas, deleteIdea } from '../actions/ideaActions';
import Target from '../target.jpg';

class Ideas extends Component {
  // set the state for sorting
  state = { isSorted: false }
  
  componentDidMount() {
    this.props.getIdeas()
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({
      isSorted: !this.state.isSorted
    })
  }

render() {
  let sortedIdeas 
    if (this.state.isSorted === true) {
      // Ideas sorted alphabetically
      sortedIdeas = this.props.ideas.concat().sort((i,j) => i.body.localeCompare(j.body, {sensitivity: 'base'}));
    } else {
      // Ideas sorted by creation date
      sortedIdeas = this.props.ideas.concat().sort((i,j) => j.created_at.localeCompare(i.created_at, {sensitivity: 'base'}));
  }

 const renderIdeas = sortedIdeas.map(idea =>
    <div className="bucketlist card" key={idea.id}>
      <img src={ Target } alt="target"/>
        <div className="card-content-small">
          <span className="card-title blue-text text-darken-2">{ idea.body }</span>
        <br/>
        <button class="waves-effect btn-small red darken-4"onClick={() => this.props.deleteIdea(idea.id)}>click to complete</button>
      </div>
    </div>
  )

  return (
    <div>
      <br />
      <button class="waves-effect btn blue" onClick={ this.handleClick }>{
        (this.state.isSorted === false) ? "sort ideas alphabetically" : "sort ideas by order created" }
      </button> 
      { renderIdeas }
    </div>
    )
  }
}

export default connect(state => ({ ideas: state.ideas }), { getIdeas, deleteIdea })(Ideas);