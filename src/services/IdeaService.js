const API_URL = process.env.REACT_APP_API_URL;

const IdeaService = {
  fetchIdeas() {
    return fetch(`${API_URL}/ideas`)
      .then(response => response.json())
  },

createIdea(idea) {
  const request = {
    method: 'POST',
    body: JSON.stringify({ 
      idea: idea 
    }),
      headers: { 
      'Content-Type': 'application/json',
      }
    };

    return fetch(`${API_URL}/ideas`, request)
      .then(response => response.json())
  }
}

export default IdeaService;