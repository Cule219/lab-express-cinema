import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Home extends Component {
  async callMyBackend() {
    // this is an example call to our backend
    let responseFromBackend = await axios.get("http://localhost:5000/");
    console.log(responseFromBackend);
  }
  render() {
    return (
      <div>
        <Link to="/movies">
          <button onClick={this.callMyBackend}>Check te movies!</button>
        </Link>
        <h1>Cinema Ironhack</h1>
      </div>
    );
  }
}
