const initialIdeaState = {
  ideas: []
}

const idea = (state = initialIdeaState, action) => {
  switch(action.type) {
    case 'GET_IDEAS':
      return Object.assign({}, state, {ideas: action.ideas});
    default:
      return state;
  }
}

export default idea;