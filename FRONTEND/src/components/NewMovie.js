import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class NewMovie extends Component {
  state = {};

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    let res = await axios.post("http://localhost:5000/movies", this.state);
    console.log(`I'm submitting bitches`);
    console.log(res);
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Link to="/movies">Go back</Link>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input
            name="title"
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <br />
          <label>Director</label>
          <input
            name="director"
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <br />
          <label>Stars</label>
          <input
            name="stars"
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <br />
          <label>Description</label>
          <input
            name="description"
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <br />
          <label>Showtimes</label>
          <input
            name="showtimes"
            type="text"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewMovie;
