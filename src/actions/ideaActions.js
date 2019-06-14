import IdeaAPI from '../services/IdeaAPI';

// SYNCHRONOUS ACTION CREATORS 
const fetchIdeasAction = ideas => {
  return {
    type: 'FETCH_IDEAS_ACTION',
    ideas
  }
}

const addIdeaAction = idea => {
  console.log('6') // STEP 6: dispatch a synchronous action to the REDUCER
  return {
    type: 'ADD_IDEA_ACTION',
    idea
  }
}

const deleteIdeaAction = ideaId => {
  return { 
    type: "DELETE_IDEA_ACTION",
    ideaId
  }
}

// ASYNC ACTION CREATORS

export const getIdeas = () => {
  return dispatch => {
    return IdeaAPI.fetchIdeas()
      .then(ideas => {
        dispatch(fetchIdeasAction(ideas))
      })
    .catch(error => console.log(error));
  }
}

export const addIdea = idea => { 
  console.log('2'); // STEP 2: we were sent to this action creator from components/AddIdea.js
  return dispatch => { 
    return IdeaAPI.createIdea(idea) // return a promise of a new idea: take an asynchronous trip to the API to create the new idea
      .then(idea => {  
        console.log('5', idea); // STEP 5: when the promise is fulfilled, the return value of 'idea' is passed in
        dispatch(addIdeaAction(idea)); 
        console.log('8') // STEP 8: dispatch a synchronous action creator 'ADD_IDEA_ACTION'
      })
    .catch(error => console.log(error));
  }
}

export const deleteIdea = ideaId => {
  return dispatch => {
    return IdeaAPI.deleteIdea(ideaId)
      .then(response => {
      if (response.ok)
      dispatch(deleteIdeaAction(ideaId));
    })
    .catch(error => console.log(error));
  }
}
