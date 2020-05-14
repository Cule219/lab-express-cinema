import React, { Component } from "react";
import Home from "./components/Home";
import {Switch, Route} from 'react-router-dom'
import Movies from './components/Movies'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/movies' render={props => <Movies {...props}/>}/>
          <Route exact path='/' render={props => <Home {...props}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
