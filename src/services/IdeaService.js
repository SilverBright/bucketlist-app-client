const API_URL = process.env.REACT_APP_API_URL;

const IdeaService = {
  fetchIdeas() {
    return fetch(`${API_URL}/ideas`)
      .then(response => response.json())
  }
}

export default IdeaService;