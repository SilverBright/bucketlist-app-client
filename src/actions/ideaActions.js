import IdeaAPI from '../services/IdeaAPI';
import { makeFetchRequest, finishFetchRequest, unsuccessfulFetchRequest } from './actionTypes';

// Synchronous Action Creators

// These are the funtions that will go to the reducer

// will be called when the date has been successfully fetched
// data will be passed to 'ideas'
const successfullIdeasFetch = ideas => {
  // return an object with a property called 'ideas' with a value of an array of 'ideas'
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

// By default, Redux action creators don’t support asynchronous actions like fetching data, 
// so here’s where we utilise Redux Thunk. Thunk allows you to write action creators that 
// return a function instead of an action. The inner function can receive the store methods.
// Thunk will allow us to make async actions so all the action creators activate in the correct order

export const fetchIdeas = () => {
  // We return a function instead of an action object
  // Redux Thunk receives the store's dispatch function as its argument
  // With that, we can dispatch multiple actions from inside that returned function
  return dispatch => {
    // return a dispatch and pass in makeFetchRequest defined in actionTypes
    dispatch(makeFetchRequest())
    // make an API call and fetch ideas
    IdeaAPI.fetchIdeas()
    // once the response is received, iterate through the collection of ideas
      .then(ideas => {
        // return a dispatch for finishedFetchRequest defined in actionTypes
        dispatch(finishFetchRequest())
        // return a dispatch for successfullIdeasFetch defined above in synchronous action creators
        dispatch(successfullIdeasFetch(ideas))
      })
      // use catch function to 'catch' any errors
      .catch(error => {
        // return a dispatch for unsuccessfulFetchRequest() (if any) defined in actionTypes
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

