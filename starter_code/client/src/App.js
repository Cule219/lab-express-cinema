import React, { Component } from "react";
import Home from "./components/Home";
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} />}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
