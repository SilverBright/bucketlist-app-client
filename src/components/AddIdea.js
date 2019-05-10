import React, { Component } from 'react';

class AddIdea extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: ''
    }
  }

  // handleChange = (e) => {
  //   this.setState({
  //       title: e.target.value
  //   })
  // }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }
  handleSubmit = (e) => { 
    e.preventDefault();
    this.props.addIdea(this.state)
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
        <br/>
        <label htmlFor="idea_body">Idea Body</label>
        <input
          type="text"
          name="body"
          value={this.state.body}
          onChange={this.handleChange}
          placeholder="Idea Body"
        />
        <br/>
        <button>Add Your Idea</button>
      </form>
    )
  }
}

//   handleChange = (e) => {
//     this.setState({
//         title: e.target.value
//     })
//   }
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.addTodo(this.state)
//     this.setState({
//         title: ''
//     })
//   }
//   render(){
//     return (
//         <div>
//             <form onSubmit={this.handleSubmit}>
//                 <label>Add a new idea here:</label>
//                 <input type="text" onChange={this.handleChange} value={this.state.title} />
//             </form>
//         </div>
//     )
//   }
// }

export default AddIdea;
  




