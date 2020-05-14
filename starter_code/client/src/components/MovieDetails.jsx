import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

class MovieDetails extends Component {
  state = {
    movie: [],
  };

  componentDidMount = () =>
    Axios.get(
      `http://localhost:5000/movies/${this.props.match.params.id}`
    ).then((res) => this.setState({ movie: res.data })); //api call, sets the state

  render() {
    const movie = this.state.movie;
    console.log(movie);
    return (
      <div>
        <Link to={`/movies`}>Go Back</Link>
        <h1>{movie.title}</h1>
        <h2> {movie.director} </h2>
        <ul>
          {movie.stars && movie.stars.map((star) => <li key={star}>{star}</li>)}
        </ul>
        <img src={movie.image} alt={movie.title} />
      </div>
    );
  }
}

export default MovieDetails;
