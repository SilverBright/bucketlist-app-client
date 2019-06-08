import IdeaAPI from '../services/IdeaAPI';

// Synchronous Action Creators

const successfullIdeasFetch = ideas => {
  return {
    type: 'SUCCESSFUL_IDEAS_FETCH',
    ideas
  }
}

const successfullyAddedIdea = idea => {
  // console.log(idea)
  // return an object with a property called 'idea'
  return {
    type: 'SUCCESSFULLY_ADDED_IDEA',
    idea
  }
}

const succefullyDeletedIdea = ideaId => {
  // console.log(ideaId)
  // returns the deleted ID number
  return { 
    type: "SUCCESSFULLY_DELETE_IDEA",
    ideaId
  }
}

// Async Action Creators

export const getIdeas = () => {
  return dispatch => {
    return IdeaAPI.fetchIdeas()
      .then(ideas => {
        dispatch(successfullIdeasFetch(ideas))
      })
    .catch(error => console.log(error));
  }
}

export const addIdea = idea => { 
  return dispatch => {
    return IdeaAPI.createIdea(idea)
      .then(idea => {
        dispatch(successfullyAddedIdea(idea));
      })
    .catch(error => console.log(error));
  }
}

export const deleteIdea = ideaId => {
  return dispatch => {
    return IdeaAPI.deleteIdea(ideaId)
      .then(response => {
      if (response.ok)
      dispatch(succefullyDeletedIdea(ideaId));
    })
    .catch(error => console.log(error));
  }
}
