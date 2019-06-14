// The reducer is just a function with a switch/case statement that produces a new state.
// The reducer is a pure function which means that given the same arguments of state and action, it will always produce the same new state. Also it means that our reducer never updates the previous state, but rather creates a new state object.

            // (current state, action )
export default (state = [], action) => {
  switch (action.type) {

    case "FETCH_IDEAS_ACTION":
      // return payload property of ideas
      return action.ideas

    case "ADD_IDEA_ACTION":
      // return a new state, action.idea
      return state.concat(action.idea)
      // return [ ...state, action.idea];

    case "DELETE_IDEA_ACTION":
      return state.filter(idea => idea.id !== action.ideaId)

    // always return state as a default so you don't get null or undefined 
    default: 
      return state
  }
}