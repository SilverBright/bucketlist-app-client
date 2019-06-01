import React, { Component } from 'react';
import axios from 'axios';

class Idea extends Component {
  state = {
    idea: null
  }

  componentDidMount() {
    console.log(this.props)
    let id = this.props.match.params.idea_id;
    axios.get('http://jsonplaceholder.typicode.com/ideas/' + id)
      .then(res => {
        this.setState({
          idea: res.data
      })
      console.log(res)
    })
  }
  render() {
    return (
      <div className="container">
        {/* <h4>{this.state.id}</h4> */}
      </div>
    )
  }
}

export default Idea;
