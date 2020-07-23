import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

export default class Movies extends Component {

    state={

    }

    handleChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = async e =>{
        e.preventDefault()
        let res = await axios.post("http://localhost:5000/new", this.state)
        alert(res.data)
    }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="title">Movie Title</label>
          <input onChange={this.handleChange} name="title" type="text" />
          <label for="director">Director</label>
          <input onChange={this.handleChange} name="director" type="text" />
          <button>Save</button>
        </form>
      </div>
    );
  }
}
