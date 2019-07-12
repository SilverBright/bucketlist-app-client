import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIdeas, deleteIdea } from '../actions/ideaActions';
import Target from '../target.jpg';

class Ideas extends Component {
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
  console.log("a", this.props.ideas)
  let sortedIdeas 
    if (this.state.isSorted === true) {
      sortedIdeas = this.props.ideas.concat().sort((i,j) => i.body.localeCompare(j.body, {sensitivity: 'base'}));
    } else {
      sortedIdeas = this.props.ideas.concat().sort((i,j) => j.created_at.localeCompare(i.created_at, {sensitivity: 'base'}))
  }

 const renderIdeas = sortedIdeas.map(idea =>
    <div className="bucketlist card" key={idea.id}>
      <img src={ Target } alt="target"/>
        <div className="card-content-small">
          <span className="card-title blue-text text-darken-2">{ idea.body }</span><br/>
        <button class="waves-effect waves-light btn-small red"onClick={() => this.props.deleteIdea(idea.id)}>click to complete</button>
      </div>
    </div>
  )

  return (
    <div>
      <button class="btn waves-effect waves-light blue" onClick={ this.handleClick }>{
        (this.state.isSorted === false) ? "click to sort alphabetically" : "click to sort by order created" }
      </button> 
      { renderIdeas }
    </div>
    )
  }
}

export default connect(state => ({ ideas: state.ideas }), { getIdeas, deleteIdea })(Ideas);