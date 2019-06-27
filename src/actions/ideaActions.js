import IdeaAPI from '../services/IdeaAPI';

// SYNCHRONOUS ACTION CREATORS 

const fetchIdeasAction = ideas => {
  return {
    type: 'FETCH_IDEAS_ACTION',
    ideas
  }
}

const addIdeaAction = idea => {
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
  return dispatch => {  
    return IdeaAPI.createIdea(idea) 
      .then(idea => {  
        dispatch(addIdeaAction(idea)); 
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