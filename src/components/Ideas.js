import React from 'react';
import Target from '../targets.jpg';

const Ideas = ({ ideas }) => {
  const reverseOrderIdeas = ideas.reverse()
  const renderIdeas = reverseOrderIdeas.map(idea =>
    <div className="brainstorm card" key={idea.id}>
      <img src={Target} alt="target"/>
      <div className="card-content">
        {/* <Link to={'/' + idea.id}> */}
        <span className="card-title purple-text">{ idea.title }</span>
        {/* </Link> */}
        <p>{ idea.body }</p>
      </div>
    </div>
  )

  return (
    <div>
      { renderIdeas }
    </div>
  )
}

export default Ideas;