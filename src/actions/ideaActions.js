import IdeaAPI from '../services/IdeaAPI';

// SYNCHRONOUS ACTION CREATORS 

const fetchIdeasAction = ideas => {
  return {
    type: 'FETCH_IDEAS_ACTION',
    ideas
  }
}

const addIdeaAction = idea => {
  console.log("6: when the promise resolves, we dispatch another action with 'type': ADD_IDEA_ACTION that gets sent to the reducer", idea) // --> GO TO: ideas.js reducer, type: ADD_IDEA_ACTION
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
  console.log("2: invoke addIdea(idea) in ideaActions.js", idea ); // SENT FROM: this.props.addIdea(idea)
  return dispatch => {  // dispatch an action to state that we are about to make a request to our API
    return IdeaAPI.createIdea(idea) // then make a request to the API -->  GO TO: IdeaAPI createIdea(idea)
      .then(idea => {  // We do not hit our then() function until the response is received
        console.log("5: back to ideaActions, we can access the data when the promise resolves and becomes available by chaining a then() function onto the fetch() call", idea);
        dispatch(addIdeaAction(idea)); // when the promise resolves, we dispatch another action with 'type' that gets sent to the reducer --> GO TO: addIdeaAction on line 12
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
