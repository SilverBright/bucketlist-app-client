import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIdea } from '../actions/ideaActions';


class AddIdea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }


//   if (this.state.title === "") {
//     alert("??");
//   } else {
//     this.props.addTodo(this.state.title);
//     this.setState({ title: "" });
//   }
// };

  handleSubmit = event => { 
    event.preventDefault();
    const idea = this.state;
    if (idea.body === '') {
      alert("field cannont be blank");
    } else {
    this.props.addIdea(idea)
    // console.log(idea)
    this.setState({
        body: ''
    })
  }
  }

render() {
    return (
       <form onSubmit={this.handleSubmit}>

         <label htmlFor="idea_body"></label>
          <input
           type="text"
           name="body"
           value={this.state.body}
           onChange={this.handleChange}
           placeholder="add an item to your bucketlist"
         />
        <br/>
         <button>add your idea</button>
       </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { ideas: state.ideas}
};

export default connect(mapStateToProps, { addIdea })(AddIdea);