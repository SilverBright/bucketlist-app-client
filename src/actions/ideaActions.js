import IdeaAPI from '../services/IdeaAPI';

// SYNCHRONOUS ACTION CREATORS 
// instantly return an action with data ready to go

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

// ASYNC ACTION CREATORS
// Thunk allows action creators to return a function instead of an action
// Thunk allows actions to activate in the correct order (retrieve data before action creator returns an action)

export const getIdeas = () => {
  // dispatch an action to the state
  // return a dispatch function as an argument 
  return dispatch => {
    // make a request to the API
    return IdeaAPI.fetchIdeas()
    // when the response is received, we hit the then() function
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
