import IdeaAPI from '../services/IdeaAPI';

// Synchronous Action Creators: instantly returns an action with data ready to go
// data will be passed to 'ideas'
const successfullIdeasFetch = ideas => {
  // console.log(ideas)
  // return an object with a property called 'ideas' with a value of an array of 'ideas'
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

// Async Action Creators: takes some time to get data
// Middleware (thunk) is required to run async actions
// Middleware can STOP and MODIFY actions manually
// Thunk allows you to write action creators that return a function instead of an action 
// Thunk will allow us to make async actions so all the action creators activate in the correct order

export const getIdeas = () => {
  // We return a function instead of an action object
  // Redux Thunk receives the store's dispatch function as its argument
  // We can dispatch multiple actions from inside that returned function
  return dispatch => {
    // return a dispatch and pass in makeFetchRequest defined in actionTypes
    // dispatch(makeFetchRequest())
    // make an API call and fetch ideas
    return IdeaAPI.fetchIdeas()
    // once the response is received, iterate through the collection of ideas
      .then(ideas => {
        // return a dispatch for finishedFetchRequest defined in actionTypes
        // dispatch(finishFetchRequest())
        // return a dispatch for successfullIdeasFetch defined above in synchronous action creators
        dispatch(successfullIdeasFetch(ideas))
      })
      // use catch function to 'catch' any errors
      .catch(error => console.log(error));
        // return a dispatch for unsuccessfulFetchRequest() (if any) defined in actionTypes
        // dispatch(unsuccessfulFetchRequest())
        
      }
  }



export const addIdea = idea => { 
  return dispatch => {
    // dispatch(makeFetchRequest());
    return IdeaAPI.createIdea(idea)
      .then(idea => {
        // dispatch(finishFetchRequest());
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

// export const addIdea = idea => { 
//   return dispatch => {
//     dispatch(makeFetchRequest());
//     IdeaAPI.createIdea(idea)
//       .then(idea => {
//         dispatch(finishFetchRequest());
//         dispatch(successfullyAddedIdea(idea));
//       })
//       .catch(error => console.log(error));
//   }
// }

// export const deleteIdea = ideaId => { 
//   return dispatch => {
//     dispatch(makeFetchRequest());
//     IdeaAPI.deleteIdea(ideaId)
//       .then(response => {
//     //  if (response.true)
//         if (response.ok) {
//           dispatch(finishFetchRequest());
//           dispatch(succefullyDeletedIdea(ideaId));
//         }
//       })
//       .catch(error => console.log(error));
//   }
// }


