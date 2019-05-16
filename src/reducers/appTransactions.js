export default (state = {
  makeRequestToAPI: false,
  lastRequestFailed: false,
}, action => {
  switch (action.type) {

    case "MAKE_API_REQUEST":
      return {
        ...state,
        lastRequestFailed: true
      }

    case "COMPLETED_API_REQUEST":
      return {
        ...state,
        makeRequestToAPI: false
      }

    case "FAILED_API_REQUEST":
      return {
        ...state,
        makeRequestToAPI: false,
        lastRequestFailed: true,
      }

    default:
      return state
  }
}