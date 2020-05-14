import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

let moviesUrl = `http://localhost:5000/movies`;
class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount = () => {
    Axios.get(moviesUrl)
      .then((res) => this.setState({ movies: res.data.movies }))
      .catch((err) => console.log(err));
  };

  displayMovies = () => {
    let movieArr = [...this.state.movies];
    console.log(movieArr);
    return movieArr.map((eachMovie) => {
      return (
        <ul key={eachMovie._id}>
          <li>
            <h3>{eachMovie.title}</h3>
            <img src={eachMovie.image} alt={eachMovie.title} />
            <p>{eachMovie.description}</p>
            <Link to={`/movies/${eachMovie._id}`}>
              <button>Learn More!</button>
            </Link>
          </li>
        </ul>
      );
    });
  };

  render() {
    console.log(this.state.movies);
    return (
      <div>
        Hello World
        {this.displayMovies()}
      </div>
    );
  }
}

export default Movies;
