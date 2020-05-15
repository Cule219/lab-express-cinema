import React, { Component } from 'react';
import axios from 'axios';

export default class MovieDetails extends Component {
  state = {
    movie: [],
    loaded: false,
  };

  async componentDidMount() {
    let id = this.props.match.params.id;

    let res = await axios.get(`http://localhost:5000/movies/${id}`);

    this.setState({
      movie: res.data,
      loaded: true,
    });
  }

  showExtra = (extra) => {
    return extra.map((el, i) => {
      return <li key={i}>{el}</li>;
    });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    let movie = this.state.movie;
    let loaded = this.state.loaded;

    return (
      <div>
        <button onClick={this.goBack}>Go Back</button>
        <h1>{movie.title}</h1>
        <h2>{movie.director}</h2>
        <img src={movie.image} />
        <p>{movie.description}</p>
        <h3>Stars</h3>
        {loaded ? this.showExtra(movie.stars) : ''}
        <h3>Show times:</h3>
        {loaded ? this.showExtra(movie.showtimes) : ''}
      </div>
    );
  }
}
