import IdeaAPI from '../services/IdeaAPI';

// SYNCHRONOUS ACTION CREATORS 
const fetchIdeasAction = ideas => {
  return {
    type: 'FETCH_IDEAS_ACTION',
    ideas
  }
}

const addIdeaAction = idea => {
  console.log("6: we dispatch an action with type: ADD_IDEA_ACTION that gets sent to the reducer", idea) // WE DISPATCH AN ACTION WITH TYPE THAT GETS SENT TO THE REDUCER
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
  console.log("2: invoke addIdea(idea) in ideaActions", idea ); // ADDIDEA(IDEA) from: this.props.addIdea(idea)
  return dispatch => {   // dispatch an action to state that we are about to make a request to our API
    return IdeaAPI.createIdea(idea) // Then we make the request
      .then(idea => {  // We do not hit our then() function until the response is received
        console.log("5: we can access the data when the promise resolves and becomes available by chaining a then() function onto the fetch() call", idea); // WE CAN ACCESS THE DATA WHEN THE PROMISE RESOLVES AND BECOMES AVAILABLE BY CHAINING THEN() FUNCTION ONTO OUR FETCH() CALL.
        dispatch(addIdeaAction(idea)); // WHEN THE PROMISE RESOLVES WE DISPATCH ANOTHER ACTION WITH 'TYPE'    
      })
    .catch(error => console.log(error));
  }
}

export const deleteIdea = ideaId => {
  return dispatch => { 
    return IdeaAPI.deleteIdea(ideaId) // Then we make the request
      .then(response => {
      if (response.ok)
      dispatch(deleteIdeaAction(ideaId));
    })
    .catch(error => console.log(error));
  }
}
