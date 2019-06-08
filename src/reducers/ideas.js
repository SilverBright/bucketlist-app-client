export default (state = [], action) => {
  switch (action.type) {

    case "SUCCESSFUL_IDEAS_FETCH":
      // return payload property
      return action.ideas

    case "SUCCESSFULLY_ADDED_IDEA":
      // set the current state to a NEW array
      return state.concat(action.idea)
      // return [ ...state, action.idea] ;

    case "SUCCESSFULLY_DELETE_IDEA":
      return state.filter(idea => idea.id !== action.ideaId)

    default: 
      return state
  }
}