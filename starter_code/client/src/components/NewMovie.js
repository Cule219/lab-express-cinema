import React, { Component } from "react";
import Axios from "axios";

class NewMovie extends Component {
  state = {
    message: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  handleSubmit = async e => {
    e.preventDefault();

    let res = await Axios.post(`http://localhost:5000/newmovie`, this.state);
    //console.log(res.data);
    this.setState({
      message: res.data
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input onChange={this.handleChange} name="title" type="text" />
          <label>Director</label>
          <input onChange={this.handleChange} name="director" type="text" />
          <label>Description</label>
          <input onChange={this.handleChange} name="description" type="text" />
          <button>Save</button>
        </form>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default NewMovie;
