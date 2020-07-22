import React, { Component } from "react";
import Home from "./components/Home";
import {Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
