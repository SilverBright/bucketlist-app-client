// The reducer is just a function with a switch/case statement that produces a new state.
// The reducer is a pure function which means that given the same arguments of state and action, it will always produce the same new state. Also it means that our reducer never updates the previous state, but rather creates a new state object.

            // (current state, action creator type)
export default (state = [], action) => {
  switch (action.type) {

    case "FETCH_IDEAS_ACTION":
      return action.ideas

    case "ADD_IDEA_ACTION":
      console.log("7: the reducer combines the current state with the new state, into a new array, then 'reduces' it down to the new state", state.concat(action.idea))  
      return state.concat(action.idea)
      // return [ ...state, action.idea];

    case "DELETE_IDEA_ACTION":
      return state.filter(idea => idea.id !== action.ideaId)

    default: 
      return state
  }
}