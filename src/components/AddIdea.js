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
    const idea = this.state; // saving local state
      if (idea.body === '') {
        alert("field cannont be blank");
      } else {
      console.log("1: submit the idea in addIdea.js", idea); 
      this.props.addIdea(idea)  // invoke addIdea(idea) -->  GO TO: ideaActions
      console.log("4: this is a console.log of 'idea' in addIdea.js after the async request starts, while waiting for the promise to resolve in ideaActions", idea); // --> GO TO: ideaActions.js
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