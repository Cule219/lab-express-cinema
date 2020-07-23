import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class Movies extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    let res = await axios.get(`http://localhost:5000/movies`);
    this.setState({
      movies: res.data
    });
  }
  showMovies = () => {
    console.log(this.state.movies);
    return this.state.movies.map(singleMovie => {
      return (
        <div>
          <img src={singleMovie.image} alt="movie" />
          <h2>{singleMovie.title}</h2>
          <Link to={`/movies/${singleMovie._id}`}>
            <p>See more</p>
          </Link>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div> Movies</div>
        {this.showMovies()}
      </div>
    );
  }
}

export default Movies;
