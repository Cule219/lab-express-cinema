import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './Home.css';



export default class Home extends Component {
  async callMyBackend() {
    // this is an example call to our backend
    let responseFromBackend = await axios.get("http://localhost:5000/");
    console.log(responseFromBackend);
  }
  render() {
    return (
      <div className="main">
        <div className="container">
          <h1>Iron Cinema</h1>
          <button><Link to={`/movies`}>Check out movies!</Link></button>
        </div>
      </div>
    );
  }
}

