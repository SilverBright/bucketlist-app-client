const API_URL = process.env.REACT_APP_API_URL;

//fetch ideas
const IdeaAPI = { 
  fetchIdeas() {
    return fetch(`${API_URL}/ideas`)
      .then(response => response.json())
  },

  // create an idea
  createIdea(idea) {
    console.log("3: dispatch fetch request, and invoke createIdea(idea)", idea) // INVOKE CREATEIDEA() ASYNCHRONOUSLY
    const request = {
      method: 'POST',
      // serialize JSON data
      body: JSON.stringify({ 
        idea: idea 
      }),
        headers: { 
        'Content-Type': 'application/json',
    }
  };

    return fetch(`${API_URL}/ideas`, request) // RETURN THE PROMISE WE ARE WAITING TO RESOLVE
      .then(response => response.json())
  },

  // delete an idea
  deleteIdea(ideaId) {
    const request = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    };

    return fetch(`${API_URL}/ideas/${ideaId}`, request)
  }
};
 
export default IdeaAPI;