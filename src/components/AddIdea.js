import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIdea } from '../actions/ideas';

class AddIdea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => { 
    event.preventDefault();
    const idea = this.state;
    this.props.addIdea(idea)
    this.setState({
        title: '',
        body: ''
    })
  }

render() {
    return (
       <form onSubmit={this.handleSubmit}>

         <label htmlFor="idea_title">Idea Title</label>
          <input
           type="text"
           name="title"
           value={this.state.title}
           onChange={this.handleChange}
           placeholder="Idea Title"
         />

         <label htmlFor="idea_body">Idea Body</label>
          <input
           type="text"
           name="body"
           value={this.state.body}
           onChange={this.handleChange}
           placeholder="Idea Body"
         />
        <br/>
         <button>Brainstorm!</button>
       </form>
    )
  }
}

export default connect(null, { addIdea })(AddIdea);
  




