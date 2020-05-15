import React, { Component } from 'react';
import axios from 'axios';

export default class NewMovie extends Component {
  state = {
    title: '',
    image: '',
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/movies', this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        <div>
          <button onClick={this.goBack}>Go Back</button>
        </div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            name="title"
            type="text"
            placeholder="movie title"
            onChange={(e) => this.handleChange(e)}
          />
          <input
            name="image"
            type="text"
            placeholder="paste img:URL"
            onChange={(e) => this.handleChange(e)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
