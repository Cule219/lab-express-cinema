import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class Movies extends Component {
  state = {
    movies: []
  }

  componentDidMount = async () => {
    let res = await axios.get("http://localhost:5000/movies")
    console.log(res)
    this.setState({movies:res.data})
  }

  displayMovies() {
    return this.state.movies.map((movie,i) => {
      return (
        <div key={i}> {movie.title} <Link to={`/movies/${movie._id}`}> See More </Link> </div>
      )
    })
  }

  render() {
    return (
      <div>
        <Link to="/movies/new"><h2>Create New Movie</h2></Link>
        {this.displayMovies()}
      </div>
    );
  }
}

export default Movies;