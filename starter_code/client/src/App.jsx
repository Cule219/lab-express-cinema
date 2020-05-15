import React, { Component } from 'react';
import Home from './components/Home';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails.jsx';
import NewMovie from './components/newMovie';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/movies"
            render={(props) => <Movies {...props} />}
          />
          <Route
            exact
            path="/movies/new"
            render={(props) => <NewMovie {...props} />}
          />
          <Route
            exact
            path="/movies/:id"
            component={(props) => <MovieDetails {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
