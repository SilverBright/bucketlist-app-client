import IdeaService from '../services/IdeaService';
import { makeFetchRequest, completeFetchRequest, failedFetchRequest  } from './appTransactions';

// Synchronous Action Creators
const successfulIdeasFetch = ideas => {
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

const successfullyDeletedIdea = ideaId => {
  return {
    type: 'SUCCESSFULLY_DELETED_IDEA'
  }
}

// Async Action Creators

export const fetchIdeas = () => {
  return dispatch => {
    dispatch(makeFetchRequest())
    IdeaService.fetchIdeas()
    .then(ideas => {
      dispatch(completeFetchRequest())
      dispatch(successfulIdeasFetch(ideas))
    })
    .catch(error => {
      dispatch(failedFetchRequest())
    })
  }
}

export const addIdea = idea => {
  return dispatch => {
    dispatch(makeFetchRequest());
    IdeaService.createIdea(idea)
    .then(idea => {
      dispatch(completeFetchRequest());
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
        dispatch(completeFetchRequest());
        dispatch(successfullyDeletedIdea(ideaId));
      }
    })
    .catch(error => console.log(error));
  }
}

