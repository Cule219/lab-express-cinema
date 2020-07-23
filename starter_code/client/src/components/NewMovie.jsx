import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class NewMovie extends Component {

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    let res = await axios.post("http://localhost:5000/movies/new", this.state)
    console.log(res.data)
  }

  render() {
    return (
      <div>
        <Link to="/movies">Go Back</Link>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title"> Title: </label>
          <input onChange={this.handleChange} type="text" name="title" placeholder="Title"></input>
          <button type="submit"> Save </button>
        </form>
      </div>
    );
  }
}

export default NewMovie;