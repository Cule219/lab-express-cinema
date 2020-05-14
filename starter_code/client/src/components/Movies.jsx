import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

let moviesUrl = `http://localhost:5000/movies`;
class Movies extends Component {
  state = {
    movies: [],
    addMovie: false,
    title: '',
    director: '',
    description: '',
    showtimes: '',
    stars: ''
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

  toggleAddMovie = () => {
    this.setState({ addMovie: !this.state.addMovie });
  };

  setInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  setArray = (e) => {
    let arr = e.target.value.split(",");
    this.setState({
      [e.target.name]: arr,
    });
  };

  sendMessageToServer = (e) => {
    e.preventDefault();
    let res = Axios.post(
      moviesUrl,
      this.state.title,
      this.state.description,
      this.state.director,
      this.state.showtimes,
      this.state.stars,
      this.state.image
    );

    console.log(res); //show the message 8
    let newMovies = [...this.state.movies];
    newMovies.push({
      title: this.state.title,
      description: this.state.description,
      director: this.state.director,
      showtimes: this.state.showtimes,
      stars: this.state.stars,
      image: this.state.image,
    });
    console.log(newMovies);

    this.setState({
      //9
      movies: newMovies,
      newMessage: "Hurray we did it!",
    });
  };

  addMovieForm = () => {
    if (this.state.addMovie === true) {
      return (
        <form>
          <input
            type="text"
            placeholder="title"
            name="title"
            onChange={this.setInput}
          ></input>
          <input
            type="text"
            placeholder="description"
            name="description"
            onChange={this.setInput}
          ></input>
          <input
            type="text"
            placeholder="director"
            name="director"
            onChange={this.setInput}
          ></input>
          <input
            type="text"
            placeholder="image"
            name="image"
            onChange={this.setInput}
          ></input>
          <input
            type="text"
            placeholder="showtimes"
            name="showtimes"
            onChange={this.setArray}
          ></input>
          <input
            type="text"
            placeholder="stars"
            name="stars"
            onChange={this.setArray}
          ></input>
          <button onClick={this.sendMessageToServer}>Submit Movie</button>
        </form>
      );
    }
  };

  render() {
    console.log(this.state.movies);
    return (
      <div>
        <button onClick={this.toggleAddMovie}> add movie! </button>
        {this.addMovieForm()}
        {this.displayMovies()}
        {console.log(this.state.newMessage)}
      </div>
    );
  }
}

export default Movies;
