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

  const sortedIdeas = this.props.ideas.sort((i,j) => i.body.localeCompare(j.body, {sensitivity: 'base'}))
  console.log(sortedIdeas)

  const renderSortedIdeas = this.props.ideas.map(idea =>
    <div className="bucketlist card" key={idea.id}>
      <img src={ Target } alt="target"/>
        <div className="card-content-small">
      <span className="card-title blue-text text-darken-2">{ idea.body }</span>
      <br/>
      <button onClick={() => this.props.deleteIdea(idea.id)}>completed</button>
    </div>
  </div>
);
 
  // const sortedIdeas = this.props.ideas.sort(function (a, b) {
  //  const bodyA = a.body.toUpperCase();
  //  const bodyB = b.body.toUpperCase();

  //   if (bodyA < bodyB) 
  //   return -1;
  //   else if (bodyA > bodyB ) return 1;

  //   return 0;
  // });
  // console.log(sortedIdeas);

  return (
    <div>
      <button>sort the list alphabetically</button> 
      {/* { renderIdeas } */}
      { renderSortedIdeas }
    </div>
    )
  }
}

export default connect(state => ({ ideas: state.ideas }), { getIdeas, deleteIdea })(Ideas);