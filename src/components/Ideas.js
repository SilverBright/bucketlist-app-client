import React from 'react';

const Ideas = ({ ideas }) => {
  const renderIdeas = ideas.map(idea =>
    <p key={idea.id}>{ idea.title }</p>
  )

  return (
    <div>
      { renderIdeas }
    </div>
  )
}

export default Ideas;