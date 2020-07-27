import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Movies extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    let res = await axios.get("http://localhost:5000/movies");
    console.log(res);
    this.setState({
      movies: res.data,
    });
    console.log(this.state.movies);
  }

  displayMovies = () => {
    return this.state.movies.map((element) => {
      return (
        <div>
          <img src={element.image} alt="movie picture" />
          <h5>{element.title}</h5>
          <Link to={`movies/${element._id}`}>See more</Link>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h2>Ironhack Cinema</h2>
        <p>click on the movie to see showtimes!</p>
        <Link to="/new">Add movie</Link>
        {this.displayMovies()}
      </div>
    );
  }
}

export default Movies;
