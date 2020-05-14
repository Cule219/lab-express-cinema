import React, { Component } from "react";
import Home from "./components/Home";
import {Switch, Route} from 'react-router-dom'
import Movies from './components/Movies'
import MovieDes from "./components/MovieDes";
import NewMovie from "./components/NewMovie";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path='/' component={(props) =>   <Home {...props} /> } />
        <Route exact path={'/movies'} render={(props)=><Movies {...props} />} />
        <Route exact path={'/movies/new'} render={(props)=><NewMovie {...props} />}/>
        <Route exact path={'/movies/:id'} render={(props)=><MovieDes {...props} />}/>
        </Switch>

      </div>
  );
  }
}

export default App;
