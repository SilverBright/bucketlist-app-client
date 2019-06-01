export default (state = [], action) => {
  switch (action.type) {

    case "SUCCESSFUL_IDEAS_FETCH":
      return action.ideas

    case "SUCCESSFULLY_ADDED_IDEA":
      return state.concat(action.idea)

    case "SUCCESSFULLY_DELETE_IDEA":
      return state.filter(idea => idea.id !== action.ideaId)

    default: 
      return state
  }
}