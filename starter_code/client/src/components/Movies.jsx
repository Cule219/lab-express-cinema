import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './movieCard'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';

export default class Movies extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    // this is an example call to our backend
    let res = await axios.get('http://localhost:5000/movies');

    this.setState({
      movies: res.data,
    });
    console.log(this.state);
  }

  showMovies = () => {
    return this.state.movies.map((eachMovie) => {

      return (
        <MovieCard key={eachMovie._id} movie={eachMovie} />
      );
    });
  };
  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <div>
        <Button
         variant="contained"
         onClick={this.goBack}
         color="default"
         startIcon={<KeyboardBackspaceIcon />}
      >
        Go back
      </Button>
        </div>
        {this.showMovies()}
      </div>
    );
  }
}
