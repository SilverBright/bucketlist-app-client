// #################################################

// ALTERNATE CODE FOR IDEAS.JS

// #################################################

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIdeas, deleteIdea } from '../actions/ideaActions';
import Target from '../target.jpg';

class Ideas extends Component {
  // no super(props) because I don't need access to the state's props within the Component
  state = { isClicked: false }
  
  componentDidMount() {
    this.props.getIdeas()
    this.setState({
      ideas: this.props.ideas
    })
  }

  reversedIdeas = this.props.ideas
  sortedIdeas = this.props.ideas.sort((i,j) => i.body.localeCompare(j.body, {sensitivity: 'base'}))

  // when the button is click, state changes to isClicked: true
  handleClick = e => {
    e.preventDefault();
    this.setState({
      isClicked: true
    })
    this.reversedIdeas = this.sortedIdeas
  }

// ORIGINAL LIST

render() {

  // const ideasCard = this.props.ideas.map(idea =>
  //   <div className="bucketlist card" key={idea.id}>
  //     <img src={ Target } alt="target"/>
  //       <div className="card-content-small">
  //       <span className="card-title blue-text text-darken-2">{ idea.body }</span>
  //       <br/>
  //       <button onClick={() => this.props.deleteIdea(idea.id)}>completed</button>
  //     </div>
  //   </div>
  // )
 

  // const renderIdeas = ideasCard.reverse()
  // const ideas = () => {
  //   if (this.state.isClicked) {
  //     reversedIdeas = sortedIdeas
  //   }
  // }
 
  const renderIdeas = this.reversedIdeas.map(idea =>
    <div className="bucketlist card" key={idea.id}>
      <img src={ Target } alt="target"/>
        <div className="card-content-small">
        <span className="card-title blue-text text-darken-2">{ idea.body }</span>
        <br/>
        <button onClick={() => this.props.deleteIdea(idea.id)}>completed</button>
      </div>
    </div>
  ).reverse()

  // SORT LIST ALPHABETICALLY

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
  

  // const sortedIdeas = renderIdeas.sort()

  // MAP THROUGH NEW SORTED LIST

  // const renderSortedIdeas = sortedIdeas.map(idea =>
  //   <div className="bucketlist card" key={idea.id}>
  //     <img src={ Target } alt="target"/>
  //       <div className="card-content-small">
  //       <span className="card-title blue-text text-darken-2">{ idea.body }</span>
  //       <br/>
  //       <button onClick={() => this.props.deleteIdea(idea.id)}>completed</button>
  //     </div>
  //   </div>
  // ); 
    
  return (
    <div>
      <button onClick={ this.handleClick }>sort the list alphabetically</button> 
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator */}
      {/* condition           = false  ?      true   :       false      */}
      {/* {(this.state.isClicked === false) ? renderIdeas : renderIdeas = renderSortedIdeas } */}
      {/* { ideas() } */}
      { renderIdeas }  
    </div>
    )
  }
}

export default connect(state => ({ ideas: state.ideas }), { getIdeas, deleteIdea })(Ideas);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  // const renderIdeas = this.props.ideas.sort(function (a, b) {
  //   const bodyA = a.body.toUpperCase();
  //   const bodyB = b.body.toUpperCase();
  //    if (bodyA < bodyB) 
  //    return -1;
  //    else if (bodyA > bodyB ) return 1;
  //    return 0;
  //  });
  //  console.log(sortedIdeas);