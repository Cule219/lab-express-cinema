import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Cinema Ironhack</h1>
        <Link to="/movies"><button>Check the movies!</button></Link>
      </div>
    );
  }
}
