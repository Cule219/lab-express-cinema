import React, { Component } from "react";
import Home from "./components/Home";
import Movies from "./components/Movies";
import MovieInfo from './components/MovieInfo'
import NewMovie from './components/NewMovie'
import { Switch, Route } from 'react-router-dom'
import Axios from 'axios'

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={(props) =>   <Home {...props} /> } />
          <Route exact path='/movies' component={(props) =>   <Movies {...props} /> }/>
          <Route exact path='/movies/new' component={(props) =>   <NewMovie {...props} /> }/>
          <Route path='/movies/:id' component={(props) =>   <MovieInfo {...props} /> }/>
        </Switch>
      </div>
    );
  }
}

export default App;
