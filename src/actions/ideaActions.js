import IdeaAPI from '../services/IdeaAPI';

// SYNCHRONOUS ACTION CREATORS 
// instantly return an action with data ready to go

const fetchIdeasAction = ideas => {
  return {
    type: 'FETCH_IDEAS_ACTION',
    ideas
  }
}

const addIdeaAction = idea => {
  // console.log(idea)
  // return an object with a property called 'idea'
  return {
    type: 'ADD_IDEA_ACTION',
    //idea: idea
    idea
  }
}

const deleteIdeaAction = ideaId => {
  // console.log(ideaId)
  // returns the deleted ID number
  return { 
    type: "DELETE_IDEA_ACTION",
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
    // when the response is received, we hit the callback then() function
      .then(ideas => {
    // dispatch an action creator to reducer
        dispatch(fetchIdeasAction(ideas))
      })
    .catch(error => console.log(error));
  }
}

export const addIdea = idea => { 
  console.log('C');
  // dispatch an action to the state
  // return a dispatch function as an argument using thunk
  return dispatch => {
    // make a request to the API
    return IdeaAPI.createIdea(idea)
    // when the response is received, we hit the then() function
      .then(idea => {
        console.log('D');
        dispatch(addIdeaAction(idea));
      })
    .catch(error => console.log(error));
  }
  console.log('E');
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
