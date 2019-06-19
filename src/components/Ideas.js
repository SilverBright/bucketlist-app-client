import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIdeas, deleteIdea } from '../actions/ideaActions';
import Target from '../target.jpg';

class Ideas extends Component {

  componentDidMount() {
    this.props.getIdeas()
  }

  handleClick = () => {
    console.log("button clicked!")
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

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
  const sortedIdeas = this.props.ideas.sort((i,j) => i.body.localeCompare(j.body, {sensitivity: 'base'}))
  // console.log(sortedIdeas)

  const renderSortedIdeas = sortedIdeas.map(idea =>
    <div className="bucketlist card" key={idea.id}>
      <img src={ Target } alt="target"/>
        <div className="card-content-small">
        <span className="card-title blue-text text-darken-2">{ idea.body }</span>
        <br/>
        <button onClick={() => this.props.deleteIdea(idea.id)}>completed</button>
      </div>
    </div>
  );
    
  return (
    <div>
      <button onClick={this.handleClick}>sort the list alphabetically</button> 
      { renderIdeas }
      {/* { renderSortedIdeas } */}
    </div>
    )
  }
}

export default connect(state => ({ ideas: state.ideas }), { getIdeas, deleteIdea })(Ideas);


  // const sortedIdeas = this.props.ideas.sort(function (a, b) {
  //   const bodyA = a.body.toUpperCase();
  //   const bodyB = b.body.toUpperCase();
  //    if (bodyA < bodyB) 
  //    return -1;
  //    else if (bodyA > bodyB ) return 1;
  //    return 0;
  //  });
  //  console.log(sortedIdeas);