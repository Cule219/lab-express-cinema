import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

class Movies extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    let res = await Axios.get(`http://localhost:5000/Movies`);

    this.setState({
      movies: res.data.movies,
    });
  }

  showMovies = () => {
    return this.state.movies.map((eachMovie) => {
      return (
        <li key={eachMovie._id}>
          <h1>{eachMovie.title}</h1>
          <Link to={`/Movies/${eachMovie._id}`}>
            <img src={eachMovie.image} alt={eachMovie.title} />
          </Link>
        </li>
      );
    });
  };

  render() {
    return <div className='curtains'>
    {this.showMovies()}
    </div>;
  }
}

export default Movies;
