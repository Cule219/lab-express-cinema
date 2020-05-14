import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Movies extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    // this is an example call to our backend
    let res = await axios.get('http://localhost:5000/movies');

    this.setState({
      movies: res.data,
    });
    console.log(this.state);
  }

  showMovies = () => {
    return this.state.movies.map((eachMovie) => {
      return (
        <li key={eachMovie._id}>
          <h1>{eachMovie.title}</h1>
          <img src={eachMovie.image} />
          <button>
            <Link to={`/movies/${eachMovie._id}`}>See more!</Link>
          </button>
        </li>
      );
    });
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
        {this.showMovies()}
      </div>
    );
  }
}
