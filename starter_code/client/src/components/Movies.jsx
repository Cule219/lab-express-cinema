import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

let moviesUrl = `http://localhost:5000/movies`; // Gives me the url to my backend, How do I establish this backend when the URL is not a localhost?

class Movies extends Component {
  state = {
    movies: [],
    addMovie: false,
    title: "",
    director: "",
    description: "",
    showtimes: "",
    stars: "",
  };

  componentDidMount = () => {
    Axios.get(moviesUrl)
      .then((res) => this.setState({ movies: res.data.movies })) //grabs my data from my backend and sets the state
      .catch((err) => console.log(err));
  };

  displayMovies = () => {
    //passes each movie in my database and creates an item in a list
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
    this.setState({ addMovie: !this.state.addMovie }); // adds the conditional rendering to the add movie form, when true the form displays
  };

  setInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value, //[e.target.name] selects all the names that are in the form and submits them individually
    });
  };

  setArray = (e) => {
    let arr = e.target.value.split(","); //because stars and showtimes are arrays I collect as a string and turn them into strings at ever ","
    this.setState({
      [e.target.name]: arr,
    });
  };

  sendMessageToServer = (e) => {
    e.preventDefault();
    let res = Axios.post(
      // is supposed to send my input to add a new movie over to the backend, I am receiving the request but req.body comes out as "undefined"
      moviesUrl,
      this.state.title,
      this.state.description,
      this.state.director,
      this.state.showtimes,
      this.state.stars,
      this.state.image //marks the object that I am trying to send to my backend (appears as undefined under req.body) seeing a promis(<pending>)
    );

    console.log(res);
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
      movies: newMovies,
      newMessage: "Hurray we did it!",
    }); // sets the new movie in the this.state.movies and displays on list
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
  }; // makes the form that is conditionally rendered

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
