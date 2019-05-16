import IdeaService from '../services/IdeaService';
import { makeFetchRequest, finishFetchRequest, unsuccessfulFetchRequest } from './appTransactions';

// Synchronous Action Creators
const successfullIdeasFetch = ideas => {
  return {
    type: 'SUCCESSFUL_IDEAS_FETCH',
    ideas
  }
}

const successfullyAddedIdea = ideas => {
  return {
    type: 'SUCCESSFULLY_ADDED_IDEA',
    ideas
  }
}

const succefullyDeletedIdea = ideaId => {
  return { 
    type: "SUCCESSFUL_IDEA_DELETION",
    ideaId
  }
}

// Async Action Creators
export const fetchIdeas = () => {
  return dispatch => {
    dispatch(makeFetchRequest())
    IdeaService.fetchIdeas()
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
    IdeaService.createIdea(idea)
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
    IdeaService.deleteIdea(ideaId)
      .then(response => {
        if (response.ok) {
          dispatch(finishFetchRequest());
          dispatch(succefullyDeletedIdea(ideaId));
        }
      })
      .catch(error => console.log(error));
  }
}

