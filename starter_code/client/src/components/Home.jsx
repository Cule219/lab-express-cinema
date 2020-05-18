import React, { Component } from "react";
import axios from "axios";
import react from "react-dom"
import {Link} from 'react-router-dom'

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
        <Link to ="/movies"><button onClick={this.callMyBackend}>Movies</button></Link>
      </div>
    );
  }
}
