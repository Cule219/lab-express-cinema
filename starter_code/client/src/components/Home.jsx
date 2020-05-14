import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './styles.css';

export default class Home extends Component {
  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <h1>Welcome to Express Cinema</h1>
        <Button
          className="homeBtn"
          variant="contained"
          size="medium"
          color="primary"
        >
          <Link to="/movies">Check The Movies!</Link>
        </Button>
        <Button
          className="homeBtn"
          variant="contained"
          size="medium"
          color="primary"
        >
          <Link to="/movies/new">Add a movie</Link>
        </Button>
      </Grid>
    );
  }
}
