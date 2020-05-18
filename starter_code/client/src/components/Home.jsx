import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

export default class Home extends Component {
  async callMyBackend() {
    // this is an example call to our backend
    let responseFromBackend = await axios.get("http://localhost:5000/");
    console.log(responseFromBackend);
  }
  render() {
    return (
      <div className='Home'>
        <h1>Welcome to Express Cinema</h1>
       <Link className='btn' to='/movies'>Check out the Movies</Link>
      <Link className="btn" to='/movies/new'>Add New Movie</Link>
      </div>
    );
  }
}
