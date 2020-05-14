import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";

export default class Home extends Component {
  async callMyBackend() {
    // this is an example call to our backend
    let responseFromBackend = await axios.get("http://localhost:5000/");
    console.log(responseFromBackend);
  }
  render() {
    return (
      <div>
        <h1>Welcome to Express Cinema</h1>
        <button onClick={this.callMyBackend}>Test Backend Call</button>
        <button><Link style={{textDecoration:"none"}} to="/movies">Click here for Movies</Link></button>
        <button><Link style={{textDecoration:"none"}} to="/movies/new">New Movie</Link></button>
      </div>
    );
  }
}
