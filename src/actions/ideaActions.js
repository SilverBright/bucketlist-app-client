import IdeaAPI from '../services/IdeaAPI';
import { makeFetchRequest, finishFetchRequest, unsuccessfulFetchRequest } from './actionTypes';

// Synchronous Action Creators
const successfullIdeasFetch = ideas => {
  return {
    type: 'SUCCESSFUL_IDEAS_FETCH',
    ideas
  }
}

const successfullyAddedIdea = idea => {
  return {
    type: 'SUCCESSFULLY_ADDED_IDEA',
    idea
  }
}

const succefullyDeletedIdea = ideaId => {
  return { 
    type: "SUCCESSFULLY_DELETE_IDEA",
    ideaId
  }
}

// Async Action Creators
export const fetchIdeas = () => {
  return dispatch => {
    dispatch(makeFetchRequest())
    IdeaAPI.fetchIdeas()
      .then(ideas => {
        dispatch(finishFetchRequest())
        dispatch(successfullIdeasFetch(ideas))
      })
      .catch(error => {
        dispatch(unsuccessfulFetchRequest())
      })
  }
}

export const addIdea = idea => { 
  return dispatch => {
    dispatch(makeFetchRequest());
    IdeaAPI.createIdea(idea)
      .then(idea => {
        dispatch(finishFetchRequest());
        dispatch(successfullyAddedIdea(idea));
      })
      .catch(error => console.log(error));
  }
}

export const deleteIdea = ideaId => { 
  return dispatch => {
    dispatch(makeFetchRequest());
    IdeaAPI.deleteIdea(ideaId)
      .then(response => {
        if (response.ok) {
          dispatch(finishFetchRequest());
          dispatch(succefullyDeletedIdea(ideaId));
        }
      })
      .catch(error => console.log(error));
  }
}
