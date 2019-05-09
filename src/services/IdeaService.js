const IdeaService = {
  fetchIdeas() {
    return fetch('/ideas')
      .then(response => response.json())
  }
}

export default IdeaService;