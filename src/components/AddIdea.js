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
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => { 
    event.preventDefault();
    const idea = this.state;
      if (idea.body === '') {
        alert("field cannont be blank");
      } else {
      this.props.addIdea(idea)
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
          <input autoComplete="off"
           type="text"
           name="body"
           value={this.state.body}
           onChange={this.handleChange}
           placeholder="add an item to your bucketlist"
         />
        <br/>
         <button>add your idea</button>
        </div>
      </form>
    )
  }
}

// the mapStateToProps() method is executed with each change to the store's state
// Shorten mapStateToProps() down to an anonymous arrow function and pass it directly into connect()
export default connect(state => ({ ideas: state.ideas }), { addIdea })(AddIdea);