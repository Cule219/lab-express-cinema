import React, { Component } from "react";
import Home from "./components/Home";
import { Switch, Route } from 'react-router-dom';
import Movie from './components/Movie';
import MovieDetails from './components/MovieDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';



class App extends Component {



  render() {
    return (
      <div className="App">
        <Home />
        <Switch>
          <Route exact path='/movies' render={(props) => <Movie {...props} />}></Route>
          <Route exact path='/movies/:id' render={(props) => <MovieDetails {...props} />}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
