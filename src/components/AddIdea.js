import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIdea } from '../actions/ideaActions';

class AddIdea extends Component { 
  constructor(props) {  
    super(props);
    this.state = {
      body: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target; // { body: value }
    // console.log({value})
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => { 
    event.preventDefault();
    const idea = this.state; // SAVING LOCAL STATE
      if (idea.body === '') {
        alert("field cannont be blank");
      } else {
      console.log("1: submit the idea:", idea); // SUBMIT 'IDEA'
      this.props.addIdea(idea)  // invoke addIdea(idea)
      console.log("4: console.log 'idea' separately from action creators, after starting async request starts, and waiting for the promise to resolve", idea); // AFTER INVOKING CREATEIDEA(IDEA) FETCH REQUEST TO API
      this.setState({ // clear the form
        body: ''
      });
    }
  }

  render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="form">
          <label htmlFor="idea-body"></label>
            <input autoComplete="off" 
              type="text"
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
              placeholder="add an item to your bucketlist"
            />
            <br/>
          <button>add your bucklist item</button>
        </div>
      </form>
    )
  }
}

export default connect(state => ({ ideas: state.ideas }),{ addIdea })(AddIdea);

// Dan Abramov:
// Use React for ephemeral (short-lived) state that doesn’t matter to the app globally 
// and doesn’t mutate in complex ways. For example... a form input state. 