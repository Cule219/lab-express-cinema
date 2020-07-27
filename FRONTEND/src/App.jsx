import React, { Component } from "react";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import Movies from "./components/Movies.js";
import MovieDetails from "./components/MovieDetails.js";
import NewMovie from "./components/NewMovie.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/movies" render={() => <Movies />} />
          <Route
            exact
            path="/movies/:id"
            render={(props) => <MovieDetails {...props} />}
          />
          <Route exact path="/new" render={() => <NewMovie />} />
        </Switch>
      </div>
    );
  }
}

export default App;
