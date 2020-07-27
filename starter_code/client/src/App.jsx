import React, { Component } from "react";
import Home from "./components/Home";
import {Switch, Route} from 'react-router-dom'
import Movies from "./components/Movies"
import SingleMovie from "./components/SingleMovie"
import {Switch, Route} from 'react-router-dom'
import NewMovie from "./components/NewMovie";

class App extends Component {
  render() {
    return (
      <div className="App">
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/movies/new">
            <NewMovie />
          </Route>
          <Route exact path="/movies/:id">
            {props => <SingleMovie {...props}/>}
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
