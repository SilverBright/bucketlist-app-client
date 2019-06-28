export default (state = [], action) => {
  switch (action.type) {

    case "FETCH_IDEAS_ACTION":
      return action.ideas

    case "ADD_IDEA_ACTION":
      return state.concat(action.idea)

    case "DELETE_IDEA_ACTION":
      return state.filter(idea => idea.id !== action.ideaId)

    default: 
      return state
  }
}