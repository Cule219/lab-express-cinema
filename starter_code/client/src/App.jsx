import React, { Component } from "react";
import Home from "./components/Home";
import { Switch, Route } from 'react-router-dom';
import Movie from './components/Movie';



class App extends Component {



  render() {
    return (
      <div className="App">
        <Home />
        <Switch>
          <Route exact path='/movies' render={(props) => <Movie {...props} />}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
