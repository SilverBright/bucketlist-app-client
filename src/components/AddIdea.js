import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIdea } from '../actions/ideaActions';

class AddIdea extends Component {
  // set local state for form data
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
  }

  // set state for local form data
  handleChange = event => {
    // { body: value }
    const { name, value } = event.target;
    //console.log changes in real-time
    console.log({value})
    this.setState({
      [name]: value
    });
  }

  // submit local state to the store 
  handleSubmit = event => { 
    event.preventDefault();
    const idea = this.state;
      if (idea.body === '') {
        alert("field cannont be blank");
      } else {
      // send local state to the store using addIdea action creators
      // this.array.actioncreator.idea
      this.props.addIdea(idea)
      // clear the form by setting the state to 'blank'
      this.setState({
        body: ''
      });
    }
  }

  render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="form">
          <label htmlFor="idea-body"></label>
          {/* turn off Chrome autocomplete */}
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

// the mapStateToProps() method is executed with each change to the store's state
// Shorten mapStateToProps() down to an anonymous arrow function and pass it directly into connect()
// export default connect(state => ({ ideas: state.ideas }), { addIdea })(AddIdea);
export default connect(null, { addIdea })(AddIdea);

// Dan Abramov:
// Use React for ephemeral (short-lived) state that doesn’t matter to the app globally 
// and doesn’t mutate in complex ways. For example... a form input state. 
