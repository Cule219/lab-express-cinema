import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class SingleMovie extends Component {
  state = {
    movie: []
  };
  async componentDidMount() {
    let res = await axios.get(
      `http://localhost:5000/movies/${this.props.match.params.id}`
    );
    console.log(res.data);

    this.setState({
      movie: res.data
    });
  }
  showMovie = () => {
    return (
      <div>
        <img src={this.state.movie.image} alt="movie" />
        <h2>{this.state.movie.title}</h2>
        <p>Director: {this.state.movie.director}</p>
        <p>Stars</p>
        {this.showStar()}
        <p>{this.state.movie.description}</p>
      </div>
    );
  };
  showStar = () => {
    return this.state.movie.stars?.map(star => {
      return <li>{star}</li>;
    });
  };
  render() {
    return (
      <div>
        <Link to="/movies">
          <p>Go back</p>
        </Link>
        {this.showMovie()}
      </div>
    );
  }
}

export default SingleMovie;
