import React, { Component } from "react";
import axios from "axios";
import { Link, Switch, Route } from 'react-router-dom';
import Movie from './Movie';



export default class Home extends Component {
  async callMyBackend() {
    // this is an example call to our backend
    let responseFromBackend = await axios.get("http://localhost:5000/");
    console.log(responseFromBackend);
  }
  render() {
    return (
      <div>
        {/* <button onClick={this.callMyBackend}>Test Backend Call</button>
        <h1>Welcome to Express Cinema</h1> */}
        <h1>Iron Cinema</h1>
        <Link to={`/movies`}>Movie</Link>



        <Switch>
        <Route exact path='/movies' render={(props) => <Movie {...props} />}></Route>
      </Switch>
      </div>
    );
  }
}
