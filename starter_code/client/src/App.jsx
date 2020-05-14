import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

import Home from "./components/Home";
import Movies from "./components/Movies";
import Movie from "./components/Movie";

class App extends Component {
  state = {
    movies: []
  }

  componentDidMount = async () => {
    console.log("Mounting")
    let responseFromBackend = await axios.get("http://localhost:5000/movies");
    console.log(responseFromBackend.data);
    this.setState({
        movies: responseFromBackend.data,
    });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies" render={props => <Movies {...props} movies={this.state.movies} />} />
          <Route exact path="/movie/:movieId" render={props => <Movie {...props} movies={this.state.movies} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
